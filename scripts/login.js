function text(event){
    //to prevent the page from resetting
    event.preventDefault()

    const form = document.getElementById('login-form')
    const errorDisplay = document.getElementById('error')
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    if(username.value === 'admin' && password.value === '12345'){
        form.submit()
    }
    else{
        errorDisplay.innerHTML = '<p style="color:red">Invalid Credentials</p>'
    }
}