document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
    
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const navHighlighter = () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            let sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active-link");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active-link");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", navHighlighter);

    const projectCards = document.querySelectorAll('.card-projeto');
    const modalContainer = document.getElementById('modal-container');
    const modalCloseBtn = document.querySelector('.modal-close');
    
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechList = document.getElementById('modal-tech-list');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalDemoLink = document.getElementById('modal-demo-link');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const image = card.dataset.image;
            const desc = card.dataset.desc;
            const techs = card.dataset.techs;
            const github = card.dataset.github;
            const demo = card.dataset.demo;

            modalTitle.textContent = title;
            modalImage.src = image;
            modalImage.alt = `Imagem do projeto ${title}`;
            modalDescription.textContent = desc;
            modalTechList.textContent = techs;
            modalGithubLink.href = github;

            if (demo) {
                modalDemoLink.href = demo;
                modalDemoLink.classList.remove('hidden');
            } else {
                modalDemoLink.classList.add('hidden');
            }

            modalContainer.classList.remove('hidden');
            document.body.classList.add('modal-open');
        });
    });

    const closeModal = () => {
        modalContainer.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    tsParticles.load({
        id: "tsparticles",
        options: {
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#EFEFD0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#EFEFD0", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_opacity: 1 },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        }
    });

     AOS.init({
        duration: 1000,
        once: true,
    });
});