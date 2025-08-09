import searchCity from './searchCity';

export default function handleInput() {
	const input = document.querySelector('#search-input');

	input.addEventListener('keyup', e => {
		if (e.key === 'Enter') {
			const inputValue = input.value.trim();
			searchCity(inputValue, input);
		}
	});
}
