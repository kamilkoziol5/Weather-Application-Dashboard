export default function renderHeader() {
	const app = document.querySelector('#app');
	const header = document.createElement('header');
	header.innerHTML = `
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
    `;

	app.append(header);
}
