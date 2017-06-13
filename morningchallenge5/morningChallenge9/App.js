import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Settings from "./Settings";
import Profile from "./Profile";
import Home from "./Home";
import SideMenu from "react-native-side-menu"
import Menu from "react-native-side-menu"
export default class App extends React.Component {
  render() {
    const menu = <Menu navigator={navigator} />
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/settings" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Image source={require('./icon1.png')} style={{ width: 20, height: 20 }} />
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
  },

});