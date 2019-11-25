// 文章类别管理js文件
var category = {
  // 获取文章类别
  show: function(callback) {
    $.get(publicUrl.show_url,
      function(res) {
        callback(res)
      })
  },
}