import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";

import firebase from "firebase";

export default class Profile extends Component {

    toggleSwitch() {
        const previous_state = this.state.isEnabled;
        const theme = !this.state.isEnabled ? "dark" : "light";
        var updates = {};
        updates[
          "/users/" + firebase.auth().currentUser.uid + "/current_theme"
        ] = theme;
        firebase
          .database()
          .ref()
          .update(updates);
        this.setState({ isEnabled: !previous_state, light_theme: previous_state });
      }

    render() {
        if (!this.state.fontsloaded) {
            return <AppLoading />;
        } else {
            return (
                <View
                    style={{
                        fles: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <button
                        title="Sign In With Google"
                        onPress={() => this.signInWithGoogleAsync()}
                    ></button>
                </View>
            )
        }
    }
}

  