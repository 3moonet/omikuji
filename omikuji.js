var username;
var userResult;

username = prompt("お名前を教えてください。");
document.getElementById("name").innerHTML = username;
if (username == "") {
    document.getElementById("name").innerHTML = "名無し";
}

var rand = Math.floor(Math.random() * 5);
if (rand == 0) {
    userResult = "大吉";
}
if (rand == 1) {
    userResult = "中吉";
}
if (rand == 2) {
    userResult = "小吉";
}
if (rand == 3) {
    userResult = "吉";
}
if (rand == 4) {
    userResult = "凶";
}
document.getElementById("result").innerHTML = userResult;