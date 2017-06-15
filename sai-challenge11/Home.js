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
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDsQIjPtaajliF0g5tV4D6UD4pX82kwomc",
  authDomain: "chat-app-6d45f.firebaseapp.com",
  databaseURL: "https://chat-app-6d45f.firebaseio.com",
  projectId: "chat-app-6d45f",
  storageBucket: "chat-app-6d45f.appspot.com",
  messagingSenderId: "790178067790"
};
firebase.initializeApp(config);

let readData = firebase.database().ref();

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Sai",
      text: "",
      // text_list: [],
      // time_list: [],
      message_list: []
    };
  }

  handleTextChange(text) {
    this.setState({
      text: text
    });
  }
  handleSubmit() {
    let new_messages = this.state.message_list;
    let new_message = {
      message: this.state.text,
      date: new Date().toTimeString().slice(0, 5),
      user: this.state.user
    };
    new_messages.unshift(new_message);
    this.setState({
      message_list: new_messages,
      text: ""
    });

    readData.set({
      message_list: this.state.message_list
    });
  }
  componentWillMount() {
    readData.on("value", snapshot => {
      if (snapshot.val() != null) {
        this.setState({
          text: "",
          message_list: snapshot.val().message_list
        });
      }
    });
  }

  render() {
    let list;
    if (this.state.message_list != null) {
      list = this.state.message_list.map(message => {
        if (message.user == this.state.user) {
          return (
            <View>
              <Text style={styles.myMessage}>{message.message}</Text>
              <Text style={styles.myMessageUser}>
                {message.date}
              </Text>
            </View>
          );
        } else {
          return (
            <View>
              <Text style={styles.otherMessage}>{message.message}</Text>
              <Text style={styles.otherMessageUser}>
                {message.user} {" "}{message.date}
              </Text>
            </View>
          );
        }
      });
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: "orange",
            borderWidth: 5,
            marginTop: 10,
            borderRadius: 15,
            textAlign: "center"
          }}
          onChangeText={text => this.handleTextChange(text)}
          onSubmitEditing={() => this.handleSubmit()}
          value={this.state.text}
          placeholder={"New Message"}
        />
        <ScrollView style={styles.messages}>
          {list}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1EAAF1"
  },
  navItem: {
    flex: 0,
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  myMessage: {
    fontSize: 20,
    textAlign: "right",
    color: "#6495ed"
  },
  myMessageUser: {
    fontSize: 13,
    textAlign: "right"
  },
  otherMessageUser: {
    fontSize: 13,
    textAlign: "left"
  },
  otherMessage: {
    fontSize: 20,
    textAlign: "left",
    color: "#8b008b"
  },
  messages: {
    marginTop: 25,
    padding: 10
  },
  bubble: {
    borderWidth: 3
  }
});
