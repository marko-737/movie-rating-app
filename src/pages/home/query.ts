export const fetchMovies = async (page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRjNmNlZGYwNzRhZmI1MWQ5OGFkZGY3MWY5YzZiNyIsIm5iZiI6MTcyNTk2MjA5MC42MjU3MTMsInN1YiI6IjY2ZTAwZWE0MDAwMDAwMDAwMGU4ZDVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Qyz9YWcQbdGgx7PwLKIi_mqvU6QOyCKnH4KRZkHcA4",
      },
    }
  );

  return res.json();
};

export const fetchTvShows = async (page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRjNmNlZGYwNzRhZmI1MWQ5OGFkZGY3MWY5YzZiNyIsIm5iZiI6MTcyNTk2MjA5MC42MjU3MTMsInN1YiI6IjY2ZTAwZWE0MDAwMDAwMDAwMGU4ZDVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Qyz9YWcQbdGgx7PwLKIi_mqvU6QOyCKnH4KRZkHcA4",
      },
    }
  );

  return res.json();
};
