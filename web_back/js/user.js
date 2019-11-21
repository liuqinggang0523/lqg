// 用户js文件
var user = {
  // 此接口有两个参数，所以需要设置参数接受
  login: function(userName, password, callback) {
    $.post(publicUrl.login_url, {
        user_name: userName,
        password: password
      },
      function(res) {
        callback(res)
      })
  },

  logout: function(callback) {
    $.post(publicUrl.logout_url, function(res) {
      callback(res)
    })
  },

  getInfo: function(callback) {
    $.get(publicUrl.loginfo_url,
      function(res) {
        callback(res)
      })
  }
}