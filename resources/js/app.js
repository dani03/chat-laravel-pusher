const { default: axios } = require('axios');

require('./bootstrap');
const nickname = document.getElementById('nickname');
const message = document.getElementById('message');
const chatDiv = document.getElementById('chat');
const submitMessage = document.getElementById('submitButton');

submitMessage.addEventListener('click', () => {
  console.log('inter');
  axios.post('/chat', {
    nickname: nickname.value,
    message: message.value
  });
});

window.Echo.channel('chat')
    .listen('.chat-message', (event) => {
    chatDiv.innerHTML += `
    <div id="chat"  class="flex flex-col mt-2 flex-col-reverse overflow-y-scroll	 space-y-3 mb-20 pb-3 ">
        <div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
        ${event.message} par -> <em>${event.nickName}</em>
        </div>   
 </div>`
});