import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";

export class Header extends Component {
    render() {
        return (
            <View
                style={styles.headerContainer}
            >
                <Text
                    style={styles.headerText}
                >
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "#00C7FC",
        alignItems: "center",
        paddingLeft:20
    },
    headerText:{
        fontSize: 15,
        color: "white",
    }

});