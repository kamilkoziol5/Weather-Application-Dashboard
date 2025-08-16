import searchCity from './searchCity.js';

export default async function enableAutocomplete(input) {
	const apiKey = 'd116da3137684ca098a91041250908';
	let selectedIndex = -1;

	input.addEventListener('input', async () => {
		const query = input.value.trim();
		if (query.length < 2) return clearSuggestions();

		try {
			const res = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${encodeURIComponent(query)}`);
			const data = await res.json();
			renderSuggestions(data, query);
			selectedIndex = -1;
		} catch (err) {
			console.error(err);
		}
	});

	input.addEventListener('keydown', e => {
		const items = document.querySelectorAll('.autocomplete-list li');
		if (!items.length) return;

		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			selectedIndex = (selectedIndex + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
			items.forEach((li, i) => li.classList.toggle('selected', i === selectedIndex));
		} else if (e.key === 'Enter' && selectedIndex >= 0) {
			items[selectedIndex].click();
		}
	});

	document.addEventListener('click', e => {
		if (!input.contains(e.target) && !e.target.closest('.autocomplete-list')) clearSuggestions();
	});

	function renderSuggestions(data, query) {
		clearSuggestions();
		const list = document.createElement('ul');
		list.className = 'autocomplete-list';

		data.forEach(loc => {
			const li = document.createElement('li');
			li.innerHTML = `${renderElement(query, loc.name)}, ${loc.country}`;
			li.addEventListener('click', () => {
				input.value = loc.name;
				searchCity(loc.name, input);
				clearSuggestions();
			});
			list.appendChild(li);
		});

		input.parentElement.appendChild(list);
	}

	function clearSuggestions() {
		document.querySelectorAll('.autocomplete-list').forEach(el => el.remove());
	}

	function renderElement(inputValue, data) {
		const val = inputValue.toUpperCase();
		const temp = data.toUpperCase();
		const indexStart = temp.indexOf(val);
		if (indexStart === -1) return data;
		const indexEnd = indexStart + inputValue.length;
		const part1 = data.substring(0, indexStart);
		const part2 = data.substring(indexStart, indexEnd);
		const part3 = data.substring(indexEnd);

		return `${part1}<b>${part2}</b>${part3}`;
	}
}
