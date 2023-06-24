const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function OnLoginSubmit(event){
    event.preventDefault();
    console.dir(loginForm);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username=loginInput.value;

    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username)
{
    greeting.innerText=`Hello ${username} keep going!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName=localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",OnLoginSubmit);
}else{
    paintGreetings(savedUserName);
}