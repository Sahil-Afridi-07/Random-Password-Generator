var passwordBox=document.querySelector('#password');
var btn=document.querySelector('#generate-btn');
const copyBtn=document.querySelector('#copy');
let passwordLength=12;

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghiljklmnopqrstuvwxyz";
let number="0987654321";
let symbol="~!@#$%^&*()_+";

let allChar= uppercase+lowercase+number+symbol;

btn.addEventListener("click",function(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    
    while(passwordLength>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordBox.value=password;
})


copyBtn.addEventListener("click",function(){
    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value);
})

