import { gsap } from 'gsap';

export function animateNextDays() {
	gsap.from('.next-day-container', {
		y: 30,
		opacity: 0,
		scale: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'elastic.out(0.75, 0.95)',
		delay: 0.4,
	});
}

export function animateSections() {
	gsap.from('.main-content .section-wrapper .h2-title', {
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power2.out',
		delay: 1.3,
		transformOrigin: 'center',
	});

	gsap.from('.section-wrapper .today', {
		x: -900,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
	});
	gsap.from('.section-wrapper .forecast', {
		x: -900,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
	});
	gsap.from('.section-wrapper .highlights', {
		x: 900,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
	});

	gsap.from('.section-wrapper .today-forecast', {
		x: 900,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
	});

	gsap.from('.section-wrapper .highlights .card', {
		opacity: 0,
		scale: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
		stagger: 0.2,
		delay: 0.35,
	});
}

export function animateTodayHoursForecast() {
	gsap.from('.section-wrapper .today-forecast .wrapper .card', {
		y: 90,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		ease: 'power2.out',
		delay: 0.4,
	});
}

export function animateTodayWeather() {
	gsap.from('.main-content .section-wrapper .today .top-part img', {
		x: 90,
		opacity: 0,
		scale: 0,
		rotate: 180,
		duration: 0.5,
		ease: 'power2.out',
		delay: 0.5,
	});

	gsap.from('.main-content .section-wrapper .today .top-part .text-container', {
		x: -90,
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power2.out',
		delay: 0.5,
	});
	gsap.from('.main-content .section-wrapper .today .top-part .text-container h2', {
		x: -90,
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power2.out',
		delay: 0.5,
	});
	gsap.from('.main-content .section-wrapper .today .divider', {
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power2.out',
		delay: 0.5,
	});
	gsap.from('.main-content .section-wrapper .today .bottom-part .date-container', {
		y: 100,
		opacity: 0,
		scale: 0,
		duration: 0.5,
		ease: 'power2.out',
		delay: 0.5,
		stagger: 0.3,
	});
}

export function animateHeader() {
	gsap.from('header .logo', {
		opacity: 0,
		x: -100,
		duration: 0.5,
		delay: 1,
		ease: 'power1.out',
		delay: 0.5,
	});
	gsap.from('header .input-wrapper', {
		opacity: 0,
		y: -100,
		duration: 0.5,
		delay: 1,
		ease: 'power1.out',
		delay: 0.6,
	});
	gsap.from('header .button-wrapper', {
		opacity: 0,
		y: -100,
		duration: 0.5,
		delay: 1,
		ease: 'power1.out',
		delay: 0.8,
	});

	gsap.from('header .switch-theme ', {
		opacity: 0,
		y: -100,
		duration: 0.5,
		delay: 1,
		ease: 'power1.out',
		delay: 0.95,
	});
}
