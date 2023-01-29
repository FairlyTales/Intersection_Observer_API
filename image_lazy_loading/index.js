const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// set src from data-src to download image
			entry.target.src = entry.target.dataset.src;

			// prevent further observation for already downloaded image
			observer.unobserve(entry.target);

			console.log(`Loaded image ${entry.target.src}`);
		}
	})
}

const options = {
	rootMargin: '50px',
}

const imageObserver = new IntersectionObserver(callback, options);

document
	.querySelectorAll("img")
	.forEach((image) => imageObserver.observe(image));

