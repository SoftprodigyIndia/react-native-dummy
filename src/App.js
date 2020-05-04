/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';
import { Header, CustomButton } from "./components"
import * as Colors from "./colors"
import { CheckBox } from 'react-native';

function App() {
    const [text, setText] = React.useState("")
    const [check, setCheck] = React.useState(true)
    return (
        <ScrollView style={styles.container}>

            <Header title={"Home"} />
            <View  >
                <View style={styles.body}>
                    <CustomButton text={"button"} containerStyle={styles.btnContainer} onpress={() => alert(text)} />
                    <TextInput style={styles.input}
                        numberOfLines={10}
                        underlineColorAndroid="transparent"
                        multiline={true}
                        placeholder="Text"
                        textAlignVertical="top"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={(text) => setText(text)} />
                    <CheckBox
                        value={check}
                        disabled={false}
                        onValueChange={(value) => setCheck(value)}
                    />
                </View>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    },
    body: {
        height: 400,
        width: "50%",
        marginTop: 40,
        marginLeft: 60,
        justifyContent: "space-between"
    },
    btnContainer: {
        backgroundColor: "green",
        padding: 10,
        width: "100%",
        justifyContent: "center"
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default App;
