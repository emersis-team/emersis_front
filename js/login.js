var $token = null;

function login() {
  var username = $("#login-username").val();
  var password = $("login-password").val();
  $.ajax({
    type: "POST",
    url:
      "https://emersis.casya.com.ar/api/v1/auth/login?email=" +
      username +
      "&password=" +
      password,
    success: function (response) {
      $token = response.token;
    },
    error: function (result) {
      console.log(result);
    },
    contentType: "application/json",
  });
}
