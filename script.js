const projects = [
    {
        title: 'Language Cards',
        technology: 'Vue.js | Tailwind CSS',
        liveUrl: 'https://artjoms-doilnicins.github.io/language-cards/',
        githubUrl: 'https://github.com/artjoms-doilnicins/language-cards',
        imageSrc: './images/language-cards.jpeg',
        imageAlt: 'Language Cards.',
        description: 'A language learning app that helps you learn new Latvian words and practicing them.'
    },
    {
        title: 'Foqus App',
        technology: 'Tailwind CSS',
        liveUrl: 'https://artjoms-doilnicins.github.io/foqus-app/',
        githubUrl: 'https://github.com/artjoms-doilnicins/foqus-app',
        imageSrc: './images/foqus-app.jpeg',
        imageAlt: 'Foqus App.',
        description: 'A landing page for an application that helps manage focus and productivity.'
    },
    {
        title: 'Hangman',
        technology: 'CSS | JavaScript',
        liveUrl: 'https://artjoms-doilnicins.github.io/hangman/',
        githubUrl: 'https://github.com/artjoms-doilnicins/hangman',
        imageSrc: './images/hangman.jpeg',
        imageAlt: 'Hangman.',
        description: 'A classic and interactive word-guessing game where players must uncover the hidden word by guessing one letter at a time before the hangman is fully drawn.'
    },
    {
        title: 'Rock Paper Scissors',
        technology: 'CSS | JavaScript',
        liveUrl: 'https://artjoms-doilnicins.github.io/rock-paper-scissors/',
        githubUrl: 'https://github.com/artjoms-doilnicins/rock-paper-scissors',
        imageSrc: './images/rock-paper-scissors.jpeg',
        imageAlt: 'Rock Paper Scissors.',
        description: 'An interactive Rock Paper Scissors game where you play against the computer and track your results.'
    },
    {
        title: 'Multiplication Quiz',
        technology: 'CSS | JavaScript',
        liveUrl: 'https://artjoms-doilnicins.github.io/multiplication-quiz/',
        githubUrl: 'https://github.com/artjoms-doilnicins/multiplication-quiz',
        imageSrc: './images/multiplication-quiz.jpeg',
        imageAlt: 'Multiplication Quiz.',
        description: 'A fun and interactive quiz to practice multiplication skills, track your score, and challenge yourself.'
    },
    {
        title: 'Testimonials',
        technology: 'Tailwind CSS',
        liveUrl: 'https://artjoms-doilnicins.github.io/testimonials/',
        githubUrl: 'https://github.com/artjoms-doilnicins/testimonials',
        imageSrc: './images/testimonials.jpeg',
        imageAlt: 'Testimonials',
        description: 'A responsive testimonials showcase which purpose is to display user testimonials in a visually appealing, modern grid layout.'
    },
    {
        title: 'Login Form',
        technology: 'CSS',
        liveUrl: 'https://artjoms-doilnicins.github.io/login-form/',
        githubUrl: 'https://github.com/artjoms-doilnicins/login-form',
        imageSrc: './images/login-form.jpeg',
        imageAlt: 'Login Form.',
        description: 'A modern, responsive login and registration form which features a visually appealing glassmorphism design, including blurred backgrounds and custom input styling.'
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');

    projects.forEach((project, index) => {
        const section = document.createElement('section');
        section.id = 'projects';
        
        const article = document.createElement('article');
        // Apply 'reverse' class to every second project
        if (index % 2 === 1) {
            article.classList.add('reverse');
        }

        article.innerHTML = `
            <div class="text-section">
                <h2>${project.title}</h2>
                <div class="description-section">
                    <h3>${project.technology}</h3>
                    <h4>${project.description}</h5>
                    <div class="description">
                        <p>
                            Click
                            <a href="${project.liveUrl}" target="_blank">here</a>
                            to visit the project's website.
                        </p>
                    </div>
                </div>
            </div>
            <div class="img-section">
                <a href="${project.liveUrl}" target="_blank">
                    <img src="${project.imageSrc}" alt="${project.imageAlt}" />
                </a>
            </div>
        `;

        section.appendChild(article);
        container.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const copyrightEl = document.getElementById('copyright');
    if (copyrightEl) {
        copyrightEl.innerHTML = `&copy; ${year}`;
    }

    renderProjects();

    // open burger menu
    document.getElementById('nav-burger').onclick = function () {
        document.querySelector('nav').classList.add('active');
    };
    // close burger menu
    document.getElementById('close-mobile').onclick = function () {
        document.querySelector('nav').classList.remove('active');
    };
    // close burger menu by clicking on menu item
    document.querySelectorAll('.nav-mobile a').forEach((link) => {
        link.onclick = () => {
            document.querySelector('nav').classList.remove('active');
        };
    });
});
