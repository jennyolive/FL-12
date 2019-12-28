let email = prompt('Enter your email', '');
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
const maxmeilLength = 5;

if(email === 0 || email === null) {
    alert('Canceled');
} else if (email.length < maxmeilLength){
    alert('I dont know any emails having name length less than 5 symbols');
} else if (email === emailUser || email === emailAdmin) {
    let password = prompt('Enter your password', '');
} else if 
   (alert('I don’t know you')) ;