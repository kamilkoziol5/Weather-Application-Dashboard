import updateTodayWeatherUI from './updateTodayWeatherUI';
import updateNextDaysWeatherUI from './updateNextDaysWeatherUI';
import updateHoursWeatherUI from './updateHoursWeatherUI';

export default async function searchCity(city, input) {
	const apiKey = 'd116da3137684ca098a91041250908 ';
	const days = 5;
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
		city
	)}&days=${days}&lang=en`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Bład API');
		}
		const data = await response.json();

		updateTodayWeatherUI(data);
		updateNextDaysWeatherUI(data);
		updateHoursWeatherUI(data);
		input.value = '';
	} catch (err) {
		console.error('Błąd:', err);
	}
}
