function Actor(){
// Pour vider la page 
	var myNode = document.getElementById("root");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);	
	}

	var request = new XMLHttpRequest();

	let url = 'https://api.themoviedb.org/3/trending/person/day?api_key=fc125704cdc7f352a8da3dd95aaf4477';

	request.open('GET', url, true); 
	request.onload = function () {
	
  		var data = JSON.parse(this.response);
   		const app = document.getElementById('root');
   		const container = document.createElement('div');
		container.setAttribute('class', 'container');
		app.appendChild(container);
	
		for (var i = 0; i < 10; i++) {
			person = data.results[i];
  		  
		  	const card = document.createElement('div');
		  	card.setAttribute('class', 'card');

		  	const h1 = document.createElement('h1');
		  	h1.textContent = person.name;

		  	container.appendChild(card);

		  	card.appendChild(h1);
		}
	}
	request.send();
}


function Movie(){
 
	var myNode = document.getElementById("root");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);	
	}

	var request = new XMLHttpRequest();

	let url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=fc125704cdc7f352a8da3dd95aaf4477';

	request.open('GET', url, true); 
	request.onload = function () {
	
  		var data = JSON.parse(this.response);
   		const app = document.getElementById('root');
   		const container = document.createElement('div');
		container.setAttribute('class', 'container');
		app.appendChild(container);

		for (var i = 0; i < 10; i++) {
			movie = data.results[i];

		  	const card = document.createElement('div');
		  	card.setAttribute('class', 'card');

		  	const h1 = document.createElement('h1');
		  	h1.textContent = movie.original_title;

		  	const h2 = document.createElement('h2');
		  	h2.textContent = `release date : ` + movie.release_date;

		  	const p = document.createElement('p');
		  	movie.overview = movie.overview.substring(0, 400);
		  	p.textContent = `${movie.overview}...`;

		  	container.appendChild(card);

		  	card.appendChild(h1);
		  	card.appendChild(h2);
		  	card.appendChild(p);
		}
	}
		request.send();
}

function TV(){

	var myNode = document.getElementById("root");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);	
	}

	var request = new XMLHttpRequest();

	let url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=fc125704cdc7f352a8da3dd95aaf4477';

	request.open('GET', url, true); 
	request.onload = function () {
	
  		var data = JSON.parse(this.response);
   		const app = document.getElementById('root');
   		const container = document.createElement('div');
		container.setAttribute('class', 'container');
		app.appendChild(container);
	
		for (var i = 0; i < 10; i++) {
			tv = data.results[i];
  		  
		  	const card = document.createElement('div');
		  	card.setAttribute('class', 'card');

		  	const h1 = document.createElement('h1');
		  	h1.textContent = tv.name;

		  	const h2 = document.createElement('h2');
		  	h2.textContent = `first air date : ` + tv.first_air_date;

		  	const p = document.createElement('p');
		  	tv.overview = tv.overview.substring(0, 400);
		  	p.textContent = `${tv.overview}...`;

		  	container.appendChild(card);

		  	card.appendChild(h1);
		  	card.appendChild(h2);
		  	card.appendChild(p);	  
		}
	}
		request.send();
}
