import icons from '../../data/icons.json';

export default function updateNextDaysWeatherUI(data) {
	const nextDaysWrapper = document.querySelector('.forecast');
	nextDaysWrapper.innerHTML = '';

	data.forecast.forecastday.forEach(dayData => {
		const dateObj = new Date(dayData.date);
		const options = { day: 'numeric', month: 'short' };
		const formatedDate = dateObj.toLocaleString('en-US', options);
		const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
		const conditionCode = dayData.day.condition.code;
		const temp = Math.round(dayData.day.avgtemp_c);

		const conditionObj = icons.find(c => c.code === conditionCode);

		const iconSrc = conditionObj ? `${conditionObj.icon}.png` : dayData.day.condition.icon;

		const dayContainer = document.createElement('div');
		dayContainer.classList.add('next-day-container');
		dayContainer.innerHTML = `
        				<div class="icon-temp">
							<img src="weather_icons/day/${iconSrc}" alt="weather icon" />
							<h3>${temp}</h3>
						</div>
			  			
							<div class="date">
							<span>${formatedDate}</span>
							</div>
							<div class="day">${dayOfWeek}</div>
					
        `;

		nextDaysWrapper.append(dayContainer);
	});
}
