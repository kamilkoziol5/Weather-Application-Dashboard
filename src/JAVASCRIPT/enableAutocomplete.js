import searchCity from './searchCity.js';

export default async function enableAutocomplete(input) {
	const apiKey = 'd116da3137684ca098a91041250908';

	const query = input.value.trim();
	if (query.length < 2) return clearSuggestions();

	try {
		const res = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${encodeURIComponent(query)}`);
		const data = await res.json();

		renderSuggestions(data, input, query);

		document.addEventListener('click', e => {
			const isClickInside = input.contains(e.target) || e.target.closest('.autocomplete-list');
			if (!isClickInside) {
				clearSuggestions();
			}
		});
	} catch (err) {
		console.error('Błąd w autocomplete:', err);
	}
}

function renderSuggestions(data, input, query) {
	clearSuggestions();

	const list = document.createElement('ul');
	list.classList.add('autocomplete-list');

	data.forEach(loc => {
		const li = document.createElement('li');

		const highlightedCity = renderElement(query, loc.name);

		li.innerHTML = `${highlightedCity}, ${loc.country}`;

		li.addEventListener('click', () => {
			input.value = loc.name;
			searchCity(loc.name, input);
			clearSuggestions();
		});

		list.append(li);
	});

	input.parentElement.appendChild(list);
}
function clearSuggestions() {
	document.querySelectorAll('.autocomplete-list').forEach(el => el.remove());
}

function renderElement(inputValue, data) {
	let val = inputValue.toUpperCase();
	let temp = data.toUpperCase();
	let indexStart = temp.indexOf(val);
	if (indexStart === -1) return data;
	let indexEnd = indexStart + inputValue.length;
	let part1 = data.substring(0, indexStart);
	let part2 = data.substring(indexStart, indexEnd);
	let part3 = data.substring(indexEnd);

	return `${part1}<b>${part2}</b>${part3}`;
}
