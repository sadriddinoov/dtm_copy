let userId = localStorage.getItem('userId');
let firsFan = document.querySelector("#main_1_select");
let seconFan = document.querySelector("#main_2_select");
let elBtn = document.querySelector(".main_link");


if (userId) {
    elBtn.addEventListener('click', async () => {
        let firsFanValue = firsFan.value;
        let seconFanValue = seconFan.value;
    
        if (firsFanValue == "Matematika" &&  seconFanValue == "Ingliz tili") {
            const updatedUser = await fetch("http://localhost:5000/fanlar", 
        {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({first_fan: firsFanValue, second_fan: seconFanValue, userId})
        })
    
        let { status } = await updatedUser.json();
        if (status == 201) {
            localStorage.setItem('firstfan', [firsFanValue])
            localStorage.setItem('secondfan', [seconFanValue])
            window.location = "/yonalish.html"
        } else {
            alert("wrong body")
        }
        }
    
        if (firsFanValue == "Matematika" &&   seconFanValue == "Fizika") {
            const updatedUser = await fetch("http://localhost:5000/fanlar", 
        {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({first_fan: firsFanValue, second_fan: seconFanValue, userId})
        })
    
        let { status } = await updatedUser.json();
        if (status == 201) {
            localStorage.setItem('firstfan', [firsFanValue])
            localStorage.setItem('secondfan', [seconFanValue])
            window.location = "/yonalish.html"
        } else {
            alert("wrong body")
        }
    
        }
    
        if (firsFanValue == "Biologiya" &&   seconFanValue == "Kimyo") {
            const updatedUser = await fetch("http://localhost:5000/fanlar", 
        {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({first_fan: firsFanValue, second_fan: seconFanValue, userId})
        })
    
        let { status } = await updatedUser.json();
        if (status == 201) {
            localStorage.setItem('firstfan', [firsFanValue])
            localStorage.setItem('secondfan', [seconFanValue])
            window.location = "/yonalish.html"
        } else {
            alert("wrong body")
        }
    
        } 

    })
} else {
    alert('go to register')
    window.location = '/index.html'
}

 
