const rightside = document.getElementById('right');
const contacts = document.getElementById('contacts-btn');
const chats = document.getElementById('chats-btn');
const chat = document.getElementById('chat-btn');
const profile = document.getElementById('profile-btn');


const media = window.matchMedia("(max-width: 576px)")

if (media.matches) {
    
    profile.onclick = () => {
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