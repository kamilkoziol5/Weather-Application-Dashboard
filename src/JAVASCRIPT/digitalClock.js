export default function digitalClock() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, 0);
	const minutes = now.getMinutes().toString().padStart(2, 0);
	const seconds = now.getSeconds().toString().padStart(2, 0);

	const stringTime = `${hours} : ${minutes} : ${seconds}`;

	const clockDiv = document.querySelector('.main-content .section-wrapper .highlights .title .digital-clock ');

	clockDiv.textContent = stringTime;
}
