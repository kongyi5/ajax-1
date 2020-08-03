getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    // console.log(request.response);

    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    // 创建 style 标签
    const style = document.createElement("style");
    // 填写 style 内容
    style.innerHTML = request.response;
    // 插到 head 里面
    document.head.appendChild(style);
  };
  request.onerror = () => {};
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    // console.log(request.response);

    // 创建 script 标签
    const script = document.createElement("script");
    // 填写 script 内容
    script.innerHTML = request.response;
    // 插到 body 里面
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
