function setText() {
    document.getElementById("text").innerHTML = "我的第一个 JavaScript 函数";
}

function setHTML() {
    document.write("<h1>这是一个标题</h1>");
    document.write("<p>这是一个段落</p>");
    document.write(Date());
}

function consoleLog() {
    let a = 5;
    let b = 6;
    let c = a + b;
    console.log("控制台输出c = " + c);
    console.log("控制台输出当前时间：" + new Date());
}