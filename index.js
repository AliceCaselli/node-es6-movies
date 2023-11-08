// Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni.
// BONUS:
// Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99


// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv)
let moviesAndTv = [
    {
        title: "Friends",
        year: 1994,
        genre: "sitcom",
        rating: 9,
        type: "tv",
        seasons: 8
    },
    {
        title: "Eurovision Song Contest - La storia dei Fire Saga",
        year: 2020,
        genre: "comedy",
        rating: 10,
        type: "movie"
    },
    {
        title: "IT",
        year: 2017,
        genre: "horror",
        rating: 7,
        type: "movie"
    },
    {
        title: "Le streghe di Salem",
        year: 2000,
        genre: "romance",
        rating: 8,
        type: "movie"
    },
    {
        title: "Le winx",
        year: 2021,
        genre: "drama",
        rating: 7,
        type: "tv",
        seasons: 2
    },
    {
        title: "Alice in Borderland",
        year: 2022,
        genre: "fantasy",
        rating: 9.5,
        type: "tv",
        seasons: 3
    },
    {
        title: "Aladdin",
        year: 1992,
        genre: "fantasy",
        rating: 9.5,
        type: "movie",
    },
    {
        title: "Scary Movie",
        year: 2003,
        genre: "horror",
        rating: 5,
        type: "movie",
    },
    {
        title: "Big Bang Theory",
        year: 2005,
        genre: "sitcom",
        rating: 6,
        type: "tv",
        seasons: 8
    },
];

// Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie {


    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }


    // Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

//istanza movie
const film = new Movie("blabla", 2000, "drama", 3, "movie");
console.log(film.toString());

// Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
class TVSeries extends Movie {


    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }


    // Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
}

//istanza tv
const serie = new TVSeries("blabla", 2000, "drama", 3, "tv", 5);
console.log(serie.toString());

// Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
let sortMovieAndTv = moviesAndTv.map(function (element) {
    if (element.type == "movie") {
        return new Movie(element.title, element.year, element.genre, element.rating, element.type);
    } else {
        return new TVSeries(element.title, element.year, element.genre, element.rating, element.type, element.seasons)
    }
});
console.log(sortMovieAndTv);

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.
function mediaRatings(array, genre) {
    let sum = 0;
    let count = 0;

    array.forEach(element => {
        if (genre == element.genre) {
            sum += element.rating;
            count++;
        }
    });

    return sum / count;
}
console.log(mediaRatings(sortMovieAndTv, "horror"));

// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
function genreList(array) {

    let allGenres = [];

    array.forEach(element => {
        if (!allGenres.includes(element.genre)) {
            allGenres.push(element.genre);
        }
    })

    return allGenres;
}

console.log(genreList(sortMovieAndTv));

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
function genreFilter(array, genre) {
    // let filteredGenre = [];

    // array.forEach(element => {
    //     if (element.genre == genre) {
    //         filteredGenre.push(element.toString());
    //     }
    // })

    // return filteredGenre;


    let filteredType = array.filter(element => element.type == "movie");
    let filteredGenre = [];

    filteredType.forEach(element => {
        if (element.genre == genre) {
            filteredGenre.push(element.toString());
        }
    })

    return filteredGenre;
}
console.log(genreFilter(sortMovieAndTv, "horror"));