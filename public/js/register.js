const btnPassword = document.querySelector('.Password .passwordbtn'); 
const btnPasswordAgain = document.querySelector('.PasswordAgain .passwordbtn'); 

const inputPassword = document.querySelector('.Password input'); 
const inputPasswordAgain = document.querySelector('.PasswordAgain input'); 

btnPassword.addEventListener('click', function() {
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);
    btnPassword.classList.toggle("fa-lock-open")
    btnPassword.classList.toggle("fa-lock")
});
btnPasswordAgain.addEventListener('click', function() {
    const type = inputPasswordAgain.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPasswordAgain.setAttribute('type', type);
    btnPasswordAgain.classList.toggle("fa-lock-open")
    btnPasswordAgain.classList.toggle("fa-lock")
});

let profilePic = document.getElementById("profile-pic")
let inputFile = document.getElementById("input-file")

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}


const form = document.querySelector('form');
const errorMessage = document.querySelector('.validator'); 


form.addEventListener('submit', async event => {
    event.preventDefault();

    const firstname = document.querySelector('.firstnameInput').value;
    const lastname = document.querySelector('.lastnameInput').value;
    const login = document.querySelector('.loginInput').value;
    const password = document.querySelector('.PasswordInput').value;
    const passwordConfirm = document.querySelector('.PasswordConfirmInput').value;

    if (firstname.length <= 1 || lastname.length <= 1) {
        showError('Имя или Фамилия должны быть более 5 символов');
        return;
    }
    if (login.length <= 5) {
        showError('Логин должен быть более 5 символов');
        return;
    }
  
    if (password.length < 6) {
      showError('Пароль должен быть не менее 6 символов');
      return;
    }
  
    if (password !== passwordConfirm) {
      showError('Пароли не совпадают');
      return; 
    }

    const imgUser = inputFile.files[0] ? inputFile.files[0] : "img/userimage.png"

    const formData = new FormData();

    formData.append('image', imgUser);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('login', login);
    formData.append('password', password);

    const response = await fetch('/register', {
        method: 'POST',
        body: formData 
    });
    if(response.ok) {
        window.location.href = '/';
    } else {
        showError('Такой пользователь уже существует'); 
    }
});
function showError(text) {
    errorMessage.textContent = text;
    errorMessage.classList.add('show');
  
    setTimeout(() => {
      errorMessage.classList.remove('show'); 
    }, 3000);
}