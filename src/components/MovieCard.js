import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, StyleSheet, View, Text } from "react-native";

export default function MovieCard({ movies }) {
  // console.log(movies.popularity, "<<card");
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    // onPress={() => {
    //   navigation.navigate("MovieDetail", {
    //     id: movies.id,
    //     name: movies.title,
    //   });
    // }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09273C",
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // marginTop: 35,
    // padding: 5,
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 42,
    color: "white",
  },
  logo: {
    margin: 4,
    borderRadius: 12,
    width: 100,
    height: 150,
  },
});
