import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { StatusBar } from "expo-status-bar";
import MovieCard from "../components/MovieCard";
import WebView from "react-native-webview";
import { useQuery } from "@apollo/client";
import CastCard from "../components/CastCard";
import Star from "react-native-star-view";
const MovieDetail = ({ route }) => {
  const { id } = route.params;
  // console.log(id, "id");
  const tailwind = useTailwind();
  const renderItem = ({ item }) => {
    return <MovieCard movies={item} />;
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ height: 200, backgroundColor: "black" }}>
          <WebView
            style={{ flex: 1.0 }}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: data.getMovieById.trailerUrl,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", textAlign: "left" }}>
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: data.getMovieById.imgUrl,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Text style={styles.label}>{data.getMovieById.title}</Text>
            <Text style={styles.labelMini}>{data.getMovieById.Genre.name}</Text>
            <Star score={data.getMovieById.rating} style={styles.starStyle} />
          </View>
        </View>
        <View style={{ flexDirection: "column", textAlign: "left" }}>
          <Text style={styles.labelDesc}>{data.getMovieById.synopsis}</Text>
          <ScrollView>
            <FlatList
              horizontal
              data={data.getMovieById.Casts}
              renderItem={rendered}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>

        <View>
          <Text style={{ color: "white", marginTop: 20 }}>More Like This</Text>
          {/* <MovieList id={data.getMovieById.Genre.id} /> */}
          <FlatList
            horizontal
            data={filtered}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    // textColor: "white",
    // flexDirection: 'row',
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  loading: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "black",
  },
  logo: {
    margin: 15,
    width: 80,
    height: 100,
    borderRadius: 12,
  },
  castImg: {
    marginTop: 10,
    width: 60,
    height: 60,
  },
  bars: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 18,
    width: 17,
    height: 30,
  },
  label: {
    color: "white",
    // alignSelf: "center",
    marginTop: 20,
    fontSize: 20,
  },
  labelMini: {
    color: "grey",
    textAlign: "left",
    marginTop: 5,
    fontSize: 12,
  },
  labelDesc: {
    color: "grey",
    textAlign: "justify",
    flexWrap: "wrap",
    fontSize: 13,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
});
