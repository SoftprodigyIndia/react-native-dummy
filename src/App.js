/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, Platform} from 'react-native';
import {Toolbar, Subheader, Button} from 'react-native-material-ui';
import * as Colors from './colors';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
const {OS} = Platform;
function App() {
  const [check, setCheck] = React.useState(false);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {};

    bootstrapAsync();
  }, []);

  return (
    <View style={{flex: 1, marginTop: 20}}>
      <Toolbar
        centerElement="Privacy"
        style={{
          container: styles.toolBarContainer,
          titleText: styles.toolBarText,
        }}
      />

      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            height: '100%',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}>
          <Subheader
            text="Privacy Policy"
            style={{text: styles.subHeaderText}}
          />

          <View style={styles.detailContainer}>
            <Image
              style={{width: 150, height: 150}}
              source={require('./drawable/privacy.png')}
            />
            <Text style={styles.detailText}>
              we never use or share personal information without you permission
            </Text>
            <Text style={styles.detailText}>
              we never use or share personal information without you permission
            </Text>
          </View>
        </View>

        <View style={styles.bottomBarContainer}>
          <View style={styles.border} />

          <View style={styles.chkBoxText}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                style={{}}
                disabled={false}
                onClick={() => {
                  check ? setCheck(false) : setCheck(true);
                }}
                isChecked={check}
                // onValueChange={value => setCheck(value)}
              />
              <Text style={{width: '90%', marginLeft: 10}}>
                I agree to the
                <Text style={styles.blueText}> Terms and Conditions</Text>,
                <Text style={styles.blueText}> Privacy Policy</Text>, and
                <Text style={styles.blueText}> Medical Disclaimer</Text>
              </Text>
            </View>
            <View>
              <Button
                style={{
                  container: [
                    styles.signUpContainer,
                    check ? {opacity: 1} : {opacity: 0.7},
                  ],
                  text: {color: 'white'},
                }}
                text="SIGN UP"
                onPress={() =>
                  check ? alert('Sign up') : alert('Please select terms')
                }
              />
              {OS == 'ios' ? (
                <Text
                  style={{
                    color: 'white',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 33,
                  }}>
                  SIGN UP
                </Text>
              ) : (
                <></>
              )}
            </View>
            <View>
              <Button
                style={{
                  container: [
                    styles.loginContainer,
                    check ? {opacity: 1} : {opacity: 0.5},
                  ],
                  text: {color: '#00C7FC'},
                }}
                text="LOG IN"
                onPress={() =>
                  check ? alert('Log in') : alert('Please select terms')
                }
              />
              {OS == 'ios' ? (
                <Text
                  style={{
                    color: '#00C7FC',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 25,
                  }}>
                  LOG IN
                </Text>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  toolBarText: {color: '#000', fontSize: 15, textAlign: 'center', width: '95%'},
  toolBarContainer: {backgroundColor: Colors.white},
  subHeaderText: {color: '#00C7FC', fontSize: 20},
  detailContainer: {width: '100%', marginTop: 60, alignItems: 'center'},
  detailText: {textAlign: 'center', marginTop: 30, width: '90%'},
  bottomBarContainer: {
    height: 10,
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1,
  },
  border: {height: 2, width: '100%', backgroundColor: 'gray', opacity: 0.3},
  chkBoxText: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  blueText: {color: '#00C7FC'},
  signUpContainer: {
    backgroundColor: '#00C7FC',
    borderRadius: 25,
    padding: 25,
    marginTop: 20,
  },
  loginContainer: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    padding: 25,
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#00C7FC',
  },
});

export default App;
