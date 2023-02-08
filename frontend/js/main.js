let loginForm = document.querySelector("#login_form");
let fullName = document.querySelector("#fullName");
let Email = document.querySelector("#Email");
let username = document.querySelector("#Username");
let select = document.querySelector("#login_select");
let password = document.querySelector("#password");
let gender = document.querySelector("#gender");



loginForm.addEventListener("submit", async (evt) => {
    evt.preventDefault()
    
    const fullNameValue = fullName.value; 
    const Emailvalue = Email.value;
    const usernamevalue = username.value;
    const selectValue = select.value;
    const passwordValue = password.value;
    const genderValue = gender.value;

   const user = await fetch("http://localhost:5000/users", 
    {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullName: fullNameValue, emailOrPhone: Emailvalue, username: usernamevalue, viloyat: selectValue, password: passwordValue, gender: genderValue})
    })
    
    let { status, newUser } = await user.json();

    if (status == 201) {
      for (let item of newUser) {
        localStorage.setItem('userId', Object.values(item)[0])
        window.location = '/block.html'
      }
    } else {
      alert('wrong body')
    }

})