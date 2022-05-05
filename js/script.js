let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
};

document.querySelector('.home').onmousemove = (e) =>{
   homeImg.style.top = e.pageY + 'px';
   homeImg.style.left = e.pageX + 'px';
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
};