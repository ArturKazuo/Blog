const target = document.querySelector('#inicio');
const target2 = document.querySelector('#projetos');
const target3 = document.querySelector('#sobre');
const target4 = document.querySelector('#contato');

const options = {
    threshold: 0.4
};

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
            console.log('it is')
            document.querySelector('.titulo2').classList.remove('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeOutRight');
            document.querySelector('.titulo2').classList.add('fadeInLeft');
            document.querySelector('.projetosDiv').classList.add('fadeInRight');
        }
        else{
            console.log('it is not')
            document.querySelector('.titulo2').classList.remove('fadeInLeft');
            document.querySelector('.projetosDiv').classList.remove('fadeInRight');
            document.querySelector('.titulo2').classList.add('fadeOutLeft');
            document.querySelector('.projetosDiv').classList.add('fadeOutRight');
        }
    })
}, options)

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo3').classList.remove('fadeOutRight');
            document.querySelector('.sobreDiv').classList.remove('fadeOutLeft');
            document.querySelector('.titulo3').classList.add('fadeInRight');
            document.querySelector('.sobreDiv').classList.add('fadeInLeft');
            document.querySelector('.sobreCards').classList.remove('fadeOutRight');
            document.querySelector('.sobreCards').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo3').classList.remove('fadeInRight');
            document.querySelector('.sobreDiv').classList.remove('fadeInLeft');
            document.querySelector('.titulo3').classList.add('fadeOutRight');
            document.querySelector('.sobreDiv').classList.add('fadeOutLeft');
            document.querySelector('.sobreCards').classList.add('fadeOutRight');
            document.querySelector('.sobreCards').classList.remove('fadeInRight');
        }
    })
})

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo4').classList.remove('fadeOutLeft');
            document.querySelector('.contatoDiv').classList.remove('fadeOutRight');
            document.querySelector('.titulo4').classList.add('fadeInLeft');
            document.querySelector('.contatoDiv').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo4').classList.remove('fadeInLeft');
            document.querySelector('.contatoDiv').classList.remove('fadeInRight');
            document.querySelector('.titulo4').classList.add('fadeOutLeft');
            document.querySelector('.contatoDiv').classList.add('fadeOutRight');
        }
    })
})


window.onload = function uncheck(){
    document.body.style.width = 100%;
};

observer.observe(target);

observer2.observe(target2);

observer3.observe(target3);

observer4.observe(target4);