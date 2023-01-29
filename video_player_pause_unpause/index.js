const callback = ([ entry ]) => {
	const video = entry.target;

	// if video is not in the viewport or almost not in the view we pause it
	if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
		video.pause();
	} else { // if video is in the viewport we launch it
		video.play();
	}
}

const options = {
	// specifying thresholds for triggering observer
	threshold: [0.2, 0.8],
}

const imageObserver = new IntersectionObserver(callback, options);

document
	.querySelectorAll("video")
	.forEach((video) => imageObserver.observe(video));
