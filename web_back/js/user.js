 user = {
   login: function(userName, password) {
     $.post('http://localhost:8000/admin/login', {
         user_name: userName,
         password: password
       },
       function(res) {
         // console.log(res);
         if (res.code === 200) {
           window.location.href = 'index.html';
         } else {
           $('#myModal').modal('show')
           $('#tankuang').text('账号或密码错误')
         }
       })
   },

   logout: function() {
     $.post('http://localhost:8000/admin/logout', function(res) {
       console.log(res);
       if (res.code === 200) {
         location.href = 'login.html'
       }
     })
   },

   getInfo: function() {
     $.get('http://localhost:8000/admin/getuser',
       function(res) {
         console.log(res);
         $('#username').text(res.data.nickname);
         $('#userimg').prop('src', res.data.user_pic);
       })
   }
 }