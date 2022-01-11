var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var code = document.getElementById("code").contentWindow.document;
function compile() {
  code.open();
  code.writeln(
    html.value +
    "<style>" +
    css.value +
    "</style>" +
    "<script>" +
    js.value +
    "</script>"
  );
  code.close();
};
function saveHTML() {
  var html1 = document.getElementById("html").value;
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(new Blob([html1], { type: "text/plain" }));
  a.download = "index.html";
  a.click();

}
function saveCSS() {
  var css1 = document.getElementById("css").value;
  var b = document.createElement("a");
  b.href = window.URL.createObjectURL(new Blob([css1], { type: "text/plain" }));
  b.download = "style.css";
  b.click();

}
function saveJS() {
  var js1 = document.getElementById("js").value;
  var c = document.createElement("a");
  c.href = window.URL.createObjectURL(new Blob([js1], { type: "text/plain" }));
  c.download = "index.js";
  c.click();
}
function ShowBtn() {
  var btn1 = document.getElementById("btn1");
  var show = document.getElementById("show");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  btn1.style.display = "block";
  show.style.display = "none";
  btn2.style.display = "block";
  btn3.style.display = "block";
  btn4.style.display = "block";
}
