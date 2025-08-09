export default function toggleTheme() {
	const toggleBnt = document.querySelector('#toggler');
	const spanIcon = toggleBnt.querySelector('span');

	toggleBnt.addEventListener('click', () => {
		const isLight = document.body.classList.contains('active');
		document.body.classList.toggle('active');
		spanIcon.textContent = !isLight ? 'light_off' : 'lightbulb';
	});
}
