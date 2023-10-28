var Mb = document.querySelector('.Mb');
var MbNav = document.querySelector('.Mb-nav')

Mb.addEventListener('click',()=>{
  MbNav.setAttribute('style','transform: translateX(0);')
})

document.querySelector('.i').addEventListener('click',()=>{MbNav.setAttribute('style','transform: translateX(-100%);')})

var Gopy = document.getElementById("gopy").value