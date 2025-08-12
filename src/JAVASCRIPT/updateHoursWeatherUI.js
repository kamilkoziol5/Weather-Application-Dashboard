import icons from '../../data/icons.json';

export default function updateHoursWeatherUI(data) {
	const hoursWrapper = document.querySelector('.today-forecast .wrapper');
	hoursWrapper.innerHTML = '';

	const now = new Date();

	const hoursData = [
		...data.forecast.forecastday[0].hour,
		...data.forecast.forecastday[1].hour,
	];

	const next24Hours = hoursData
		.filter(hourData => {
			const hourTime = new Date(hourData.time);
			return hourTime >= now;
		})
		.slice(0, 24);

	next24Hours.forEach(hourData => {
		const time = new Date(hourData.time).toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		const temp = Math.round(hourData.temp_c);
		const iconCode = hourData.condition.code;

		const conditionObj = icons.find(c => c.code === iconCode);

		const iconFolder = hourData.is_day ? 'day' : 'night';

		const iconSrc = conditionObj
			? `${iconFolder}/${conditionObj.icon}.png`
			: hourData.condition.icon;

		const hourElement = document.createElement('div');
		hourElement.classList.add('card');
		hourElement.innerHTML = `
			<span class="hour">${time}</span>
			<img src="public/weather_icons/${iconSrc}" alt="" />
			<span class="temperature">${temp} °C</span>
		`;
		hoursWrapper.appendChild(hourElement);
	});
}
