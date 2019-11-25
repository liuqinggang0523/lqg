// 文章列表管理
var list = {
  // 获取页码值curPage
  article_show: function(curPage, type, state, callback) {
    $.get(publicUrl.article_show, {
      page: curPage,
      type: type,
      state: state,
    }, function(res) {
      callback(res)
    })
  },
  // 删除文章
  article_del: function(id, callback) {
    $.get(publicUrl.article_del, { 'id': id }, function(res) {
      callback(res)
    })
  },
  // 发布文章
  article_fabu: function(fd, callback) {
    $.ajax({
      url: publicUrl.article_publish,
      type: 'post',
      data: fd,
      processData: false, // 不要让jquery自动去转换data
      contentType: false, // 不要自动给content-type设置值。因为formData传参会有自己的请求头 multipart/form-data
      success: function(res) {
        callback(res)
      }
    })
  },
  // 编辑文章
  artice_change: function(id, callback) {
    $.get(publicUrl.article_show, { 'id': id }, function(res) {
      callback(res)
    })
  },
  // 修改文章
  article_edit: function(fd, callback) {
    $.ajax({
      url: publicUrl.article_edit,
      type: 'post',
      data: fd,
      processData: false, // 不要让jquery自动去转换data
      contentType: false,
      success: function(res) {
        callback(res)
      }
    })
  }
}