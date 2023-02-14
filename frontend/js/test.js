let userId = localStorage.getItem('userId');
let firsFan = localStorage.getItem('firstfan')
let secondFan = localStorage.getItem('secondfan');
let grant = localStorage.getItem('grant');
let shartnoma = localStorage.getItem('shartnoma');
let elTestf = document.querySelector('.fan_list');
let elHeading = document.querySelector('.f-fan-heading');
let sTest = document.querySelector('.second_fan');
let sHeading = document.querySelector('.s-fan-heading')
let eSpan = document.querySelector('.spannn')
let elSpann = document.querySelector('.spann')
let Btn = document.querySelector('.btn');


let result = [];
let result1 = [];
if (userId && firsFan && grant) {
    alert('testni ustiga bosiwi bilan u javob sifatida qabul qilinadi va javob ustiga bosin')
    
    async function renderTest() {
        const first_test = await fetch(`http://localhost:5000/tests/${firsFan}`);
        const {tests} = await first_test.json();
        
        elHeading.textContent = firsFan
        if (tests) {
            
            let newArr = [];
        
            
            for (let i = 0; i <= tests.length; i++) {
                const item = tests[i];
                
                
                let newLi = document.createElement('li');
                let elWrapper = document.createElement('div');
                let newSpan = document.createElement('span');
                let elQuestion = document.createElement('h4');
                let newDiv = document.createElement('div');
                let spanA = document.createElement('span')
                let elHeadA = document.createElement('h4');
                let spanB = document.createElement('span')
                let elHeadB = document.createElement('h4');
                let spanC = document.createElement('span')
                let elHeadC = document.createElement('h4');
                let answerWrapperA = document.createElement('div');
                let answerWrapperB = document.createElement('div');
                let answerWrapperC = document.createElement('div');
                
                
                newDiv.classList.add('test_div')
                elWrapper.classList.add('elWrapper');
                answerWrapperA.classList.add('div')
                answerWrapperB.classList.add('div')
                answerWrapperC.classList.add('div');
                newSpan.classList.add('fan_heading')
                elQuestion.classList.add('fan_heading')
                spanA.classList.add('test_heading')
                spanB.classList.add('test_heading')
                spanC.classList.add('test_heading')
                elHeadA.classList.add('test_heading')
                elHeadB.classList.add('test_heading')
                elHeadC.classList.add('test_heading')
                newLi.classList.add('item')
                
                newSpan.textContent = `#${i + 1})`;
                elQuestion.textContent = item.test_question;
                elWrapper.appendChild(newSpan);
                elWrapper.appendChild(elQuestion);
                spanA.textContent = 'a';
                spanB.textContent = 'b';
                spanC.textContent = 'c';
                spanA.value = `[${i + 1},a]`;
                spanB.value = `[${i + 1},b]`;
                spanC.value = `[${i + 1},c]`;
                elHeadA.textContent = item.answer_a;
                elHeadB.textContent = item.answer_b;
                elHeadC.textContent = item.answer_c;
                elHeadA.value = `[${i + 1},a]`;
                elHeadB.value = `[${i + 1},b]`;
                elHeadC.value = `[${i + 1},c]`;
                elHeadA.ariaValueNow = item.test_id;
                elHeadB.ariaValueNow = item.test_id
                elHeadC.ariaValueNow = item.test_id
                answerWrapperA.append(spanA, elHeadA)
                answerWrapperB.append(spanB, elHeadB)
                answerWrapperC.append(spanC, elHeadC)
                newDiv.append(answerWrapperA, answerWrapperB, answerWrapperC)
                newLi.appendChild(elWrapper)
                newLi.appendChild(newDiv)
                elTestf.appendChild(newLi)
                
                if (window.location != '/test.html') {
                    newArr.splice(0, newArr.length + 1)
                    result.splice(0, result.length + 1)
                }
                
                newDiv.addEventListener('click', async (e) => {
                    try {
                        if (e.target.value.length == 5 && (!newArr.includes(e.target.value[1])) && e.target.ariaValueNow) {
                            
                            const answer = await fetch(`http://localhost:5000/tests/${e.target.ariaValueNow}/${e.target.value[3]}`);
                            
                            let { status } = await answer.json();
                            if (status == 200) {
                                alert('togri')
                                result.push(1)
                            } else {
                                alert('notogri')
                            }
                            newArr.push(e.target.value[1]);
                        } else if (e.target.value.length == 6 && (!newArr.includes(e.target.value.slice(1,3)))) {
                            const answer = await fetch(`http://localhost:5000/tests/${e.target.ariaValueNow}/${e.target.value[4]}`);
                            
                            let { status } = await answer.json();
                            if (status == 200) {
                                alert('togri')
                                result.push(1)
                            } else {
                                alert('notogri')
                            }
                            newArr.push(e.target.value.slice(1,3));
                        }
                        else {
                            alert('bu testga javob berib boldiz')
                        }

                        eSpan.innerHTML = null
                        eSpan.innerHTML = `Togri topilganlar: ${result.length}`
                      
                    }
                    catch (error) {
                        
                    }
                    
                })
               

            }
            
        } else {
            alert('forbidenError')
        }
    }
    
    renderTest()
    
    async function renderTests() {
        const first_test = await fetch(`http://localhost:5000/tests/${secondFan}`);
        const {tests} = await first_test.json();
        
        sHeading.textContent = secondFan
        if (tests) {
            
            let newArr = [];
            for (let i = 0; i <= tests.length; i++) {
                const item = tests[i];
                
                
                let newLi = document.createElement('li');
                let elWrapper = document.createElement('div');
                let newSpan = document.createElement('span');
                let elQuestion = document.createElement('h4');
                let newDiv = document.createElement('div');
                let spanA = document.createElement('span')
                let elHeadA = document.createElement('h4');
                let spanB = document.createElement('span')
                let elHeadB = document.createElement('h4');
                let spanC = document.createElement('span')
                let elHeadC = document.createElement('h4');
                let answerWrapperA = document.createElement('div');
                let answerWrapperB = document.createElement('div');
                let answerWrapperC = document.createElement('div');
                
                
                newDiv.classList.add('test_div')
                elWrapper.classList.add('elWrapper');
                answerWrapperA.classList.add('div')
                answerWrapperB.classList.add('div')
                answerWrapperC.classList.add('div');
                newSpan.classList.add('fan_heading')
                elQuestion.classList.add('fan_heading')
                spanA.classList.add('test_heading')
                spanB.classList.add('test_heading')
                spanC.classList.add('test_heading')
                elHeadA.classList.add('test_heading')
                elHeadB.classList.add('test_heading')
                elHeadC.classList.add('test_heading')
                newLi.classList.add('item')
                
                newSpan.textContent = `#${i + 1})`;
                elQuestion.textContent = item.test_question;
                elWrapper.appendChild(newSpan);
                elWrapper.appendChild(elQuestion);
                spanA.textContent = 'a';
                spanB.textContent = 'b';
                spanC.textContent = 'c';
                spanA.value = `[${i + 1},a]`;
                spanB.value = `[${i + 1},b]`;
                spanC.value = `[${i + 1},c]`;
                elHeadA.textContent = item.answer_a;
                elHeadB.textContent = item.answer_b;
                elHeadC.textContent = item.answer_c;
                elHeadA.value = `[${i + 1},a]`;
                elHeadB.value = `[${i + 1},b]`;
                elHeadC.value = `[${i + 1},c]`;
                elHeadA.ariaValueNow = item.test_id;
                elHeadB.ariaValueNow = item.test_id
                elHeadC.ariaValueNow = item.test_id
                answerWrapperA.append(spanA, elHeadA)
                answerWrapperB.append(spanB, elHeadB)
                answerWrapperC.append(spanC, elHeadC)
                newDiv.append(answerWrapperA, answerWrapperB, answerWrapperC)
                newLi.appendChild(elWrapper)
                newLi.appendChild(newDiv)
                sTest.appendChild(newLi)
                
                
                if (window.location != '/test.html') {
                    newArr.splice(0, newArr.length + 1)
                    result1.splice(0, result1.length + 1)
                }
                
                newDiv.addEventListener('click', async (e) => {
                    try {
                        if (e.target.value.length == 5 && (!newArr.includes(e.target.value[1])) && e.target.ariaValueNow) {
                            
                            const answer = await fetch(`http://localhost:5000/tests/${e.target.ariaValueNow}/${e.target.value[3]}`);
                            
                            let { status } = await answer.json();
                            if (status == 200) {
                                alert('togri')
                                result1.push(1)
                            } else {
                                alert('notogri')
                            }
                            newArr.push(e.target.value[1]);
                        } else if (e.target.value.length == 6 && (!newArr.includes(e.target.value.slice(1,3)))) {
                            const answer = await fetch(`http://localhost:5000/tests/${e.target.ariaValueNow}/${e.target.value[4]}`);
                            
                            let { status } = await answer.json();
                            if (status == 200) {
                                alert('togri')
                                result1.push(1)
                            } else {
                                alert('notogri')
                            }
                            newArr.push(e.target.value.slice(1,3));
                            
                        }
                        else {
                            alert('bu testga javob berib boldiz')
                        }

                        elSpann.innerHTML = null
                        elSpann.innerHTML = `Togri topilganlar: ${result1.length}`
                    }
                    catch (error) {
                        
                    }
                    
                })
            }
            
            
        } else {
            alert('forbidenError')
        }
        
    }
    
    renderTests()
    
    Btn.addEventListener('click', async () => {
        let mainResult = result.length + result1.length
        const upUser = await fetch(`http://localhost:5000/users/${userId}/${mainResult * 5}`, 
        {
            method: "PUT",
        })

        let { status } = await upUser.json();

        if (status == 200) {
            localStorage.setItem('bal', `${mainResult * 5}`)
            window.location = '/natija.html'
        }
    })
    
} else {
    alert('go to register');
    window.location = '/index.html'
}
