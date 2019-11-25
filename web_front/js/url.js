// 把地址公用的信息单独拿出来，以全局变量来保存
// 可以单独工作修改
var Url = 'http://localhost:8000'
var publicUrl = {
  // 获取用户信息
  loginfo_url: Url + '/admin/getuser',
  // 获取文章类别
  show_url: Url + '/admin/category_search',
  // 编辑文章类别
  edit_url: Url + "/admin/category_edit",
  // 文章列表获取文章信息
  article_show: Url + '/admin/search',
}