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
  // 获取文章类别
  show_url: Url + '/admin/category_search',
  // 新增文章类别
  add_url: Url + '/admin/category_add',
  // 删除文章类别
  del_url: Url + '/admin/category_delete',
  // 编辑文章类别
  edit_url: Url + "/admin/category_edit",
  // 文章列表获取文章信息
  article_show: Url + '/admin/search',
  // 文章删除
  article_del: Url + '/admin/article_delete',
  // 发布文章
  article_publish: Url + '/admin/article_publish',
}