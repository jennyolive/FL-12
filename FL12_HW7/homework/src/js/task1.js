let email = prompt('Enter your email', '');
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
let passwordUser = 'UserPass';
let passwordAdmin = 'AdminPass';
const maxMeilLength = 5;
const maxPasswordLength = 6;

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < maxMeilLength) {
    alert('I dont know any emails having name length less than 5 symbols');
} else if (email === emailUser || email === emailAdmin) {
    let password = prompt('Enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password === passwordUser || password === passwordAdmin) {
        let changepassword = confirm('Do you want to change your password?');
        if (changepassword === true) {
            prompt('Write the old password');
            if (password === passwordUser || password === passwordAdmin) {
                let newpassword = prompt('Write the new password');
                if (newpassword.length < maxPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newpassword2 = prompt('Write the new password again');
                    if (newpassword === newpassword2) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}