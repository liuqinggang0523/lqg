// 把地址公用的信息单独拿出来，以全局变量来保存
// 可以单独工作修改
var Url = 'http://localhost:8000'
var publicUrl = {
  // 登录
  login_url: Url + '/admin/login',
  // 退出
  logout_url: Url + '/admin/logout',
  // 获取用户信息
  loginfo_url: Url + '/admin/getuser',
}