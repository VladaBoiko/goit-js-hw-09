const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,colorId=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=`${e}`}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,clearInterval(colorId),t.stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.507dd5d2.js.map
