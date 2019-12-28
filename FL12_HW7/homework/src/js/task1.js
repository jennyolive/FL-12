let email = prompt('Enter your email', '');
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
let passwordUser = 'UserPass';
let passwordAdmin = 'AdminPass';
const maxmeilLength = 5;

if(email === '' || email === null) {
    alert('Canceled');
} else if (email.length < maxmeilLength){
    alert('I dont know any emails having name length less than 5 symbols');
} else if (email === emailUser || email === emailAdmin) {
    let password = prompt('Enter your password', '');
    if (password === '' || password === null){
 alert('Canceled');
} else if (password === passwordUser || password === passwordAdmin) {
alert('Success');
} else {
 alert('Wrong password'); 
}
} else {
    alert('I don’t know you');
}