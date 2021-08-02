//獲取元素
let home = document.querySelector(".home");
let base_friend = document.querySelector(".base-friend");
let base_server = document.querySelector(".base-server");
let serverList = document
  .querySelector(".listWrap")
  .querySelectorAll(".listItem");
let sendMessage = document.querySelector('#sendMessge');
let messgesWrap = document.querySelector('.messagesWrap')
serverList[0].setAttribute('data-content-after','1');
//首頁 點擊事件 切換頁面
home.addEventListener("click", function () {
  base_friend.classList.remove("displayNone");
  base_server.classList.add("displayNone");
  this.classList.add('current');
  serverList[0].classList.remove('current');

});
// 伺服器 點擊事件 切換頁面
serverList[0].addEventListener("click", function () {
  base_server.classList.remove("displayNone");
  base_friend.classList.add("displayNone");
  this.classList.add('current');
  home.classList.remove('current');
  this.setAttribute('data-content-after','');
});
//發送訊息
sendMessage.addEventListener('focus', function() {
  window.addEventListener('keydown' ,function(e) {
    if (e.keyCode === 13 ) {
       if (sendMessage.value == '') {
         return 0;
       } else {
        let date = new Date();
        let div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = '<div class="avatar"><img src="./img/pig.png" alt=""></div><div><div class="messgeHD"><div class="userName">豬哥</div><div class="date">'+ date.getFullYear() +'/'+ (date.getMonth()+1) + '/'+date.getDate  ()+'</div></div><p>'+ sendMessage.value +'</p></div>';
        messgesWrap.appendChild(div);
        sendMessage.value = '';
        messgesWrap.scrollTop = messgesWrap.scrollHeight;
       }
    }
  })
});

