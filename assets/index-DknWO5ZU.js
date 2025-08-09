(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();function b(){const e=document.querySelector("#toggler"),s=e.querySelector("span");e.addEventListener("click",()=>{const o=document.body.classList.contains("active");document.body.classList.toggle("active"),s.textContent=o?"lightbulb":"light_off"})}function S(){const e=document.querySelector("#app"),s=document.createElement("header");s.innerHTML=`
    <button class="logo">
<img src="./thunder.png" alt="" />
				<h1>Wheater App</h1>
			</button>
			<div class="input-wrapper">
				<input type="text" placeholder="Search City..." id="search-input" autocomplete="off" />
				<span class="material-symbols-outlined"> search </span>
			</div>
			<button class="currecnt-location">Current Location</button>
			<button class="switch-theme" id="toggler">
				<span class="material-symbols-outlined">lightbulb</span>
			</button>
    `,e.append(s)}function w(){const e=document.querySelector("#app"),s=document.createElement("main");s.classList.add("main-content"),s.innerHTML=`
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
				<h2>5 Days Forecast</h2>
				<div class="forecast container">
					
				</div>
			</section>

			
			<section class="section-wrapper right-side">
				<!-- Highlists Contaniner -->
				<div class="highlights container">
					<div class="title">
						<h3>Today Highlights</h3>
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
				<h2>Today At</h2>
				
				<div class="today-forecast container">
					<div class="wrapper">
						
					</div>
				</div>
			</section>
    `,e.append(s)}function C(e){const s=document.querySelector(".temp"),o=document.querySelector(".weather-text-info"),c=document.querySelector(".date-text"),n=document.querySelector(".location-text"),t=document.querySelector(".icon-weather img"),i=document.querySelector(".col-flex-info .speed"),r=document.querySelector(".col-flex-info .uv"),l=document.querySelector(".col-flex-info .gti"),a=document.querySelector(".col-flex-info .dev"),v=document.querySelector(".sunrise .col-time .value"),m=document.querySelector(".sunset .col-time .value"),y=document.querySelector(".highlights .bottom-part .card .details .highlight-humidity"),f=document.querySelector(".highlights .bottom-part .card .details .highlight-pressure"),g=document.querySelector(".highlights .bottom-part .card .details .highlight-visibility"),x=document.querySelector(".highlights .bottom-part .card .details .highlight-feels"),d=document.querySelector(".quality-info"),u=e.current.vis_km,p=e.current.humidity;u>8&&p<60?(d.textContent="Good",d.style.backgroundColor="#1cdd26"):u>5&&u<=8&&p>=60&&p<=75?(d.textContent="Medium",d.style.backgroundColor="#f1a517ff"):(d.textContent="Bad",d.style.backgroundColor="#fc422aff"),s.textContent=`${Math.floor(e.current.temp_c)} °C`,o.textContent=e.current.condition.text,c.textContent=e.location.localtime.split(" ")[0],n.textContent=e.location.name,t.src=e.current.condition.icon,i.textContent=`${e.current.wind_kph} kph`,r.textContent=e.current.uv,l.textContent=e.current.gti,a.textContent=e.current.dewpoint_c,v.textContent=e.forecast.forecastday[0].astro.sunrise,m.textContent=e.forecast.forecastday[0].astro.sunset,y.textContent=`${p} %`,f.textContent=`${e.current.pressure_mb} hPa`,g.textContent=`${u} km`,x.textContent=`${e.current.feelslike_c} °C`}function q(e){const s=document.querySelector(".forecast");s.innerHTML="",e.forecast.forecastday.forEach(o=>{const c=new Date(o.date),n={day:"numeric",month:"short"},t=c.toLocaleString("en-US",n),i=c.toLocaleDateString("en-US",{weekday:"long"}),r=o.day.condition.icon,l=Math.round(o.day.avgtemp_c),a=document.createElement("div");a.classList.add("next-day-container"),a.innerHTML=`
        				<div class="icon-temp">
							<img src="${r}" alt="" />
							<h3>${l}</h3>
						</div>
			  			
							<div class="date">
							<span>${t}</span>
							</div>
							<div class="day">${i}</div>
					
        `,s.append(a)})}function L(e){const s=document.querySelector(".today-forecast .wrapper");s.innerHTML="";const o=new Date,n=[...e.forecast.forecastday[0].hour,...e.forecast.forecastday[1].hour].filter(t=>new Date(t.time)>=o).slice(0,24);console.log(n),n.forEach(t=>{const i=new Date(t.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),r=Math.round(t.temp_c),l=t.condition.icon,a=document.createElement("div");a.classList.add("card"),a.innerHTML=`
			<span class="hour">${i}</span>
			<img src="${l}" alt="" />
			<span class="temperature">${r} °C</span>
		`,s.appendChild(a)})}async function h(e,s){const n=`https://api.weatherapi.com/v1/forecast.json?key=d116da3137684ca098a91041250908 &q=${encodeURIComponent(e)}&days=5&lang=en`;try{const t=await fetch(n);if(!t.ok)throw new Error("Bład API");const i=await t.json();C(i),q(i),L(i),s.value=""}catch(t){console.error("Błąd:",t)}}function k(){const e=document.querySelector("#search-input");e.addEventListener("keyup",s=>{if(s.key==="Enter"){const o=e.value.trim();h(o,e)}})}function T(){h("London")}function $(){const e=document.querySelector(".currecnt-location"),s=document.querySelector("#search-input");e.addEventListener("click",()=>{if(!navigator.geolocation){alert("Twoja przeglądarka nie wspiera geolokalizacji");return}navigator.geolocation.getCurrentPosition(async o=>{const c=o.coords.latitude,n=o.coords.longitude;try{const i=`http://api.weatherapi.com/v1/forecast.json?key=d116da3137684ca098a91041250908&q=${c},${n}&days=1&lang=en`,r=await fetch(i);if(!r.ok)throw new Error("Błąd API");const a=(await r.json()).location.name;s.value=a,h(a)}catch(t){console.error("Błąd:",t),alert("Nie udało się pobrać danych pogodowych dla Twojej lokalizacji.")}},o=>{alert("Nie udało się pobrać lokalizacji."),console.error(o)})})}S();w();b();k();T();$();
