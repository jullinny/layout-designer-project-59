const rightside = document.getElementById('right');
const contacts = document.getElementById('contacts-btn');
const chats = document.getElementById('chats-btn');
const chat = document.getElementById('chat-btn');
const profile = document.getElementById('profile-btn');



if (window.matchMedia("(max-width: 576px)").matches) {
    console.log('viewport done')
    rightside.classList.add('rightside-hidden')

    profile.onclick = () => {
        console.log('click done')
        rightside.classList.add('rightside-hidden')
    }
    contacts.onclick = () => {
        rightside.classList.add('rightside-hidden')
    }
    chats.onclick = () => {
        rightside.classList.add('rightside-hidden')
    }
    chat.onclick = () => {
        rightside.classList.remove('rightside-hidden')
    }

} 