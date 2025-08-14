import icons from '../../data/icons.json';
import { animateTodayWeather } from './animations';

export default function updateTodayWeatherUI(data) {
	const textContainer = document.querySelector('.main-content .section-wrapper .today .top-part .text-container');
	const tempInfo = document.querySelector('.temp');
	const weatherDescription = document.querySelector('.weather-text-info');
	const dateText = document.querySelector('.date-text');
	const locationText = document.querySelector('.location-text');
	const iconWeather = document.querySelector('.icon-weather img');
	const windSpeed = document.querySelector('.col-flex-info .speed');
	const uvIndex = document.querySelector('.col-flex-info .uv');
	const gtiIndex = document.querySelector('.col-flex-info .gti');
	const devIndex = document.querySelector('.col-flex-info .dev');
	const sunrise = document.querySelector('.sunrise .col-time .value');
	const sunset = document.querySelector('.sunset .col-time .value');
	const humidity = document.querySelector('.highlights .bottom-part .card .details .highlight-humidity');
	const pressure = document.querySelector('.highlights .bottom-part .card .details .highlight-pressure');
	const visibility = document.querySelector('.highlights .bottom-part .card .details .highlight-visibility');
	const feelsLike = document.querySelector('.highlights .bottom-part .card .details .highlight-feels');
	const qualityDiv = document.querySelector('.quality-info');

	const visibilityData = data.current.vis_km;
	const humidityData = data.current.humidity;

	if (visibilityData > 8 && humidityData < 60) {
		qualityDiv.textContent = 'Good';
		qualityDiv.style.backgroundColor = '#1cdd26';
	} else if (visibilityData > 5 && visibilityData <= 8 && humidityData >= 60 && humidityData <= 75) {
		qualityDiv.textContent = 'Medium';
		qualityDiv.style.backgroundColor = '#f1a517ff';
	} else {
		qualityDiv.textContent = 'Bad';
		qualityDiv.style.backgroundColor = '#fc422aff';
	}

	const conditionCode = data.current.condition.code;
	const conditionObj = icons.find(c => c.code === conditionCode);
	const iconFolder = data.current.is_day ? 'day' : 'night';

	const iconSrc = conditionObj ? `${iconFolder}/${conditionObj.icon}.png` : hourData.condition.icon;

	tempInfo.textContent = `${Math.floor(data.current.temp_c)} °C`;
	weatherDescription.textContent = data.current.condition.text;
	dateText.textContent = data.location.localtime.split(' ')[0];
	locationText.textContent = data.location.name;
	iconWeather.src = `weather_icons/${iconSrc}`;
	windSpeed.textContent = `${data.current.wind_kph} kph`;
	uvIndex.textContent = data.current.uv;
	gtiIndex.textContent = data.current.gti;
	devIndex.textContent = data.current.dewpoint_c;
	sunrise.textContent = data.forecast.forecastday[0].astro.sunrise;
	sunset.textContent = data.forecast.forecastday[0].astro.sunset;
	humidity.textContent = `${humidityData} %`;
	pressure.textContent = `${data.current.pressure_mb} hPa`;
	visibility.textContent = `${visibilityData} km`;
	feelsLike.textContent = `${data.current.feelslike_c} °C`;

	animateTodayWeather();
}
