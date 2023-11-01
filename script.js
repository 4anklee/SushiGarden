document.getElementById('next').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

const menu_btn = document.querySelector('.hamburger');
const nav_bar = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    nav_bar.classList.toggle('is-active')
});
