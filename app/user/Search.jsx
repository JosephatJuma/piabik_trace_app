import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Appbar, Searchbar, Banner, List } from "react-native-paper";
import { Divider, Surface } from "react-native-paper";
import axios from "axios";

const Search = () => {
  const navigation = useNavigation();
  const [results, setResults] = React.useState([]);
  const [err, setErr] = React.useState("");
  const [searching, setSearching] = React.useState(false);
  const handleSearch = async (value) => {
    if (value.length > 0) {
      setSearching(true);
      await axios
        .get(`https://piabik.onrender.com/v1/api/search/${value}`)
        .then((response) => {
          if (response.data.status === false) {
            setErr(response.data.message);
            setResults([]);
          } else {
            setResults(response.data);
            setErr("");
          }
        })
        .catch((err) => {
          setErr("Encoutered an error");
        });
      setSearching(false);
    }
  };

  return (
    <View>
      <Appbar.Header style={{ padding: 10 }}>
        <Searchbar
          mode="bar"
          icon={"arrow-left"}
          onIconPress={() => navigation.goBack()}
          autoFocus={true}
          placeholder="Enter something like NIN"
          onChangeText={(value) => handleSearch(value)}
          loading={searching}
        />
      </Appbar.Header>

      {!err ? (
        <ScrollView>
          {results.length > 0 &&
            results.map((result, index) => {
              return (
                <Surface key={index} elevation={1}>
                  <List.Item
                    title={result.UniqueID}
                    description={result.Category}
                    right={() => <Text>{result.Type}</Text>}
                    left={() => <List.Icon icon="gamepad-circle" />}
                    onPress={() =>
                      navigation.navigate("Details", { item: result })
                    }
                  />
                  <Divider />
                </Surface>
              );
            })}
        </ScrollView>
      ) : (
        <Banner
          visible={true}
          actions={[{ label: "Okay", onPress: () => setErr("") }]}
          icon={"alert"}
          style={{ alignSelf: "center", width: "98%", margin: "auto" }}
        >
          <Text
            style={{ fontSize: 20, alignSelf: "center", fontWeight: "700" }}
          >
            {err}
          </Text>
        </Banner>
      )}
    </View>
  );
};

export default Search;
