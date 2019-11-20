// 把地址公用的信息单独拿出来，以全局变量来保存
var Url = 'http://localhost:8000'
var user = {
  // 此接口有两个参数，所以需要设置参数接受
  login: function(userName, password, callback) {
    $.post(Url + '/admin/login', {
        user_name: userName,
        password: password
      },
      function(res) {
        callback(res)
      })
  },

  logout: function(callback) {
    $.post(Url + '/admin/logout', function(res) {
      callback(res)
    })
  },

  getInfo: function(callback) {
    $.get(Url + '/admin/getuser',
      function(res) {
        callback(res)
      })
  }
}