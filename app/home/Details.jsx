import { View } from "react-native";
import React from "react";
import Header from "../post/components/Header";
import { Text, DataTable, Card } from "react-native-paper";
const Details = ({ item }) => {
  return (
    <View>
      <Header title={item.Category} />
      <Card
        style={{
          width: "90%",
          margin: 10,
          alignSelf: "center",
          paddingBottom: 10,
        }}
      >
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Dessert</DataTable.Title>
            <DataTable.Title numeric>Calories</DataTable.Title>
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
    </View>
  );
};

export default Details;
