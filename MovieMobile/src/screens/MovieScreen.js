import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFetchList } from "../store/action";
import MovieCard from "../components/MovieCard";

const MovieScreen = ({ navigation, route }) => {
  const { id } = route.params;
  // const navigation = useNavigation();

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
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      {movies.length ? (
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={{ color: "white" }}>POPULAR MOVIE TMDB LIST {id}</Text>
            {popular.length ? (
              <FlatList
                horizontal
                data={popular}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Text style={{ color: "grey" }}>
                There's No Popular Movie on List {id}
              </Text>
            )}
            <Text style={{ color: "white" }}>TOP RATED LIST {id}</Text>
            {topRated.length ? (
              <FlatList
                horizontal
                data={topRated}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Text style={{ color: "grey" }}>
                There's No Top Rated Movie on List {id}
              </Text>
            )}
          </View>
          <Text style={{ color: "white", textAlign: "center" }}>
            ALL MOVIE LIST {id}
          </Text>
          <View style={styles.row}>
            {movies.map((movie) => {
              return <MovieCard movies={movie} key={movie.id} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <View>
          <Image
            style={styles.loading}
            source={{
              uri: `https://www.awashbank.com/wp-content/plugins/photo-gallery/images/spinner.gif`,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MovieScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09273C",
  },
  loading: {
    margin: 50,
    width: "80%",
    height: "60%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    width: 80,
    height: 40,
  },
  footer: {
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 112,
    width: 60,
    height: 40,
  },
  banner: {
    marginBottom: 20,
    alignSelf: "center",
    width: 320,
    height: 200,
    borderRadius: 20,
  },
  bars: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 18,
    width: 17,
    height: 30,
  },
  footerBar: {
    marginTop: 16,
    // marginBottom: 14,
    marginLeft: 18,
    width: 24,
    height: 30,
  },
  welcome: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
});
