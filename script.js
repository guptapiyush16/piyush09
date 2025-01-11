document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const projectDetails = document.getElementById('project-details');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-id');
            projectDetails.innerHTML = `<h3>Details of Project ${projectId}</h3><p>Description and photos of the project go here.</p>`;
            projectDetails.style.display = 'block';
            projectDetails.scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    const slideshow = document.querySelector('.slideshow');

    if (slideshow) {
        let scrollAmount = 0;
        setInterval(() => {
            scrollAmount += 200;
            if (scrollAmount >= slideshow.scrollWidth) {
                scrollAmount = 0;
            }
            slideshow.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }, 3000);
    }

    const headerLinks = document.querySelectorAll('header nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
