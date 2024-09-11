
function switchToGoogleAccount() {
  window.location.href = 'https://myaccount.google.com/';
}

function validateForm(event) {
    event.preventDefault(); 
  
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
  
    
    usernameError.innerText = '';
    passwordError.innerText = '';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
  
    let valid = true;
  
  
    if (username.value.trim() === '') {
      usernameError.innerText = 'Username or Email is required';
      usernameError.style.display = 'block';
      valid = false;
    }
  
   
    if (password.value.trim() === '') {
      passwordError.innerText = 'Password is required';
      passwordError.style.display = 'block';
      valid = false;
    }
  
    if (valid) {
      alert('Login successful!');
     
    }
  }
  
  document.getElementsByClassName('btn2').addEventListener('sign in', validateForm);
  