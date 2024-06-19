
// const subscribeBtn = document.getElementById('subscribeBtn');
// subscribeBtn.addEventListener('click',()=>{
//     let email = document.getElementById('email').value
//     document.querySelector('.box1').style.display = 'none'
//     document.querySelector('.box2').style.display = 'flex'
//     document.getElementById('subscribedEmail').textContent = email
// });


// const lightDarkBtn = document.getElementById('btn');
// const mode = localStorage.getItem('mode')

// lightDarkBtn.addEventListener('click',()=>{
//     if(document.body.classList.contains('dark')){
//         document.body.classList.remove('dark')
//         lightDarkBtn.textContent = 'Dark';
//         localStorage.setItem('mode','light')
//     }else{
//         document.body.classList.add('dark')
//         lightDarkBtn.textContent = 'Light'
//         localStorage.setItem('mode','dark')
//     }
// })
// if(mode === 'dark'){
//     document.body.classList.add('dark')
//     lightDarkBtn.textContent = 'Light'
// }else{
//     lightDarkBtn.textContent = 'Dark'
    
// }


// const lightDarkBtn = document.getElementById('btn')
// const mode = localStorage.getItem('mode')

// lightDarkBtn.addEventListener('click',()=>{
//     if(document.body.classList.contains('dark')){
//         document.body.classList.remove('dark')
//         lightDarkBtn.textContent = 'Dark'
//         localStorage.setItem('mode','light')
//     }else{
//         document.body.classList.add('dark')
//         lightDarkBtn.textContent = 'Light'
//         localStorage.setItem('mode','dark')
//     }
// })
// if(mode === 'dark'){
//     document.body.classList.add('dark')
//     lightDarkBtn.textContent = 'Light'
// }else{
//     lightDarkBtn.textContent = 'Dark'
// }
// const loginBtn = document.getElementById('loginBtn');
// let isLogin = false;
// let whoIsLogin = null;
// loginBtn.addEventListener('click', () => {
//     let userName = document.getElementById('userName').value
//     let password = document.getElementById('password').value
//     let userFound = false;
//     for(let i=0;i<users.length;i++) {
//         if(users[i]['userName'] ===userName){
//             userFound = true;
//             if(users[i]['password'] === password){
//                 isLogin= true;
//                 whoIsLogin = i;
//                 break
//             }else{
//                 alert('UserName or Password incorrect')
//                 break;
//             }
        
//         }
//     }
//     if(!userFound){
//         alert('User is not exist')
        
//     }
//     if(isLogin){
//         document.querySelector('.login').style.display = 'none'
//         document.querySelector('.welcome').style.display = 'flex'
//         document.querySelector('.welcomeMsg').textContent = `Welcome ${users[whoIsLogin]['name']}`
//     }
// })
// const logoutBtn = document.getElementById('logoutBtn');
// logoutBtn.addEventListener('click',()=>{
//     isLogin = false
//     whoIsLogin = null
//     document.querySelector('.login').style.display = 'flex'
//     document.querySelector('.welcome').style.display = 'none'
//     document.getElementById('userName').value = ''
//     document.getElementById('password').value = ''
   
// })





let users = [
    {userName:'user1',password:'12345',name:'Kenan'},
    {userName:'user2',password:'12345',name:'Mehdi'},
    {userName:'user3',password:'12345',name:'Subhan'},
];
// const loginBtn = document.getElementById('loginBtn')
// const isLogin = false;
// const logedInuser = null;
// loginBtn.addEventListener('click',()=>{
//     const userName = document.getElementById('userName').value
//     const password = document.getElementById('password').value
//     const userFound = false;
//     for(let i = 0;i<users.legth;i++){
//         if(users[i]['userName'] === userName){
//             userFound = true
//             if(users[i]['password'] === password){
//                 isLogin = true
//                 logedInuser = i
//                 break;
//             }else{
//                 alert('UserName or Password incorrect')
//                 break;
//             }

//         }
//     }
//     if(!userFound){
//         alert('User is not exist')
//     }
//     if(isLogin){
//         document.querySelector('.login').style.display = 'none'
//         document.querySelector('.welcome').style.display = 'flex'
//         document.querySelector('.welcomeMsg').textContent = `Welcome ${users[logedInuser]['name']}`

//     }

// })

// const logoutBtn = document.getElementById('logoutBtn')
// logoutBtn.addEventListener('click',()=>{
//     isLogin = false;
//     logedInuser = null
//     document.querySelector('.login').style.display = 'flex'
//     document.querySelector('.welcome').style.display = 'none'
//     document.getElementById('userName').value = ''    
//     document.getElementById('password').value = ''    
// })





// const subscribeBtn = document.getElementById('subscribeBtn');
// const subscribedEmail = document.getElementById('subscribedEmail')
// subscribeBtn.addEventListener('click',()=>{
//     const inpValue = document.getElementById('email').value
//     document.querySelector('.box1').style.display = 'none'
//     document.querySelector('.box2').style.display = 'flex'
//     subscribedEmail.textContent = inpValue

// })

// const lightDarkBtn = document.getElementById('btn')
// // const body = document.body
// const mode = localStorage.getItem('mode')
// lightDarkBtn.addEventListener('click',()=>{
//     if(document.body.classList.contains('dark')){
//         document.body.classList.remove('dark')
//         lightDarkBtn.textContent = 'Dark'
//         localStorage.setItem('mode','light')
//     }else{
//         document.body.classList.add('dark')
//         lightDarkBtn.textContent = 'Light'
//         localStorage.setItem('mode','dark')

//     }
// })

// if(mode === 'dark'){
//     document.body.classList.add('dark')
//     lightDarkBtn.textContent = 'Light'
// }else{
//     lightDarkBtn.textContent = 'Dark'
// }