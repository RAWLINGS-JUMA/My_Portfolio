import './styles.css';
import { caseStudies, type CaseStudy } from './projects';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector<HTMLButtonElement>('#menuToggle');
    const primaryNav = document.querySelector<HTMLElement>('#primaryNav');
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.primary-nav a'));
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

    /* Mobile navigation ------------------------------------------------ */
    if (menuToggle && primaryNav) {
        const closeMenu = (): void => {
            primaryNav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation');
        };

        menuToggle.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        });

        navLinks.forEach((link) => link.addEventListener('click', closeMenu));

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof Node)) return;
            if (!primaryNav.contains(target) && !menuToggle.contains(target)) closeMenu();
        });
    }

    /* Active section highlighting -------------------------------------- */
    const setActiveLink = (): void => {
        let currentId = '';
        const offset = window.scrollY + 140;

        sections.forEach((section) => {
            if (section.offsetTop <= offset) currentId = section.id;
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();

    /* Read full profile ------------------------------------------------ */
    const aboutToggle = document.querySelector<HTMLButtonElement>('#aboutToggle');
    const aboutExtra = document.querySelector<HTMLElement>('#about-extra');

    if (aboutToggle && aboutExtra) {
        aboutToggle.addEventListener('click', () => {
            const isExpanded = aboutToggle.getAttribute('aria-expanded') === 'true';
            aboutToggle.setAttribute('aria-expanded', String(!isExpanded));
            aboutExtra.hidden = isExpanded;
            aboutToggle.innerHTML = isExpanded
                ? 'Read full profile <span aria-hidden="true">&darr;</span>'
                : 'Show less <span aria-hidden="true">&uarr;</span>';
        });
    }

    /* Modal helpers ----------------------------------------------------- */
    const projectModal = document.querySelector<HTMLElement>('#projectModal');
    const imageModal = document.querySelector<HTMLElement>('#imageModal');
    let lastFocused: HTMLElement | null = null;

    const openModal = (modal: HTMLElement | null): void => {
        if (!modal) return;
        lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector<HTMLButtonElement>('[data-close]')?.focus();
    };

    const closeModal = (modal: HTMLElement | null): void => {
        if (!modal || modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        lastFocused?.focus();
    };

    document.querySelectorAll<HTMLElement>('[data-close]').forEach((element) => {
        element.addEventListener('click', () => closeModal(element.closest<HTMLElement>('.modal')));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenuOnEscape();
            closeModal(projectModal);
            closeModal(imageModal);
        }
    });

    function closeMenuOnEscape(): void {
        if (primaryNav?.classList.contains('open')) {
            primaryNav.classList.remove('open');
            menuToggle?.setAttribute('aria-expanded', 'false');
            menuToggle?.setAttribute('aria-label', 'Open navigation');
        }
    }

    /* Project case studies --------------------------------------------- */
    const projectTitle = document.querySelector<HTMLElement>('#projectModalTitle');
    const projectBody = document.querySelector<HTMLElement>('#projectModalBody');
    const projectImageBtn = document.querySelector<HTMLButtonElement>('#projectImageBtn');

    document.querySelectorAll<HTMLElement>('[data-project]').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const id = trigger.dataset.project;
            if (!id) return;

            const study: CaseStudy | undefined = caseStudies[id];
            if (!study || !projectModal) return;

            if (projectTitle) projectTitle.textContent = study.title;
            if (projectBody) projectBody.textContent = study.desc;

            const card = trigger.closest<HTMLElement>('.card');
            const image = card?.querySelector<HTMLImageElement>('img');
            if (projectImageBtn && image) {
                projectImageBtn.dataset.image = image.getAttribute('src') ?? '';
                projectImageBtn.dataset.alt = image.alt || 'Project topology';
            }

            openModal(projectModal);
        });
    });

    /* Certificate / topology previews ---------------------------------- */
    const imageModalImg = document.querySelector<HTMLImageElement>('#imageModalImg');

    const openImage = (src: string | undefined, alt: string | undefined): void => {
        if (!imageModal || !imageModalImg || !src) return;
        imageModalImg.src = src;
        imageModalImg.alt = alt ?? 'Preview image';
        openModal(imageModal);
    };

    document.querySelectorAll<HTMLElement>('[data-image]').forEach((trigger) => {
        trigger.addEventListener('click', () => openImage(trigger.dataset.image, trigger.dataset.alt));
    });

    projectImageBtn?.addEventListener('click', () => {
        openImage(projectImageBtn.dataset.image, projectImageBtn.dataset.alt);
    });

    /* Back to top ------------------------------------------------------- */
    const backToTop = document.querySelector<HTMLButtonElement>('#backToTop');

    if (backToTop) {
        const updateBackToTop = (): void => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        };

        window.addEventListener('scroll', updateBackToTop, { passive: true });
        updateBackToTop();
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
