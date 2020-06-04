var $token = null;

function login() {
  var username = $("#login-username").val();
  var password = $("login-password").val();
  $(".login-error").css("visibility", "hidden");
  $(".login-input").css("border", "none");
  $.ajax({
    type: "POST",
    url:
      "https://emersis.casya.com.ar/api/v1/auth/login?email=" +
      username +
      "&password=" +
      password,
    success: function (response) {
      $token = response.token;
      window.location.href = "/emersis_front";
    },
    error: function (result) {
      console.log(result);
      $(".login-error").css("visibility", "visible");
      $(".login-input").css("border", "1px solid red");
    },
    contentType: "application/json",
  });
}
