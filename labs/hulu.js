let Hulu = {
  id: 1,
  movies: {
    movie_titles: [
      {
        title: "Dune",
        genre: [
          "sci-fi",
          "political",
          "action",
          "adventure",
          "drama",
          "fantasy",
          "religious",
          "environmental",
          "colonialism",
          "exploitation",
          "romance",
          "conspiracy",
          "military",
          "espionage",
        ],
        rating: "8/10 IMDb",
        run_time_minutes: 155,
        year_released: 2021,
      },
      {
        title: "Serenity",
        genre: [
          "sci-fi",
          "space western",
          "action",
          "adventure",
          "drama",
          "political",
          "thriller",
          "romance",
          "colonialism",
          "exploitation",
          "conspiracy",
          "neurodivergence",
          "military",
          "comedy",
        ],
        rating: "7.8/10 IMDb",
        run_time_minutes: 119,
        year_released: 2005,
      },
    ],
  },

  shows: {
    title: "Battlestar Galactica",
    number_of_seasons: 7,
    seasons: {
      0: {
        number_of_episodes: 2,
        episodes: [
          {
            title: "Part 1",
            air_date: "12/8/2003",
          },
          {
            title: "Part 2",
            air_date: "12/9/2003",
          },
        ],
      },
      1: {
        number_of_episodes: 13,
        episodes: [
          {
            title: "33",
            air_date: "10/18/2004",
          },
          {
            title: "Water",
            air_date: "10/25/2004",
          },
        ],
      },
    },
  },
};

console.log(Hulu);

// After the hulu object has been created:

// write 3 console logs:

// 1- detail the array of movies
console.log(Hulu.movies.movie_titles);

// 2- show the title of the first show
console.log(Hulu.shows.title);

// 3- show the title of episode 1 of the second season of the first show.
console.log(Hulu.shows.seasons[1].episodes[0].title);
