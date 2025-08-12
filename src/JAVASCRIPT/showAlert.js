export default function showAlert() {
	if (document.querySelector('.popup')) return;
	const popup = document.createElement('div');
	popup.classList.add('popup');
	popup.textContent = 'Please Write something in search input';

	document.body.append(popup);

	setTimeout(() => {
		popup.classList.add('show');
	}, 10);

	setTimeout(() => {
		popup.classList.remove('show');

		setTimeout(() => {
			popup.remove();
		}, 300);
	}, 2000);
}
