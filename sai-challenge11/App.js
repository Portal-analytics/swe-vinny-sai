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
import Home from "./Home";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1EAAF1"
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <View>
          <View style={styles.nav}>
            <Link to="/Profile" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Image
                source={require("./profile.png")}
                style={{ width: 20, height: 20 }}
              />

            </Link>
            <Link to="/Home" underlayColor="#f0f4f7 " style={styles.navItem}>
              <Image
                source={require("./message.png")}
                style={{ width: 30, height: 30 }}
              />
            </Link>
            <Link to="/settings" style={styles.navItem}>
              <Image
                source={require("./icon1.png")}
                style={{ width: 20, height: 20 }}
              />
            </Link>
          </View>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/Profile" component={Profile} />
        </View>
      </NativeRouter>
    );
  }
}
