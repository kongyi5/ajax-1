getHTML.onclick = () => {
  const request = new XMLHttpRequest(); // readyState 0
  request.open("GET", "/3.html"); // readyState 1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        console.log(request.status);
        alert("加载 html 失败");
      }
    }
  };
  request.send(); // readyState 2
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("下载完成");
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        console.log(request.status);
        alert("加载 css 失败");
      }
    }
  };
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
