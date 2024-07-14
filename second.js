const name = localStorage.getItem('name')
const color = localStorage.getItem('color')

document.getElementById('name').innerHTML = name
document.getElementById('name').style.color = color
document.getElementById('color').innerHTML=color
document.getElementById('color').style.color = color