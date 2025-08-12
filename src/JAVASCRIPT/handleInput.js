import searchCity from './searchCity';
import showAlert from './showAlert';
import debounce from './debounce';
import enableAutocomplete from './enableAutocomplete';

export default function handleInput() {
	const input = document.querySelector('#search-input');

	const searchBtn = document.querySelector('.search-btn');

	input.addEventListener('keyup', e => {
		if (e.key === 'Enter') {
			const inputValue = input.value.trim();

			if (!inputValue) showAlert();
			searchCity(inputValue, input);
		}
	});

	input.addEventListener(
		'input',
		debounce(() => enableAutocomplete(input), 500)
	);

	searchBtn.addEventListener('click', () => {
		const inputValue = input.value.trim();
		if (!inputValue) showAlert();
		searchCity(inputValue, input);
	});
}
