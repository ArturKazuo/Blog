const target = document.querySelector('#inicio');
const target2 = document.querySelector('#projetos');
const target3 = document.querySelector('#sobre');
const target4 = document.querySelector('#contato');

let i = 0;
let j = 0;

const options = {
    threshold: 0.4
};

const options2 = {
    threshold: 0.1
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

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo2').classList.remove('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeOutRight');
            document.querySelector('.titulo2').classList.add('fadeInLeft');
            document.querySelector('.projetosDiv').classList.add('fadeInRight');
            document.querySelector('.projetosTextosDiv').classList.remove('fadeOutRight');
            document.querySelector('.projetosTextosDiv').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo2').classList.remove('fadeInLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeInRight');
            document.querySelector('.titulo2').classList.add('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.add('fadeOutRight');
            document.querySelector('.projetosTextosDiv').classList.remove('fadeInRight');
            document.querySelector('.projetosTextosDiv').classList.add('fadeOutRight');
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
})



observer.observe(target);

observer2.observe(target2);

observer3.observe(target3);