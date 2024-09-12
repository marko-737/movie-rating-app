import { useState, useRef, useEffect } from "react";
import { Button, Loader } from "semantic-ui-react";
import { ColumnDisplay } from "./column-display";
import { fetchMovies, fetchTvShows } from "./query";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvShows",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const [pageMovies, setPageMovies] = useState<number>(1);
  const [pageTvShows, setPageTvShows] = useState<number>(1);
  const topRef = useRef<HTMLDivElement>(null);

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies", pageMovies],
    queryFn: () => fetchMovies(pageMovies),
    placeholderData: keepPreviousData,
  });

  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows", pageTvShows],
    queryFn: () => fetchTvShows(pageTvShows),
    placeholderData: keepPreviousData,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }

  const handleNextPageMovies = () => {
    setPageMovies((prevPage) => prevPage + 1);
    topRef.current?.focus();
  };

  const handlePreviousPageMovies = () => {
    if (pageMovies > 1) {
      setPageMovies((prevPage) => prevPage - 1);
    }
  };

  const handleNextPageTvShows = () => {
    setPageTvShows((prevPage) => prevPage + 1);
  };

  const handlePreviousPageTvShows = () => {
    if (pageTvShows > 1) {
      setPageTvShows((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    topRef.current?.focus();
  }, [pageMovies, pageTvShows]);

  if (isLoadingMovies || isLoadingTvShows) {
    return <Loader size="large" active></Loader>;
  }

  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <div ref={topRef} tabIndex={-1}></div>
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          Tv Shows
        </Button>
      </Button.Group>

      {isLoadingMovies || isLoadingTvShows ? (
        <Loader active></Loader>
      ) : (
        <div style={{ marginTop: 20 }}>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay
              data={movieData.results}
              displayType={DisplayType.Movies}
            />
          ) : (
            <ColumnDisplay
              data={tvShowData.results}
              displayType={DisplayType.TvShows}
            />
          )}
        </div>
      )}

      <Button
        color="blue"
        size="large"
        onClick={
          displayType === DisplayType.Movies
            ? handlePreviousPageMovies
            : handlePreviousPageTvShows
        }
      >
        Previous Page
      </Button>
      <Button
        color="blue"
        size="large"
        onClick={
          displayType === DisplayType.Movies
            ? handleNextPageMovies
            : handleNextPageTvShows
        }
      >
        Next Page
      </Button>
    </div>
  );
};
