import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import Map from "../components/Map";

import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "android" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        {/* <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text> */}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.png")}
            title="NurUddin Kawsar"
            subTitle="5 Listings"
          />
        </View>

        <View style={styles.message}>
          <ContactSellerForm listing={listing} />
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.mapContainer}>
          <Map />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  mapContainer: {
    paddingTop: 100,
    height: 200,
  },
  message: {
    marginTop:-10,

  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontWeight: "400",
    marginTop: -60,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
