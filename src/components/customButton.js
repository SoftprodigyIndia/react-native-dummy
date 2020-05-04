import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity
            onPress={this.props.onpress}
                style={[styles.container,this.props.containerStyle]}
            >
                <Text
                    style={[styles.text,this.props.textStyle]}
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width:"50%",
        backgroundColor: "#00C7FC",
        alignItems: "center",
    },
    text:{
        fontSize: 15,
        color: "white",
    }

});