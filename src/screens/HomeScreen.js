import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { getFetchList, getFetchMovie } from "../store/action";
import MovieCard from "../components/MovieCard";
import MovieList from "./MovieList";
const HomeScreen = ({ navigation, id }) => {
  const renderItem = ({ item }) => {
    return <MovieCard movies={item} />;
  };
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  // console.log(movies.popularity, "<<");
  useEffect(() => {
    dispatch(getFetchList());
  }, []);

  return (
    // <View style={styles.container}>
    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar style={"dark"} /> */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            style={styles.bars}
            source={{
              uri: "https://www.pantheonparfum.com/wp-content/uploads/2021/03/ManuHambFFFFFF.png",
            }}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_-AZyRRKHjPmJ0Kw6flXkQ4THX1GhymGEWCyySMHoI4sXdw6tqglyRWRAZMKgTeN3lc&usqp=CAU",
          }}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container} />
        <Image
          style={styles.banner}
          source={{
            uri: "https://www.motionpictures.org/wp-content/uploads/2018/04/DaCUsjTWsAI5BPW.jpg",
          }}
        />
        <MovieList id={1} />
        {/* <DetailPage /> */}
        {/* </View> */}
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          style={styles.footerBar}
          name="home-outline"
          size={24}
          color="white"
        />

        <Image
          style={styles.footer}
          source={{
            uri: "-",
          }}
        />
      </View>
    </SafeAreaView>
    // </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09273C",
  },
  loading: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "white",
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
    width: 400,
    height: 200,
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
