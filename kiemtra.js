function validate() {
  var username = document.getElementById("username").value;
  var password  = document.getElementById("password").value;
  var repassword = document.getElementById("password-repeat").value;
   
  if(username== "") {
  alert("Vui lòng nhập tên!");
  return false;
  }
  if(password == "") {
  alert("Vui lòng nhập mật khẩu!");
  return false;
  }
  if(repassword == "") {
  alert("Vui lòng xác minh mật khẩu!");
  return false;
  }
   
  alert("Xin hãy điền đúng thông tin!")
   
  return true;
  }
