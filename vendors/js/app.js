const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //check input
    checkInputs();
});

//check input function
function checkInputs(){
    //input value checker const
    const userNameValueChecker = username.value.trim();
    const emailValueChecker = email.value.trim();
    const passwordValueChecker = password.value.trim();
    const passwordTwoValueChecker = password2.value.trim();

    //user input if else
    if(userNameValueChecker === ''){
        //set for error function
        setForErorr(username, 'user name cannot be blank');
    }else{
        //set for success message
        setForSuccess(username);
    }
    //input email
    if(emailValueChecker === ''){
        setForErorr(email, 'email cannot be blank');
    }else if(!isEmail(emailValueChecker)){
        setForErorr(email, 'email is not valid');
    }else{
        setForSuccess(email)
    }
    //password checker
    if(passwordValueChecker === ''){
        setForErorr(password, 'password cannot be blank');
    }else{
        setForSuccess(password);
    }

    //password machting
    if(passwordTwoValueChecker === ''){
        setForErorr(password2, 'password cant not be blank');
    }else if(passwordValueChecker === passwordTwoValueChecker){
        setForSuccess(password2)
    }else{
        setForErorr(password2, 'password is dont match')
    }
};
//set for error class
function setForErorr(input,message){
    const form_control = input.parentElement;
    const small = form_control.querySelector('small');
    small.innerText = message;
    form_control.className = 'form-control erorr'
}

//set for success class
function setForSuccess(input){
     const form_control = input.parentElement;
     form_control.className = 'form-control success'
}

//email validation
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}








// const form = document.getElementById('form');
// const username = document.getElementById('username');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     checkinput();
// })

// function checkinput(){
//     //input value
//     const userNameValue = username.value.trim();

//     if(userNameValue === ''){
//         setforErorr(username, 'user Cannot be blank');
//     }
//     else{
//         setForSuccess(username);
//         }
// }

// function setforErorr(input,message){
//     const form_control_target = input.parentElement;
//     const small = form_control_target.querySelector('small');

//     small.innerText = message;
//     form_control_target.className = 'form-control erorr'
// }

// function setForSuccess(input){
//     const form_control_target = input.parentElement;

//     form_control_target.className = 'form-control success'
// }



// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const passwordTwo = document.getElementById('password2');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     checkInputsValue();
// });

// // input checker
// function checkInputsValue(){
//     // input value checker const
//     const userNameValueCheck = username.value.trim();
    
//     if(userNameValueCheck === ''){
//         //add class function
//         serForErorrrClass(username, 'user name cannot be blank');
//     }
//     else{
//         setForSuccess(username);
//     }

// };

// //class add erorr class
// function serForErorrrClass(input,message){
//       //form tag target 
//       const form_control = input.parentElement;
//       const small = form_control.querySelector('small');

//       //small tag text adding
//       small.innerText = message;
//       form_control.className = 'form-control erorr'
// }

// //successs class adding function
// function setForSuccess(input){
//     //const form targeting form tag
//     const form_control = input.parentElement;
//     form_control.className = 'form-control success'
// }

//const
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs(){
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password_2Value = password2.value.trim();

//     if(usernameValue === ''){
//         setForErorr(username, 'user cannot be blank');
//     }else{
//         setForSuccess(username);
//     };
//     if(emailValue === ''){
//         setForErorr(email, 'user cannot be blank');
//     }else if(!isEmail(emailValue)){
//         setForErorr(email, 'Email is not valid');
//     }
//     else{
//         setForSuccess(email);
//     }
//     if(passwordValue === ''){
//         setForErorr(password, 'password cannot be blank');
//     }
//     else{
//         setForSuccess(password);
//     }

//     if(password_2Value === ''){
//         setForErorr(password2, 'password2 cannot be blank');
//     }
//     else if(passwordValue === password_2Value){
//         setForSuccess(password2);
//     }
//     else{
//         setForErorr(password2, 'password does not macth')
//     }
// };

// //set erorr function first input
// function setForErorr(input,message){
//      const form_control = input.parentElement;
//      const small = form_control.querySelector('small');

//      small.innerText = message;

//      form_control.className = 'form-control erorr'
// };
// //set success first input
// function setForSuccess(input){
//     const form_control = input.parentElement;

//     form_control.className = 'form-control success'
// }
// //set erorr function for email input
// function  isEmail(email){
//    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
