import { View } from "react-native";
import React from "react";
import Header from "../components/Header";
import {
  Text,
  TextInput,
  Button,
  Card,
  DataTable,
  IconButton,
  Snackbar,
  ProgressBar,
  Banner,
} from "react-native-paper";
import axios from "axios";

const FollowUp = () => {
  const [code, setCode] = React.useState("");
  const [item, setItem] = React.useState(null);
  const [showResults, setShowResults] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [err, setErr] = React.useState("");
  const [followingUp, setFoll] = React.useState(false);
  const handleSubmit = async () => {
    setFoll(true);
    setErr();
    await axios
      .get(`https://piabik.onrender.com/v1/api/followUp/${code}`)
      .then((response) => {
        if (response.data.status === false) setMessage(response.data.message);
        else setItem(response.data[0]);
        setShowResults(true);
      })
      .catch((err) => {
        setErr(err.message);
      });
    setFoll(false);
  };

  return (
    <>
      <Header title={"Follow Up"} />
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        {showResults ? (
          <>
            {item !== null ? (
              <Card>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Description</DataTable.Title>
                    <DataTable.Title numeric>Details</DataTable.Title>
                    <DataTable.Title numeric></DataTable.Title>
                  </DataTable.Header>

                  {Object.keys(item).map(
                    (key) =>
                      key !== "SecretCode" && (
                        <DataTable.Row
                          key={key}
                          style={key === "Status" ? { borderTopWidth: 1 } : {}}
                        >
                          <DataTable.Cell>
                            {key === "DatePosted" && "Date Posted"}
                            {key === "UniqueID" && "ID Number"}
                            {key === "Type" && "Type"}
                            {key === "FirstName" && "Poster's First Nane"}
                            {key === "LastName" && "Poster's Last Nane"}
                            {key === "Status" && "Status"}
                            {key === "Phone" && "Poster's Phone Number"}
                            {key === "Category" && "Category"}
                            {key === "Speciality" && "Speciality"}
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            {key === "DatePosted"
                              ? new Date(item[key]).toLocaleDateString()
                              : item[key]}
                          </DataTable.Cell>
                        </DataTable.Row>
                      )
                  )}
                </DataTable>
              </Card>
            ) : (
              <Banner
                visible={true}
                actions={[
                  { label: "Try Again", onPress: () => setShowResults(false) },
                  // { label: "Okay", onPress: () => setErr("") },
                ]}
                icon={"information-outline"}
                style={{
                  alignSelf: "center",
                  width: "96%",
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  {message}
                </Text>
              </Banner>
            )}
          </>
        ) : (
          <View
            style={{
              height: "50%",
              justifyContent: "space-evenly",
              width: "98%",
            }}
          >
            <TextInput
              mode="outlined"
              label="Enter Follow up code"
              style={{ alignSelf: "center", width: "96%" }}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(value) => setCode(value)}
              value={code}
            />
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ alignSelf: "center", width: "96%" }}
              disabled={code.length !== 4}
            >
              FOLLOW UP!
            </Button>
          </View>
        )}
      </View>
      <Snackbar
        visible={err}
        onDismiss={() => setErr("")}
        action={{
          label: "Again!",
          onPress: handleSubmit,
        }}
        duration={10000}
      >
        {err}
      </Snackbar>
      {followingUp && <ProgressBar indeterminate={true} />}
    </>
  );
};

export default FollowUp;
