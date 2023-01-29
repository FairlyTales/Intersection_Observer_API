let nextPage = 2;

const loadPosts = (page = 1) => {
	fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${ page }`)
		.then((res) => res.json())
		.then((cards) => {
			// create markup for each downloaded card
			cards.forEach((card) => {
				const post = document.createElement("div");

				post.className = "card";
				post.innerHTML = `
          <h3>${ card.id } ${ card.title }</h3>
          <p>${ card.body }</p>
        `;

				document.body.append(post);
			});

			const lastCard = document.querySelector(".card:last-child");

			// add observer for the last card element
			if (lastCard) {
				observer.observe(lastCard);
			}
		})
		.catch(console.error);
}

const callback = ([ entry ], observer) => {
	if (entry.isIntersecting) {
		// check if we are at the last element
		if (entry.isIntersecting) {
			// stop further observation of this element because it won't be the last after we download next batch of elements
			observer.unobserve(entry.target);

			// download new batch of elements
			loadPosts(nextPage++);
		}
	}
}

const options = {
	threshold: 0.5,
}

const observer = new IntersectionObserver(callback, options)

// initial load
loadPosts(1);
