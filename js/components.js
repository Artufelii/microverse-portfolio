export const card = (work, i) => `
<div class="card ${(i % 2 === 0) ? 'row-reverse' : ''}">
<div class="image-container">
<img src="${work.image}" alt="${work.name}">
</div>
<div class="info">
<h2 class="info-title"> ${work.name} </h2>
<div class="canopy">
<p>CANOPY</p>
<ul> ${work.featured.map((f) => `<li>${f}</li>`).join('')} </ul>
</div>
<div class="extract">
<p>${work.description}</p>
</div>
<ul class="technologies"> ${work.tech.map((t) => `<li>${t}</li>`).join('')} </ul>
<button data-button="open" class="see">See project</button>
</div>
</div>`;

export const modal = (work, index) => `
<div id="modal-${index}" class='modal'>
<div class="modal-info">
<div class="modal-title">
<h1>${work.name}</h1>
<div data-button="close" class="close-modal">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
</div>
<div class="canopy">
<p>CANOPY</p>
<ul> ${work.featured.map((f) => `<li>${f}</li>`).join('')} </ul>
</div>
<div class="modal-image">
<img src="${work.image}" alt="${work.name}">
</div>
<div class="modal-desc">
<p>${work.description}</p>
<ul class="technologies modal-tech"> ${work.tech.map((t) => `<li>${t}</li>`).join('')} </ul>
</div>
<hr>
<div class="modal-buttons">
<a href="${work.demo}" class="see modal-link">See live <img src="assets/live.svg" alt="live demo"></a>
<a href="${work.source}" class="see modal-link">See source <img src="assets/git.png" alt="Github"></a>
</div>
</div>
</div>`;
