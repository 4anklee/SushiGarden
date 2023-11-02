//Frank's work
document.getElementById('next').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function (){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

//Moroni's work
const menu_btn = document.querySelector('.hamburger');
const nav_bar = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    nav_bar.classList.toggle('is-active')
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    setTimeout(function () {
        mobileNavLinks.forEach(function (link, index) {
            setTimeout(function () {
                link.style.transform = 'translateX(0)';
                link.style.opacity = '1';
            }, index * 100);
        });
    }, 100);
});

//Frank's work
document.addEventListener('click', function (e) {
    if (!menu_btn.contains(e.target) && !nav_bar.contains(e.target)) {
        menu_btn.classList.remove('is-active');
        nav_bar.classList.remove('is-active');
    }
});

let isPlaying =true;
let intervalId;

function autoChangeImage() {
    intervalId = setInterval(function () {
        if(isPlaying) {
            document.getElementById('next').click();
        }
    }, 5000);
}

autoChangeImage();

document.getElementById('pause').onclick = function() {
    const pauseButton = document.getElementById('pause');
    const pauseIcon = pauseButton.querySelector('.fa-pause');
    const playIcon = pauseButton.querySelector('.fa-play');

    playIcon.style.display = isPlaying ? 'block' : 'none';
    pauseIcon.style.display = isPlaying ? 'none' : 'block';

    isPlaying = !isPlaying;
}