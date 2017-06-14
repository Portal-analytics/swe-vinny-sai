import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Settings from "./Settings";
import Profile from "./Profile";
import App from "./App";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.nav}>
          <Route exact path="/" component={App} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/Profile" component={Profile} />
        </View>
      </NativeRouter>
    );
  }
}
