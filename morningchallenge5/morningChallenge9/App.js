import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Settings from "./Settings";
import Profile from "./Profile";
import Home from "./Home";
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/settings" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Text>Settings</Text>
            </Link>
            <Link to="/Profile" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Text>Profile</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/Profile" component={Profile} />
        </View>
      </NativeRouter>
    );
  }
}

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