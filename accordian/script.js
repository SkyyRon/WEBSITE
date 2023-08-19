// const accordians= document.querySelectorAll('.accordian');

// accordians.forEach(accordian =>{
//     const icon=accordian.querySelector('.icon');
//     const answer=accordian.querySelector('.asnwer');

//     accordian.addEventListener('click', () => {

//         if(icon.classList.contains('active')){
//             icon.classList.remove('active')
//             answer.style.maxHeight=null;
//         }

//         else {
//             icon.classList.add('active')
//             icon.classList.maxHeight = answer.scrollHeight + 'px';
//         }
//     })
// })

const accordions = document.querySelectorAll('.accordian');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});