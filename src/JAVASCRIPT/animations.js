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
	gsap.fromTo(
		'.main-content .section-wrapper .today .top-part img',
		{ x: 90, opacity: 0, scale: 0, rotate: 180 },
		{ x: 0, opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: 'power2.out', delay: 0.5 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .today .top-part .text-container',
		{ x: -90, opacity: 0, scale: 0 },
		{ x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.5 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .today .top-part .text-container h2',
		{ x: -90, opacity: 0, scale: 0 },
		{ x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.5 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .today .divider',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.5 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .today .bottom-part .date-container',
		{ y: 100, opacity: 0, scale: 0 },
		{ y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.5, stagger: 0.3 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .highlights .top-part .left-side .details-container .icon',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 0.7 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .highlights .top-part .left-side .details-container .col-flex-info',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 0.7, stagger: 0.25 }
	);
	gsap.fromTo(
		'.main-content .section-wrapper .highlights .top-part .card',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 0.6, stagger: 0.15 }
	);
	gsap.fromTo(
		'.main-content .section-wrapper .highlights .bottom-part .card',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 1.05, stagger: 0.15 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .highlights .top-part .right-side .sunrise-sunset-container .sunrise',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 1.55 }
	);

	gsap.fromTo(
		'.main-content .section-wrapper .highlights .top-part .right-side .sunrise-sunset-container .sunset',
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1, duration: 0.3, delay: 1.75 }
	);
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
