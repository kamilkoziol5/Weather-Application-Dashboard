(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=o(i);fetch(i.href,t)}})();function P(){const e=document.querySelector("#toggler"),n=e.querySelector("span");e.addEventListener("click",()=>{const o=document.body.classList.contains("active");document.body.classList.toggle("active"),n.textContent=o?"lightbulb":"light_off"})}function $(){const e=document.querySelector("#app"),n=document.createElement("header");n.innerHTML=`
    <button class="logo">
<img src="./thunder.png" alt="" />
				<h1>Wheater App</h1>
			</button>
			<div class="input-wrapper">
				<div class="search-input-wrapper">
				<input type="text" placeholder="Search City..." id="search-input" autocomplete="off" />
				</div>
				<button class="search-btn">
				<span class="material-symbols-outlined"> search </span>
				</button>
			</div>
			<button class="currecnt-location">Current Location</button>
			<button class="switch-theme" id="toggler">
				<span class="material-symbols-outlined">lightbulb</span>
			</button>
    `,e.append(n)}function k(){const e=document.querySelector("#app"),n=document.createElement("main");n.classList.add("main-content"),n.innerHTML=`
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
    `,e.append(n)}const w=[{code:1e3,day:"Sunny",night:"Clear",icon:113},{code:1003,day:"Partly cloudy",night:"Partly cloudy",icon:116},{code:1006,day:"Cloudy",night:"Cloudy",icon:119},{code:1009,day:"Overcast",night:"Overcast",icon:122},{code:1030,day:"Mist",night:"Mist",icon:143},{code:1063,day:"Patchy rain possible",night:"Patchy rain possible",icon:176},{code:1066,day:"Patchy snow possible",night:"Patchy snow possible",icon:179},{code:1069,day:"Patchy sleet possible",night:"Patchy sleet possible",icon:182},{code:1072,day:"Patchy freezing drizzle possible",night:"Patchy freezing drizzle possible",icon:185},{code:1087,day:"Thundery outbreaks possible",night:"Thundery outbreaks possible",icon:200},{code:1114,day:"Blowing snow",night:"Blowing snow",icon:227},{code:1117,day:"Blizzard",night:"Blizzard",icon:230},{code:1135,day:"Fog",night:"Fog",icon:248},{code:1147,day:"Freezing fog",night:"Freezing fog",icon:260},{code:1150,day:"Patchy light drizzle",night:"Patchy light drizzle",icon:263},{code:1153,day:"Light drizzle",night:"Light drizzle",icon:266},{code:1168,day:"Freezing drizzle",night:"Freezing drizzle",icon:281},{code:1171,day:"Heavy freezing drizzle",night:"Heavy freezing drizzle",icon:284},{code:1180,day:"Patchy light rain",night:"Patchy light rain",icon:293},{code:1183,day:"Light rain",night:"Light rain",icon:296},{code:1186,day:"Moderate rain at times",night:"Moderate rain at times",icon:299},{code:1189,day:"Moderate rain",night:"Moderate rain",icon:302},{code:1192,day:"Heavy rain at times",night:"Heavy rain at times",icon:305},{code:1195,day:"Heavy rain",night:"Heavy rain",icon:308},{code:1198,day:"Light freezing rain",night:"Light freezing rain",icon:311},{code:1201,day:"Moderate or heavy freezing rain",night:"Moderate or heavy freezing rain",icon:314},{code:1204,day:"Light sleet",night:"Light sleet",icon:317},{code:1207,day:"Moderate or heavy sleet",night:"Moderate or heavy sleet",icon:320},{code:1210,day:"Patchy light snow",night:"Patchy light snow",icon:323},{code:1213,day:"Light snow",night:"Light snow",icon:326},{code:1216,day:"Patchy moderate snow",night:"Patchy moderate snow",icon:329},{code:1219,day:"Moderate snow",night:"Moderate snow",icon:332},{code:1222,day:"Patchy heavy snow",night:"Patchy heavy snow",icon:335},{code:1225,day:"Heavy snow",night:"Heavy snow",icon:338},{code:1237,day:"Ice pellets",night:"Ice pellets",icon:350},{code:1240,day:"Light rain shower",night:"Light rain shower",icon:353},{code:1243,day:"Moderate or heavy rain shower",night:"Moderate or heavy rain shower",icon:356},{code:1246,day:"Torrential rain shower",night:"Torrential rain shower",icon:359},{code:1249,day:"Light sleet showers",night:"Light sleet showers",icon:362},{code:1252,day:"Moderate or heavy sleet showers",night:"Moderate or heavy sleet showers",icon:365},{code:1255,day:"Light snow showers",night:"Light snow showers",icon:368},{code:1258,day:"Moderate or heavy snow showers",night:"Moderate or heavy snow showers",icon:371},{code:1261,day:"Light showers of ice pellets",night:"Light showers of ice pellets",icon:374},{code:1264,day:"Moderate or heavy showers of ice pellets",night:"Moderate or heavy showers of ice pellets",icon:377},{code:1273,day:"Patchy light rain with thunder",night:"Patchy light rain with thunder",icon:386},{code:1276,day:"Moderate or heavy rain with thunder",night:"Moderate or heavy rain with thunder",icon:389},{code:1279,day:"Patchy light snow with thunder",night:"Patchy light snow with thunder",icon:392},{code:1282,day:"Moderate or heavy snow with thunder",night:"Moderate or heavy snow with thunder",icon:395}];function T(e){const n=document.querySelector(".temp"),o=document.querySelector(".weather-text-info"),s=document.querySelector(".date-text"),i=document.querySelector(".location-text"),t=document.querySelector(".icon-weather img"),a=document.querySelector(".col-flex-info .speed"),c=document.querySelector(".col-flex-info .uv"),d=document.querySelector(".col-flex-info .gti"),r=document.querySelector(".col-flex-info .dev"),y=document.querySelector(".sunrise .col-time .value"),l=document.querySelector(".sunset .col-time .value"),h=document.querySelector(".highlights .bottom-part .card .details .highlight-humidity"),f=document.querySelector(".highlights .bottom-part .card .details .highlight-pressure"),L=document.querySelector(".highlights .bottom-part .card .details .highlight-visibility"),C=document.querySelector(".highlights .bottom-part .card .details .highlight-feels"),u=document.querySelector(".quality-info"),g=e.current.vis_km,v=e.current.humidity;g>8&&v<60?(u.textContent="Good",u.style.backgroundColor="#1cdd26"):g>5&&g<=8&&v>=60&&v<=75?(u.textContent="Medium",u.style.backgroundColor="#f1a517ff"):(u.textContent="Bad",u.style.backgroundColor="#fc422aff");const S=e.current.condition.code,b=w.find(q=>q.code===S),z=e.current.is_day?"day":"night",M=b?`${z}/${b.icon}.png`:hourData.condition.icon;n.textContent=`${Math.floor(e.current.temp_c)} °C`,o.textContent=e.current.condition.text,s.textContent=e.location.localtime.split(" ")[0],i.textContent=e.location.name,t.src=`/weather_icons/${M}`,a.textContent=`${e.current.wind_kph} kph`,c.textContent=e.current.uv,d.textContent=e.current.gti,r.textContent=e.current.dewpoint_c,y.textContent=e.forecast.forecastday[0].astro.sunrise,l.textContent=e.forecast.forecastday[0].astro.sunset,h.textContent=`${v} %`,f.textContent=`${e.current.pressure_mb} hPa`,L.textContent=`${g} km`,C.textContent=`${e.current.feelslike_c} °C`}function E(e){const n=document.querySelector(".forecast");n.innerHTML="",e.forecast.forecastday.forEach(o=>{const s=new Date(o.date),i={day:"numeric",month:"short"},t=s.toLocaleString("en-US",i),a=s.toLocaleDateString("en-US",{weekday:"long"}),c=o.day.condition.code,d=Math.round(o.day.avgtemp_c),r=w.find(h=>h.code===c),y=r?`${r.icon}.png`:o.day.condition.icon,l=document.createElement("div");l.classList.add("next-day-container"),l.innerHTML=`
        				<div class="icon-temp">
							<img src="/weather_icons/${y}" alt="weather icon" />
							<h3>${d}</h3>
						</div>
			  			
							<div class="date">
							<span>${t}</span>
							</div>
							<div class="day">${a}</div>
					
        `,n.append(l)})}function I(e){const n=document.querySelector(".today-forecast .wrapper");n.innerHTML="";const o=new Date;[...e.forecast.forecastday[0].hour,...e.forecast.forecastday[1].hour].filter(t=>new Date(t.time)>=o).slice(0,24).forEach(t=>{const a=new Date(t.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),c=Math.round(t.temp_c),d=t.condition.code,r=w.find(f=>f.code===d),y=t.is_day?"day":"night",l=r?`${y}/${r.icon}.png`:t.condition.icon,h=document.createElement("div");h.classList.add("card"),h.innerHTML=`
			<span class="hour">${a}</span>
				<img src="/weather_icons/${l}" alt="weather icon" />
			<span class="temperature">${c} °C</span>
		`,n.appendChild(h)})}async function p(e,n){const i=`https://api.weatherapi.com/v1/forecast.json?key=d116da3137684ca098a91041250908 &q=${encodeURIComponent(e)}&days=5&lang=en`;try{const t=await fetch(i);if(!t.ok)throw new Error("Bład API");const a=await t.json();T(a),E(a),I(a)}catch(t){console.error("Błąd:",t)}}function x(){if(document.querySelector(".popup"))return;const e=document.createElement("div");e.classList.add("popup"),e.textContent="Please Write something in search input",document.body.append(e),setTimeout(()=>{e.classList.add("show")},10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)},2e3)}function H(e,n){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=null},n)}}async function _(e){const n="d116da3137684ca098a91041250908",o=e.value.trim();if(o.length<2)return m();try{const i=await(await fetch(`https://api.weatherapi.com/v1/search.json?key=${n}&q=${encodeURIComponent(o)}`)).json();j(i,e,o),document.addEventListener("click",t=>{e.contains(t.target)||t.target.closest(".autocomplete-list")||m()})}catch(s){console.error("Błąd w autocomplete:",s)}}function j(e,n,o){m();const s=document.createElement("ul");s.classList.add("autocomplete-list"),e.forEach(i=>{const t=document.createElement("li"),a=O(o,i.name);t.innerHTML=`${a}, ${i.country}`,t.addEventListener("click",()=>{n.value=i.name,p(i.name),m()}),s.append(t)}),n.parentElement.appendChild(s)}function m(){document.querySelectorAll(".autocomplete-list").forEach(e=>e.remove())}function O(e,n){let o=e.toUpperCase(),i=n.toUpperCase().indexOf(o);if(i===-1)return n;let t=i+e.length,a=n.substring(0,i),c=n.substring(i,t),d=n.substring(t);return`${a}<b>${c}</b>${d}`}function B(){const e=document.querySelector("#search-input"),n=document.querySelector(".search-btn");e.addEventListener("keyup",o=>{if(o.key==="Enter"){const s=e.value.trim();s||x(),p(s)}}),e.addEventListener("input",H(()=>_(e),500)),n.addEventListener("click",()=>{const o=e.value.trim();o||x(),p(o)})}function A(){p("London")}function F(){const e=document.querySelector(".currecnt-location"),n=document.querySelector("#search-input");e.addEventListener("click",()=>{if(!navigator.geolocation){alert("Twoja przeglądarka nie wspiera geolokalizacji");return}navigator.geolocation.getCurrentPosition(async o=>{const s=o.coords.latitude,i=o.coords.longitude;try{const a=`http://api.weatherapi.com/v1/forecast.json?key=d116da3137684ca098a91041250908&q=${s},${i}&days=1&lang=en`,c=await fetch(a);if(!c.ok)throw new Error("Błąd API");const r=(await c.json()).location.name;n.value=r,p(r)}catch(t){console.error("Błąd:",t),alert("Nie udało się pobrać danych pogodowych dla Twojej lokalizacji.")}},o=>{alert("Nie udało się pobrać lokalizacji."),console.error(o)})})}$();k();P();B();A();F();
