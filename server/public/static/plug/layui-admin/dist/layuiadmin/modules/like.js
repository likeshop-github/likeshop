var lock = {};
var load = {};
layui.define(["jquery", "form", "upload"], function (exports) {
    $ = layui.$;
    upload = layui.upload;
    var ojb = {
        tableLists: function (elem, url, cols, where,page = true) {
        where = where === undefined ? {} : where;
        page = page === undefined ? true : page;
        layui.use(['table'], function () {
            var table = layui.table;
            table.render({
                elem: elem
                , url: url
                , cols: [cols]
                , where: where
                , text: {none: '暂无相关数据'}
                , response: {
                    statusCode: 1
                }
                , page: page
                , parseData: function (res) {
                    return {
                        "code": res.code,
                        "msg": res.msg,
                        "count": res.data.count,
                        "data": res.data.lists
                    };
                }
                , done: function() {
                    // 解决操作栏因为内容过多换行问题
                    $(".layui-table-main tr").each(function (index, val) {
                        $($(".layui-table-fixed-l .layui-table-body tbody tr")[index]).height($(val).height());
                        $($(".layui-table-fixed-r .layui-table-body tbody tr")[index]).height($(val).height());
                    });
                }
            });
        });
    },
        eventClick: function (active) {
            $(document).on("click", ".layEvent", function () {
                var type = $(this).attr("lay-event");
                var obj  = $(this).attr("lay-data");

                active[type] ? active[type].call(this, obj) : "";
            });

            layui.use(["table"], function () {
                layui.table.on("tool(like-table-lists)", function(obj){
                    var type = obj.event;
                    active[type] ? active[type].call(this, obj) : "";
                });
            });
        },
        ajax: function (json) {
            var load_index = null;
            if (json.beforeSend === undefined) {
                if (lock[json.url.replace("/", "_")] !== undefined) {
                    return
                }
                lock[json.url.replace("/", "_")] = true;
                json.beforeSend = function () {
                    load[json.url.replace("/", "_")] = setTimeout(function () {
                        load_index = layer.load(1, {shade: [0.1, "#fff"]})
                    }, 1500)
                }
            }
            if (json.error === undefined) {
                json.error = function (res) {
                    layer.msg("网络错误", {offset: "240px", icon: 2, time: 1500}, function () {
                        return
                    })
                }
            }
            if (json.timeout === undefined) {
                json.timeout = 30000
            }
            if (json.type === undefined) {
                json.type = "get"
            }
            json.complete = function (xhr, status) {
                delete lock[json.url.replace("/", "_")];
                if (status == "timeout") {
                    layer.msg("请求超时，请重试", {offset: "240px", icon: 2, time: 1500}, function () {
                        if (load_index !== undefined) {
                            layer.close(load_index)
                        }
                        return
                    });
                    return
                }
                clearTimeout(load[json.url.replace("/", "_")]);
                if (load_index !== undefined) {
                    layer.close(load_index)
                }
                res = xhr.responseJSON;
                if (res !== undefined && res.code == -1) {
                    window.location.href = window.location.href
                }
                if (res !== undefined && res.code == 0 && res.show == 1) {
                    layer.msg(res.msg, {offset: "240px", icon: 2, time: 1500}, function () {
                        return;
                    })
                }
            };
            $.ajax(json)
        },
        imageUpload: function (element, upload_call_back,css, area, title) {
            var area = (area === undefined) ? ["90%", "90%"] : area;
            var title = (title === undefined) ? "上传图片" : title;
            var css = css === undefined ? false : css;
            var click_element = element;
            if(css === true){
                $(element).addClass('upload-image-div');
                $(element).html(' <a class="upload-image-a" > + 添加图片</a>');
                click_element = element+ ' .upload-image-a';
            }
            $(document).on("click", click_element, function () {
                var click_element = $(this);
                if(css === true){
                    click_element = click_element.parent();
                }
                var windows = parent.layer.open({
                    type: 2,
                    title: title,
                    content: image_upload_url,
                    area: area,
                    shadeClose: true
                });
                parent.window.callback = function (uri) {
                    upload_call_back(uri, click_element);
                    return uri
                };
                parent.window.callbackSetUri = function (uri) {
                    upload_call_back(uri, click_element);
                    layer.close(windows);
                    return uri
                }
            })
        },
        showImg: function (url, xp) {
            function getImageWidth(url, callback) {
                var img = new Image();
                img.src = url;
                if (img.complete) {
                    callback(img.width, img.height)
                } else {
                    img.onload = function () {
                        callback(img.width, img.height)
                    }
                }
            }
            xp === undefined ? 500 : xp;
            getImageWidth(url, function (width, height) {
                if (height > xp) {
                    var ratio = width / height;
                    height = xp;
                    width = height * ratio
                }
                if (width > xp) {
                    var ratio = height / width;
                    width = xp;
                    height = width * ratio
                }
                layer.closeAll();
                layer.open({
                    type: 1,
                    closeBtn: 1,
                    shade: false,
                    title: false,
                    shadeClose: false,
                    area: ["auth", "auth"],
                    content: '<img src="' + url + '" width="' + width + 'px" height="' + height + 'px">'
                })
            })
        },
        // 从URL中取出文件名(除去http网址, 根据存储对象)
        getUrlFileName: function(url, domain) {
            return url.replace(domain, '');
           // var data = url.split('/');
           // return data[data.length - 3] + '/' + data[data.length - 2] + '/' + data[data.length - 1];
        },
        videoUpload: function (element,url) {
            $(element).addClass('upload-video-div');
            $(element).html(' <a class="upload-video-a" > + 添加视频</a>');
            upload.render({ //允许上传的文件后缀
                elem: element
                ,url: url       //改成您自己的上传接口
                ,accept: 'file' //普通文件
                ,exts: 'mp3|mp4|AVI|mov|rmvb|rm|FLV|3GP|wav'
                ,done: function(res){
                    if (res.code === 1){
                        var video = '<div class="show-video">' +
                            ' <video width="160" height="160"  src="'+res.data.domain+res.data.uri+'"controls autoplay></video>'
                            +'<a class="goods-video-del-x goods-video-del">x</a>'
                            + '<input type="hidden" name="video" value="/'+res.data.uri+'">'
                            '</div>';

                        $(element).after(video);
                        $(element).hide();
                        layer.msg('上传成功');
                    } else {
                        layer.msg(res.msg);
                    }
                }
            });
        }
        ,certUpload:function (element, url, domain) {
            upload.render({
                elem: element
                ,url: url
                ,accept:'file'
                ,exts:'pem|txt|doc'
                ,done: function(res, index, upload) {
                    var html = '<div class="pay-li">\n' +
                        '<img class="pay-img" ' +
                        'src="/static/common/image/default/upload.png">' +
                        '<a class="pay-img-del-x" style="display: none">x</a>' +
                        '</div>';
                    $(element).prev().val(res.data.uri.replace(domain, ''));
                    $(element).after(html);
                    $(element).css('display','none');
                }
            });
        },
        videoCallback: function(uris) {
            var html = '<ul id="video-container">';
            for(let uri of uris) {
                html += '<li class="video-item">';
                html += '<video src="'+uri+'" width="80" height="80"></video>';
                html += '<input type="hidden" name="video" value="' + uri + '" />';
                html += '<span class="video-del">x</span>';
                html += '</li>';
            }

            html += '<div class="upload-file-div video-style" style="display:none" id="video">';
            html += '<a href="#" class="upload-file-title">+添加视频</a>';
            html += '</ul>';
            var videoParent = $('#video').parent();
            $('#video')[0].remove();
            videoParent.append(html);

            $('#video-container video').click(function() {
                var video = $(this);
                var uri = video.attr('src');
                layer.open({
                    type: 2,
                    title: '查看视频',
                    content: '/admin/file_new/showVideo?uri='+uri,
                    area: ['90%', '90%']
                });
            });

            // 删除视频按钮
            $('.video-del').click(function() {
                $(this).parent().remove();
                var items = $('.video-item');
                if(items.length == 0) {
                    $('.upload-file-div').css('display', 'block');
                    // 视频上传
                    $('#video').click(function(){
                        layer.open({
                            type: 2,
                            title: '上传视频',
                            content: '/admin/file_new/lists?type=video',
                            area: ['90%', '90%']
                        });
                    });
                }
            });
        }
    };
    exports("like", ojb)
});