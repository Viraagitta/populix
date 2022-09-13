import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View, Text } from "react-native";

export default function MovieCard({ movies }) {
  // console.log(movies.popularity, "<<card");
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09273C",
  },
  text: {
    fontSize: 42,
    color: "white",
  },
  logo: {
    margin: 4,
    borderRadius: 12,
    width: 98,
    height: 150,
  },
});
