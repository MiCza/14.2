var movies = [
{	
	id: 1,
	title: 'Harry Potter',
	desc: 'Film o czarodzieju',
	year: 2001,
	director:  'Chris Columbus, Alfonso Cuarón, Mike Newell',
	picture: 'https://www.cosmopolitan.pl/u/ic/W1/u/a/17/07/harry-potter-powraca-dostaniemy-az-dwie-nowe-ksiazki_5970c9e7.jpeg',
},
{	
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	year: 1994,
	director: ' Roger Allers, Rob Minkoff',
	picture: 'https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/disney-adventure-lion-king-wall-mural-6651-p.jpg'
},
{	
	id: 3,
	title: 'Scarface',
	desc: 'Kubański emigrant Tony Montana opuszcza ojczyznę i przybywa do Miami.',
	year: 1983,
	director: 'Brian De Palma',
	picture: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/04/Scarface-Al-Pacino-e1461953185446-800x400.jpg'
}
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.year),
      React.createElement('p', {}, movie.director),
      React.createElement('img',{src: movie.picture} )
    );
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów:'),
		React.createElement('ul', {}, moviesElements)
	);
  ReactDOM.render(element, document.getElementById('app'));