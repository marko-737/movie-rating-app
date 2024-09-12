export const fetchRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRjNmNlZGYwNzRhZmI1MWQ5OGFkZGY3MWY5YzZiNyIsIm5iZiI6MTcyNTk2MjA5MC42MjU3MTMsInN1YiI6IjY2ZTAwZWE0MDAwMDAwMDAwMGU4ZDVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Qyz9YWcQbdGgx7PwLKIi_mqvU6QOyCKnH4KRZkHcA4",
      },
    }
  );

  return res.json();
};

export const fetchRatedTvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRjNmNlZGYwNzRhZmI1MWQ5OGFkZGY3MWY5YzZiNyIsIm5iZiI6MTcyNTk2MjA5MC42MjU3MTMsInN1YiI6IjY2ZTAwZWE0MDAwMDAwMDAwMGU4ZDVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Qyz9YWcQbdGgx7PwLKIi_mqvU6QOyCKnH4KRZkHcA4",
      },
    }
  );

  return res.json();
};
