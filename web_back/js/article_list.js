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
  article_fabu: function(callback) {
    $.post(publicUrl.article_publish, {}, function() {
      callback(res)
    })
  }
}