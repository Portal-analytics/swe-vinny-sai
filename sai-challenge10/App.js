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
import TimeStamp from "react-timestamp";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      text_list: [],
      time_list: []
    };
  }

  handleTextChange(text) {
    this.setState({
      text: text
    });
  }
  handleSubmit() {
    let new_list = this.state.text_list;
    new_list.push(this.state.text);
    let new_time_list = this.state.time_list;
    new_time_list.push(new Date().toTimeString().slice(0, 5));
    this.setState({
      text_list: new_list,
      time_list: new_time_list
    });
  }
  render() {
    let list;
    if (this.state.text_list != null) {
      list = this.state.text_list.map((text, index) => {
        return (
          <View>
            <Text>{text} {"  "} {this.state.time_list[index]}</Text>
          </View>
        );
      });
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.handleTextChange(text)}
          onSubmitEditing={() => this.handleSubmit()}
          value={this.state.text}
        />
        <ScrollView>
          {list}
        </ScrollView>
      </View>
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
