let firstNameField = document.getElementById('first-name')
let lastNameField = document.getElementById('last-name')
let emailField = document.getElementById('email')
let passwordField = document.getElementById('password')
let confirmPasswordField = document.getElementById('confirm-password')
let registerButton = document.getElementById("register")
let allInputs = document.getElementsByClassName('fields')
let regTab = document.getElementById('register-tab')
let loginTab = document.getElementById('login-tab')
let container = document.getElementById('container')




//
// function checkRegistrant(email){
//     Object.keys(localStorage).forEach(function(key){
//        if(localStorage.key(key) !== email){
//            return true;
//        }
//        return false;
//     });
// }
let registrant;

registerButton.addEventListener('click', ()=>{
    // if(checkRegistrant(registrant.email.value)){
    console.log('hi')
    // console.log(registrant)
    registrant={
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        email: emailField.value,
        password: passwordField.value
    }
         if(confirmPassword()){
            localStorage.setItem(registrant.email, JSON.stringify(registrant))
            alert("Registration successful")
        }else{
            for (let index = 0; index < allInputs.length; index++) {
                allInputs[index].value = '';
            }
            alert("Email already exist")
        }
    // }



    console.log(registrant)
    
   console.log(localStorage.getItem("email"))
})




let errorDiv = document.createElement('div')
let att = document.createAttribute('class')
att.value = 'failed-alert'
errorDiv.setAttributeNode(att)
let errorParagraph = document.createElement('p')
let errorMessage = document.createTextNode("Ensure password matches original password")

let successDiv = document.createElement('div')
let attr = document.createAttribute('class')
attr.value = 'success-alert'
successDiv.setAttributeNode(attr)
let successParagraph = document.createElement('p')
let successMessage = document.createTextNode("Password matched!")


confirmPasswordField.addEventListener('keyup', (e)=>{
    
    if(passwordField.value !== e.target.value){
        errorParagraph.appendChild(errorMessage)
        errorDiv.appendChild(errorParagraph)

        container.parentElement.appendChild(errorDiv)
                successDiv.style.opacity ='0.1'
                errorDiv.style.visibility ='visible'

        setTimeout(() => errorDiv.style.visibility ='hidden', 1500)

        
        // isConfirmed = false 
    } else {
            successParagraph.appendChild(successMessage)
            successDiv.appendChild(successParagraph)

            console.log("hi");
            container.parentElement.appendChild(successDiv)
            errorDiv.style.opacity ='0.1'
            successDiv.style.visibility ='visible'
            setTimeout(()=>successDiv.style.visibility ='hidden', 1500)
    } 
})

function confirmPassword(){   
    return passwordField.value === confirmPasswordField.value;
}

loginTab.addEventListener('click', ()=>{

    container.innerHTML = ''
    container.innerHTML = '<div class="entry-point">\n' +
        '            <button id="register-tab" >Register</button>\n' +
        '            <button id="login-tab">Login</button>\n' +
        '        </div>\n' +
        '            <div class="field">\n' +
        '                <p>Email</p>\n' +
        '                <input type="text" id="login-email" class="fields" placeholder="Enter your email address">\n' +
        '            </div>\n' +
        '            <div class="field">\n' +
        '                <p>Password</p>\n' +
        '                <input type="text" id="login-password" class="fields" placeholder="Enter password">\n' +
        '            </div>\n' +
        '            <button id="login" type=button>Log in</button>\n' +
        '        </div>'
})




let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')
let loginButton = document.getElementById('login-tab')

loginButton.addEventListener('click', ()=>{
    if(loginEmail.value === localStorage.getItem(registrant.email)) {
        let loggedInObject = localStorage.getItem(registrant.email)
        if (loginPassword === loggedInObject.password) {
            alert("Login successful")
        } else {
            alert("Login failed")
        }
    }
})

