const appointment-wrapper=document.querySelector('.appointment-wrapper');
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')

registerlink.addEventListener('click',()=>{
    appointment-wrapper.classList.add('active');});
loginlink.addEventListener('click',()=>{
    appointment-wrapper.classList.remove('active');});
