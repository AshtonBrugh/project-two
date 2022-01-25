async function signupFormHandler(event) {
    event.preventDefault();
    console.log(event.target);

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }) 
            if (response.ok) {
                   document.location.replace('/home');
                }
            } else {
                alert(response.statusText);
    }
};

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok){
            document.location.replace('/home') //this is where we send them to their homepage
        } else {
            alert('Incorrect username or password!')
            //if wrong clear out forms
        }
    }
}




document.querySelector('#sign-up').addEventListener('submit', signupFormHandler);

document.querySelector('#login').addEventListener('submit', loginFormHandler);