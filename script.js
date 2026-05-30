const movies = [
	{
		title: "The Avengers",
		imageSrc: "images/avengers.jpg",
		imageAlt: "The Avengers Movie Poster",
		date: "2012",
		ages: "PG-13",
		genre: "Action",
		stars: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
		description: "Earth's mightiest heroes must come together..."
	},
	{
		title: "Interstellar",
		imageSrc: "images/interstellar.jpg",
		imageAlt: "Interstellar Movie Poster",
		date: "2014",
		ages: "PG-13",
		genre: "Sci-Fi",
		stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
		description: "A team of explorers travel through a wormhole..."
	}
	// Add more movies as needed
];

const movieList = document.querySelector('#movie-list');

movies.forEach(movie => {
	const article = document.createElement('article');
	article.classList.add('movie');
	const movieHTML = `
		<img src="${movie.imageSrc}" alt="${movie.imageAlt}">
		<h2>${movie.title}</h2>
		<p><strong>Release:</strong> ${movie.date}</p>
		<p><strong>Rated:</strong> ${movie.ages}</p>
		<p><strong>Genre:</strong> ${movie.genre}</p>
		<p><strong>Stars:</strong> ${movie.stars.length}</p>
		<p>${movie.stars.join(", ")}</p>
		<p>${movie.description}</p>
	`;
	article.innerHTML = movieHTML;
	movieList.appendChild(article);
});
