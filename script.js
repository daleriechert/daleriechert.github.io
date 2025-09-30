const contentMap = {
	home: `
		<p>Hello, I am Dale Riechert, a professional software engineer and transplant to the beautiful Seattle area from scorching Phoenix, Arizona.</p>
		<p>Through my dad, another computer engineer, I was exposed at an early age to the personal computers of the time and dial-up internet, seeding a lifelong passion for technology and a full appreciation for the computing revolution that has come. I heeded the opportunity to study Informatics at Arizona State University, an interdisciplinary field spanning areas of computer science, computer information systems, and human computer interaction. Fundamentally, I seek to bring creative solutions to the problems that unfold between computers, data, and people—as we head deeper into the 21st century.</p>
		<p>On the side I enjoy video games, film, music, graphic design, photography, hiking, traveling Japan, animals, and collecting charmingly mechanical analog watches, with which I have also learned the essentials of watchmaking.</p>
		<div class="portrait-wrapper" title="Tybalt" style="width: 10vh; height: 10vh; display: inline-block; margin-left: 2.5vh; margin-top: 2.5vh;">
			<img class="portrait-picture" alt="Tybalt" src="Tybalt.webp" style="border-radius: 0%;">
			<div class="portrait-overlay" aria-hidden="true" style="border-radius: 0%;"></div>
		</div>
		<div class="portrait-wrapper" title="Sebastian" style="width: 10vh; height: 10vh; display: inline-block;">
			<img class="portrait-picture" alt="Sebastian" src="Sebastian.webp" style="border-radius: 0%;">
			<div class="portrait-overlay" aria-hidden="true" style="border-radius: 0%;"></div>
		</div>
	`,
	resume: `
		<iframe src="Resume - Dale Riechert.pdf" width="100%" height="100%" title="Resume"></iframe>
	`,
	photography: `
		<div id="photo-gallery">Loading photos…</div>
		<div><a href="https://www.flickr.com/photos/130574536@N07/" target="_blank" title="Flickr">More</a></div>
	`
};

function setActiveNav(section) {
	document.querySelectorAll('.nav-item').forEach(el => {
		el.classList.remove('active');
		if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
		if (!el._navKeyHandlerAdded) {
			el.addEventListener('keydown', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					el.click();
				}
			});
			el._navKeyHandlerAdded = true;
		}
	});
	const active = document.querySelector(`.nav-item[onclick*="${section}"]`);
	if (active) active.classList.add('active');
}

function navigate(section) {
	const allowed = ['home', 'resume', 'photography'];
	const target = allowed.includes(section) ? section : 'home';
	window.location.hash = `#${target}`;
	document.getElementById('main-content').innerHTML = contentMap[target] || '<p>Not found</p>';
	setActiveNav(target);
	if (target === 'photography') loadFlickrFeed('#photo-gallery');
}

function init() {
	const hash = (window.location.hash || '#home').replace('#', '');
	const allowed = ['home', 'resume', 'photography'];
	const target = allowed.includes(hash) ? hash : 'home';
	document.getElementById('main-content').innerHTML = contentMap[target] || contentMap.home;
	setActiveNav(target || 'home');
	if (target === 'photography') loadFlickrFeed('#photo-gallery');
}

function loadFlickrFeed(targetSelector = '#photo-gallery') {
	const $target = $(targetSelector);
	if (!$target.length) return;

	const N = 20; // expected number of photos in feed
	const gap = 8; // px gap between tiles

	function measureContainer() {
		const containerEl = $target[0];
		const containerWidth = (containerEl && containerEl.clientWidth) || Math.max(300, Math.floor(window.innerWidth * 0.6));
		const headerEl = document.querySelector('.header');
		const footerEl = document.querySelector('.footer');
		const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
		const footerH = footerEl ? footerEl.getBoundingClientRect().height : 0;
		const availableHeight = Math.max(200, window.innerHeight - headerH - footerH - 120);
		return { containerWidth, availableHeight };
	}

	function factorPairs(n) {
		const pairs = [];
		for (let c = 1; c <= n; c++) {
			if (n % c === 0) pairs.push({ cols: c, rows: n / c });
		}
		return pairs;
	}

	function chooseBestPair(containerW, availableH, pairs) {
		let best = null;
		let bestSize = 0;
		pairs.forEach(p => {
			const cols = p.cols;
			const rows = p.rows;
			const tileW = Math.floor((containerW - (cols - 1) * gap) / cols);
			const tileH = Math.floor((availableH - (rows - 1) * gap) / rows);
			const tileSize = Math.min(tileW, tileH);
			if (tileSize > bestSize) {
				bestSize = tileSize;
				best = { cols, rows, tileSize };
			}
		});
		return best;
	}

	function renderGrid(items) {
		const { containerWidth, availableHeight } = measureContainer();
		const pairs = factorPairs(N);
		const best = chooseBestPair(containerWidth, availableHeight, pairs) || { cols: 4, rows: 5, tileSize: 150 };

		const cols = best.cols;
		const rows = best.rows;
		const tileSize = Math.max(40, Math.floor(best.tileSize));

		$target.empty();
		$target.css({ display: 'grid', 'grid-template-columns': `repeat(${cols}, ${tileSize}px)`, 'grid-auto-rows': `${tileSize}px`, gap: `${gap}px` });

		const count = Math.min(items.length, N);
		for (let i = 0; i < count; i++) {
			const it = items[i];
			const thumb_link = it.media.m;
			const photo_link = thumb_link.replace('_m', '_b');
			const link = $('<a>').addClass('photo-link').attr({ href: photo_link, 'data-lightbox': 'Photos', title: it.title, target: '_blank' });
			const thumbnail = $('<img>').addClass('photo-thumb').attr('src', it.media.m).attr('alt', it.title || '');
			link.append(thumbnail);
			$target.append(link);
		}

		if (items.length < N) {
			for (let i = items.length; i < N; i++) {
				const placeholder = $('<div>').addClass('photo-placeholder').css({ width: `${tileSize}px`, height: `${tileSize}px`, background: '#f3f3f3' });
				$target.append(placeholder);
			}
		}
	}

	if (window._flickrCachedItems && Array.isArray(window._flickrCachedItems) && window._flickrCachedItems.length) {
		renderGrid(window._flickrCachedItems);
		return;
	}

	$.ajax({
		url: 'https://www.flickr.com/services/feeds/photos_public.gne?id=130574536@N07&format=json',
		type: 'GET',
		dataType: 'jsonp',
		jsonpCallback: 'jsonFlickrFeed',
		success: function(result) {
			const items = result.items || [];
			window._flickrCachedItems = items.slice(0, N);
			renderGrid(window._flickrCachedItems);

			if (window._flickrResizeHandler) window.removeEventListener('resize', window._flickrResizeHandler);
			window._flickrResizeHandler = function() {
				clearTimeout(window._flickrResizeTimer);
				window._flickrResizeTimer = setTimeout(function() {
					renderGrid(window._flickrCachedItems);
				}, 200);
			};
			window.addEventListener('resize', window._flickrResizeHandler);
		},
		error: function(xhr, status, error) {
			console.log(xhr);
			$target.html('Result: ' + status + ' ' + error + ' ' + xhr.status + ' ' + xhr.statusText);
		}
	});
}

document.addEventListener('DOMContentLoaded', init, false)