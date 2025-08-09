import searchCity from './searchCity';

export default function currentLocation() {
	const btn = document.querySelector('.currecnt-location');
	const cityInput = document.querySelector('#search-input');

	btn.addEventListener('click', () => {
		if (!navigator.geolocation) {
			alert('Twoja przeglądarka nie wspiera geolokalizacji');
			return;
		}

		navigator.geolocation.getCurrentPosition(
			async position => {
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				try {
					const apiKey = 'd116da3137684ca098a91041250908';
					const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&lang=en`;
					const response = await fetch(url);
					if (!response.ok) throw new Error('Błąd API');
					const data = await response.json();

					const cityName = data.location.name;
					cityInput.value = cityName; 
				
					searchCity(cityName);
				} catch (err) {
					console.error('Błąd:', err);
					alert(
						'Nie udało się pobrać danych pogodowych dla Twojej lokalizacji.'
					);
				}
			},
			error => {
				alert('Nie udało się pobrać lokalizacji.');
				console.error(error);
			}
		);
	});
}
