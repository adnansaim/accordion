const accordionQuestions = document.querySelectorAll('.faq_accordion_sect_question')

accordionQuestions.forEach(question => {
    question.addEventListener('click', function () {
        const ans = this.nextElementSibling
        const rotateIcon = this.querySelector('span')

        rotateIcon.classList.toggle('rotateY')

        ans.classList.toggle('active')

        if (ans.classList.contains('active')) {
            console.log(ans.scrollHeight)
            ans.style.maxHeight = ans.scrollHeight + 'px'
        }
        else {
            ans.style.maxHeight = 0;
        }
    })
})