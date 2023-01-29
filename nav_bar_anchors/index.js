const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".menu-item");

const callback = (entries) => {
	entries.forEach((entry) => {
		// if user sees more than 50% of the target
		if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
			const activeId = entry.target.id;
			const activeLink = document.querySelector(
				`.menu-item[href="#${activeId}"]`
			);

			// remove all active classes
			links.forEach((link) => link.classList.remove("active"));

			// add new active class to nav button which section is currently being observed
			if (activeLink) {
				activeLink.classList.add("active");
			}
		}
	})
}

const options = {
	threshold: [0.2, 0.5, 0.8],
}

const imageObserver = new IntersectionObserver(callback, options);

sections.forEach((section) => imageObserver.observe(section));
