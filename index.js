const target = document.querySelector('#inicio');
const target2 = document.querySelector('#projetos');
const target3 = document.querySelector('#sobre');
const target2_1 = document.querySelector('#t1');
const target2_2 = document.querySelector('#t2');
const target2_3 = document.querySelector('#t3');
const target2_4 = document.querySelector('#t4');
const target2_5 = document.querySelector('#t5');

let i = 0;
let j = 0;

const options = {
    threshold: 0.4
};

const options2 = {
    threshold: 0.1
}

const options3 = {
    threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('.col-12')[0].classList.remove("fadeOutLeft");
            document.querySelectorAll('.col-12')[0].classList.add("fadeInLeft");
            document.querySelectorAll('.col-12')[1].classList.remove("fadeOutRight");
            document.querySelectorAll('.col-12')[1].classList.add("fadeInRight");        }
        else{
            document.querySelectorAll('.col-12')[0].classList.add("fadeOutLeft");
            document.querySelectorAll('.col-12')[0].classList.remove("fadeInLeft");
            document.querySelectorAll('.col-12')[1].classList.add("fadeOutRight");
            document.querySelectorAll('.col-12')[1].classList.remove("fadeInRight");
        }
    })
}, options)

const observer2_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo2').classList.remove('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeOutRight');
            document.querySelector('.titulo2').classList.add('fadeInLeft');
            document.querySelector('.projetosDiv').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo2').classList.remove('fadeInLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeInRight');
            document.querySelector('.titulo2').classList.add('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.add('fadeOutRight');
        }
    })
}, options3)

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo2').classList.remove('fadeOutLeft');
            document.querySelector('.titulo2').classList.add('fadeInLeft');
        }
        else{
            document.querySelector('.titulo2').classList.remove('fadeInLeft');
            document.querySelector('.titulo2').classList.add('fadeOutLeft');
        }
    })
}, options2)

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo3').classList.remove('fadeOutRight');
            document.querySelector('.sobreDiv').classList.remove('fadeOutLeft');
            document.querySelector('.titulo3').classList.add('fadeInRight');
            document.querySelector('.sobreDiv').classList.add('fadeInLeft');
            document.querySelector('.titulo4').classList.remove('fadeOutRight');
            document.querySelector('.titulo4').classList.add('fadeInRight');
            document.querySelector('.sobreCards').classList.remove('fadeOutLeft');
            document.querySelector('.sobreCards').classList.add('fadeInLeft');
        }
        else{
            document.querySelector('.titulo3').classList.remove('fadeInRight');
            document.querySelector('.sobreDiv').classList.remove('fadeInLeft');
            document.querySelector('.titulo3').classList.add('fadeOutRight');
            document.querySelector('.sobreDiv').classList.add('fadeOutLeft');
            document.querySelector('.titulo4').classList.add('fadeOutRight');
            document.querySelector('.titulo4').classList.remove('fadeInRight');
            document.querySelector('.sobreCards').classList.add('fadeOutLeft');
            document.querySelector('.sobreCards').classList.remove('fadeInLeft');
        }
    })
}, options)

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('#t1').classList.remove('fadeOutNowhere');
            document.querySelector('#t1').classList.add('fadeInNowhere');
        }
        else{
            document.querySelector('#t1').classList.remove('fadeInNowhere');
            document.querySelector('#t1').classList.add('fadeOutNowhere');
        }
    })
}, options3)

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('#t2').classList.remove('fadeOutNowhere');
            document.querySelector('#t2').classList.add('fadeInNowhere');
        }
        else{
            document.querySelector('#t2').classList.remove('fadeInNowhere');
            document.querySelector('#t2').classList.add('fadeOutNowhere');
        }
    })
}, options3)

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('#t3').classList.remove('fadeOutNowhere');
            document.querySelector('#t3').classList.add('fadeInNowhere');
        }
        else{
            document.querySelector('#t3').classList.remove('fadeInNowhere');
            document.querySelector('#t3').classList.add('fadeOutNowhere');
        }
    })
}, options3)

const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('#t4').classList.remove('fadeOutNowhere');
            document.querySelector('#t4').classList.add('fadeInNowhere');
        }
        else{
            document.querySelector('#t4').classList.remove('fadeInNowhere');
            document.querySelector('#t4').classList.add('fadeOutNowhere');
        }
    })
}, options3)

const observer8 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('#t5').classList.remove('fadeOutNowhere');
            document.querySelector('#t5').classList.add('fadeInNowhere');
        }
        else{
            document.querySelector('#t5').classList.remove('fadeInNowhere');
            document.querySelector('#t5').classList.add('fadeOutNowhere');
        }
    })
}, options3)





if(window.innerWidth > 576){
    observer2_2.observe(target2);
}
else{
    observer2.observe(target2);
}   

observer4.observe(target2_1);
observer5.observe(target2_2);
observer6.observe(target2_3);
observer7.observe(target2_4);
observer8.observe(target2_5);

observer.observe(target);

observer3.observe(target3);

function uncheck(){
    document.querySelector('#menuCheck').checked = false;
}