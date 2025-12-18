document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');


            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = '▼';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '▲';
            }
        });
    });

    if (faqQuestions.length > 0) {
        const firstAnswer = faqQuestions[0].nextElementSibling;
        const firstIcon = faqQuestions[0].querySelector('.faq-icon');

        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        firstIcon.textContent = '▲';
    }
});

