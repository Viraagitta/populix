import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Button } from "react-native";

export default function ButtonList({ button }) {
  // console.log(movies.popularity, "<<card");
  const navigation = useNavigation();
  return (
    <View style={styles.fixToText}>
      <Button
        onPress={() => {
          navigation.navigate("Movie List", {
            id: button,
          });
        }}
        title={`LIST ${button}`}
        color="#008080"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 15,
  },
});
