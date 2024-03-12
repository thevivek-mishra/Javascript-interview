const btn = document.getElementById("btn")
const existBtn =  btn.firstElementChild
existBtn.remove()

// creating 20 dynamic button
const totalBtn =20; 

const h3 = document.createElement("h3")
h3.innerText = `create 20 dynamic button`
btn.appendChild(h3)

for (let index = 1; index <= totalBtn; index++) {
    const button = document.createElement("button");
    button.innerText =`button #${index}`
    button.id = index
    button.className = `btn2`
    button.addEventListener('click',()=>{
        alert("click me")
    })
    btn.appendChild(button)

    
}