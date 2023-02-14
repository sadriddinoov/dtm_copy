let elTable = document.querySelector('.table')
let elBody = document.querySelector('.tbody')

async function getUser() {
    let user = await fetch(`http://localhost:5000/users`)
    let { users } = await user.json();
    
    for (let i = 0; i < users.length; i++) {
        const item = users[i];
        let tr = document.createElement('tr')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')
        let th5 = document.createElement('th')

        th1.classList.add('ttbody')
        th2.classList.add('ttbody')
        th3.classList.add('ttbody')
        th4.classList.add('ttbody')
        th5.classList.add('ttbody')


        th1.textContent = item.user_id;
        th2.textContent = item.username;
        th3.textContent = item.univer_name;
        th4.textContent = item.viloyat;
        th5.textContent = item.bal;

        tr.appendChild(th1);
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        tr.appendChild(th5)

        elBody.append(tr)
    }

    
}

getUser()