<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------


namespace app\common\server;


class UrlServer
{
    /**
     * User: 意象信息科技 lr
     * Desc: 获取文件全路径
     * @param string $uri
     * @param string $type
     * @return string
     */
    public static function getFileUrl($uri = '', $type = '')
    {
        if (empty($uri)) {
            return '';
        }
        if (strstr($uri, 'http://') || strstr($uri, 'https://')) {
            return $uri;
        }

        if ($uri && $uri !== '/' && substr($uri, 0, 1) !== '/') {
            $uri = '/' . $uri;
        }

        // 获取存储引擎信息
        $engine = ConfigServer::get('storage', 'default', 'local');

        if ($engine === 'local') {

            //图片分享处理
            if ($type && $type == 'share') {
                return ROOT_PATH . $uri;
            }

            if (isset($uri[0])) {
                $uri[0] != '/' && $uri = '/' . $uri;
            }
            
            $protocol = is_https() ? 'https://' : 'http://';
            $file_url = config('project.file_domain');
            if ($file_url[strlen($file_url) - 1] == '/') {
                $file_url = substr($file_url,0,strlen($file_url)-1);
                
                $port = request()->port();
                $port = in_array($port, [ '80', '443' ])  ? '' : ":{$port}";
                
                $file_url .= $port;
            }
            
            return $protocol . $file_url . $uri;

        } else {

            $config = ConfigServer::get('storage_engine',$engine);
            $domain = isset($config['domain']) ? $config['domain'] : 'http://';
            if ($domain[strlen($domain) - 1] == '/') {
                $domain = substr($domain,0,strlen($domain)-1);
            }
            return $domain . $uri;
        }
    }

    /**
     * NOTE: 设置文件路径转相对路径
     * @author: 张无忌
     * @param string $uri
     * @return mixed
     */
    public static function setFileUrl($uri='')
    {
        $engine = ConfigServer::get('storage', 'default', 'local');
        if ($engine === 'local') {
            $domain = request()->domain();
            return str_replace($domain.'/', '', $uri);
        } else {
            $config = ConfigServer::get('storage_engine', $engine);
            return str_replace($config['domain'], '', $uri);
        }
    }

}