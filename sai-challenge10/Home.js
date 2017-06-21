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
import TimeStamp from "react-timestamp";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.nav}>
          <Link to="/settings" style={styles.navItem}>
            <Image
              source={require("./icon1.png")}
              style={{ width: 20, height: 20 }}
            />
          </Link>
          <Link to="/Profile" underlayColor="#f0f4f7 " style={styles.navItem}>
            <Text>Profile</Text>
          </Link>
          <Route exact path="/App" component={App} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/Profile" component={Profile} />
        </View>
      </NativeRouter>
    );
  }
}
