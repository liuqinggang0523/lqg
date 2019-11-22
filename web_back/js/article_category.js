// 文章类别管理js文件
var category = {
  // 获取文章类别
  show: function(callback) {
    $.get(publicUrl.show_url,
      function(res) {
        callback(res)
      })
  },
  // 新增文章类别
  add: function(name, slug, callback) {
    $.post(publicUrl.add_url, { name: name, slug: slug },
      function(res) {
        callback(res)
      })
  },
  // 删除文章类别
  del: function(id, callback) {
    $.post(publicUrl.del_url, { 'id': id },
      function(res) {
        callback(res)
      })
  },

  // 编辑文章类别
  edit: function(id, name, slug, callback) {
    $.post(publicUrl.edit_url, { id: id, name: name, slug: slug },
      function(res) {
        callback(res)
      })
  }
}