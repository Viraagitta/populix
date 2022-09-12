// import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchList } from "../store/action";
const MovieList = ({ Navigation, id }) => {
  const renderItem = ({ item }) => {
    return <MovieCard movies={item} />;
  };
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const popular = movies.filter(
    (movie) => movie.popularity.toString().replace(".", "") >= 200000
  );

  const topRated = movies.filter(
    (movie) => movie.vote_count >= 15000 && movie.vote_average >= 7.4
  );
  useEffect(() => {
    dispatch(getFetchList(id));
  }, [id]);
  return (
    // <View style={styles.container}>
    <>
      <Text style={{ color: "white" }}>POPULAR MOVIE TMDB LIST {id}</Text>
      <FlatList
        horizontal
        data={popular}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ color: "white" }}>TOP RATED LIST {id}</Text>
      <FlatList
        horizontal
        data={topRated}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ color: "white", textAlign: "center" }}>
        ALL MOVIE LIST {id}
      </Text>
      <FlatList
        // horizontal
        numColumns={3}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default MovieList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexDirection: "row",

    // marginTop: 35,
    // padding: 5,
    // alignItems: "center",
    justifyContent: "center",
  },
});
