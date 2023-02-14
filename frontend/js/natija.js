let userId = localStorage.getItem('userId');
let firsFan = localStorage.getItem('firstfan')
let secondFan = localStorage.getItem('secondfan');
let grant = localStorage.getItem('grant');
let shartnoma = localStorage.getItem('shartnoma');
let bal = localStorage.getItem('bal')
localStorage.removeItem('key');
let univerId = localStorage.getItem('univerId')
let elHeading = document.querySelector('.natija_ws-heading')
let elWrapper = document.querySelector('.natija_wrapper');
let elFirst = document.querySelector('.natija_f_heading');
let elSecond = document.querySelector('.natija_s_heading')
let elThird = document.querySelector('.natija_t_heading')


if (userId) {
    elHeading.textContent = `${firsFan},${secondFan}`
let div = document.createElement('div')
div.innerHTML = null
div.innerHTML = `<div class="progress">
<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 500px" aria-valuenow='${bal}' aria-valuemin="0" aria-valuemax="100">${bal}%</div>
</div>`

let random = Math.floor(Math.random() * 3)

async function getuniver() {
    let univers = await fetch(`http://localhost:5000/univers/${univerId}`)
    let { univer } = await univers.json();
    for (let item of univer) {
        elFirst.textContent = item.univer_name
    } 

    const fakultets = await fetch(`http://localhost:5000/fakultet/${univerId}`)
    let { fakultet } = await fakultets.json();
    for (let item of fakultet) {
       elSecond.textContent = item.fakultets[random]
    }

    if (bal >= grant.slice(0,2)) {
       elThird.textContent = 'Grant' 
    } else if (bal >= shartnoma.slice(0,2)) {
        elThird.textContent = 'Shartnome' 
    } else {
        elThird.textContent = 'Keyingi yil harakat qilib kor'
    }

}



getuniver()



elWrapper.appendChild(div)
} else {
    alert('go to register')
    window.location = '/index.html'
}