let userId = localStorage.getItem('userId');
let univerSelect = document.querySelector('.hero_select');
let renderFakul = document.querySelector('.render')
let firsFan = localStorage.getItem('firstfan')
let secondFan = localStorage.getItem('secondfan')
let firstSpan = document.querySelector('.grant-f_span')
let secondSpan = document.querySelector('.grant-s_span');
let elBtn = document.querySelector('.hero_btn')

if (userId && firsFan && secondFan) {
    async function render () {
        const univers = await fetch(`http://localhost:5000/univer/${secondFan}`)
        const { univer } = await univers.json();
        
        for (let item of univer) {
            let option = document.createElement('option')
            let hr = document.createElement('hr');
            option.value = item.univer_id
            option.textContent = item.univer_name
            univerSelect.appendChild(option)
            univerSelect.appendChild(hr)

           
        }


    }
    
    render()
    
    
    univerSelect.addEventListener('change' ,  async(a) => {   
        const fakultets = await fetch(`http://localhost:5000/fakultet/${a.target.value}`)
        localStorage.setItem('univerId', a.target.value)
        let { fakultet } = await fakultets.json();
        for (let element in fakultet) {
            const el = fakultet[element];

            firstSpan.textContent = `${el.garant}%`;
            secondSpan.textContent = `${el.shartnoma}%`;
            
            renderFakul.innerHTML = null
            for (let item of el.fakultets) {
                let li = document.createElement('li')
                let hr = document.createElement('hr');
                li.classList.add('hero_item')
                hr.classList.add('hero_hr')
                li.textContent = item;
                
               
                renderFakul.appendChild(li)
            renderFakul.appendChild(hr)
            }
            
            
        }
    })

    elBtn.addEventListener('click', async () => {
        const updatedUser = await fetch("http://localhost:5000/users", 
    {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({univerId: univerSelect.value, userId})
    })
    
   let {status} = await updatedUser.json();
    if (status == 200) {
        localStorage.setItem('grant', firstSpan.textContent)
        localStorage.setItem('shartnoma', secondSpan.textContent)
        window.location = '/test.html'
    }

})

} else {
    alert('go to register')
    window.location = '/index.html'
}