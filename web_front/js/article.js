// 文章类别管理js文件
var category = {
  // 获取文章类别
  show: function(callback) {
    $.get(publicUrl.show_url,
      function(res) {
        callback(res)
      })
  },
  article_show: function(callback) {
    $.get(publicUrl.article_show, { perpage: 5 }, function(res) {
      callback(res)
    })
  },
  // 文章详情
  article_xiang: function(id, callback) {
    $.get(publicUrl.article_show, { "id": id }, function(res) {
      callback(res)
    })
  },
  // 发表评论
  article_comment: function(name, content, article_id, callback) {
    $.post(publicUrl.article_comment, {
      "name": name,
      "content": content,
      "article_id": article_id
    }, function(res) {
      callback(res)
    })
  },
  // 评论列表
  comment_list: function(article_id, callback) {
    $.get(publicUrl.comment_list, { "article_id": article_id }, function(res) {
      callback(res)
    })
  }
}