export default function renderApp() {
	const appCtn = document.querySelector('#app');
	const application = document.createElement('main');
	application.classList.add('main-content');
	application.innerHTML = `
    		<section class="section-wrapper left-side">
				<!-- Today Container -->
				<div class="today container">
					<div class="top-part">
						<div class="text-container">
							<span class="now">Now</span>
							<h2 class="temp">9 °C</h2>
							<span class="weather-text-info">Broken Clouds</span>
						</div>
						<div class="icon-weather">
							<img src="public/weather_icons/02n.png" alt="" />
						</div>
					</div>
					<span class="divider"></span>
					<div class="bottom-part">
						<div class="date-container">
							<span class="material-symbols-outlined"> calendar_today </span>
							<h5 class="date-text">Thursday 1, Jun</h5>
						</div>
						<div class="date-container">
							<span class="material-symbols-outlined"> location_on </span>
							<h5 class="location-text">Paris,FR</h5>
						</div>
					</div>
				</div>
				<h2 class="h2-title"> 5 Days Forecast</h2>
				<div class="forecast container">
					
				</div>
			</section>

			
			<section class="section-wrapper right-side">
				<!-- Highlists Contaniner -->
				<div class="highlights container">
					<div class="title">
						<h3>Today Highlights</h3>
						<div class="digital-clock">00:00:00</div>
					</div>
					<div class="top-part">
						<div class="left-side card">
							<div class="title-container">
								<span class="quality-title">Air Quality Index</span>
								<span class="quality-info">Good</span>
							</div>
							<div class="details-container">
								<span class="material-symbols-outlined icon"> air </span>
								<div class="col-flex-info">
									<span class="value-text "> Speed </span>
									<h3 class="value speed">3.90</h3>
								</div>
								<div class="col-flex-info">
									<span class="value-text"> UV</span>
									<h3 class="value uv">3.90</h3>
								</div>
								<div class="col-flex-info">
									<span class="value-text"> GTI </span>
									<h3 class="value gti">3.90</h3>
								</div>
								<div class="col-flex-info">
									<span class="value-text"> DEW </span>
									<h3 class="value dev">3.90</h3>
								</div>
							</div>
						</div>

						<div class="right-side card">
							<div class="title">
								<h3>Sunrise & Sunset</h3>
							</div>
							<div class="sunrise-sunset-container">
								<div class="sunrise">
									<span class="material-symbols-outlined icon">
										clear_day
									</span>
									<div class="col-time">
										<span class="text">Sunrise</span>
										<h3 class="value">6:46 AM</h3>
									</div>
								</div>
								<div class="sunset">
									<span class="material-symbols-outlined icon">
										dark_mode
									</span>
									<div class="col-time">
										<span class="text">Sunset</span>
										<h3 class="value">6:46 AM</h3>
									</div>
								</div>
							</div>
						</div>
					</div>

					
					<div class="bottom-part">
						<div class="card">
							<div class="title">Humidity</div>
							<div class="details">
								<span class="material-symbols-outlined">
									humidity_percentage
								</span>
								<h3 class="value highlight-humidity">82 %</h3>
							</div>
						</div>
						<div class="card">
							<div class="title">Pressure</div>
							<div class="details">
								<span class="material-symbols-outlined"> airwave </span>
								<h3 class="value highlight-pressure">1026 hPa</h3>
							</div>
						</div>
						<div class="card">
							<div class="title">Visibility</div>
							<div class="details">
								<span class="material-symbols-outlined"> visibility </span>
								<h3 class="value highlight-visibility">20 km</h3>
							</div>
						</div>
						<div class="card">
							<div class="title">Feels Like</div>
							<div class="details">
								<span class="material-symbols-outlined">
									device_thermostat
								</span>
								<h3 class="value highlight-feels">11 °C</h3>
							</div>
						</div>
					</div>
				</div>
				<h2 class="h2-title">Today At</h2>
				
				<div class="today-forecast container">
					<div class="wrapper">
						
					</div>
				</div>
			</section>
    `;

	appCtn.append(application);
}
