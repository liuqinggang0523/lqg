// 文章管理js文件
var category = {
  // 获取
  show: function(name, slug, callback) {
    $.post(publicUrl.show_url, ), { name: name, slug: slug },
      function(res) {
        callback(res)
      }
  },
  // 删除
  del: function(id, callback) {
    $.post(publicUrl.del_url, ), { id: id },
      function(res) {
        callback(res)
      }
  },

  // 编辑
  edit: function(id, name, slug, callback) {
    $.post(publicUrl.edit_url, ), { id: id, name: name, slug: slug },
      function(res) {
        callback(res)
      }
  }
}