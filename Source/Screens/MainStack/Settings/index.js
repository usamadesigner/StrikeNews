import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
// import {shallowEqual, useSelector,connect} from 'react-redux';
import {Header2} from '../../../Components';
import { Auth } from 'aws-amplify';
// import { SignOut } from '../../../redux/Modules/auth/action.auth';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';


const Settings = ({SignOutFunc}) => {
 
  const [CoronaisEnabled, setIsCoronaEnabled] = React.useState(false);
  const [LatestisEnabled, setIsLatestEnabled] = React.useState(false);
  const [AnonomousisEnabled, setIsAnonomousEnabled] = React.useState(false);
  const [HideisEnabled, setIsHideEnabled] = React.useState(false);
  const toggleSwitch1 = () =>
    setIsCoronaEnabled(previousState => !previousState);
  const toggleSwitch2 = () =>
    setIsLatestEnabled(previousState => !previousState);
  const toggleSwitch3 = () =>
    setIsAnonomousEnabled(previousState => !previousState);
  const toggleSwitch4 = () => setIsHideEnabled(previousState => !previousState);
//  const [userData, setuserData] = React.useState('')
//   React.useEffect(() => {

//     const getCredentials = (async () => {
//       let data = await Auth.currentUserInfo();
//       console.log(data.attributes)
// setuserData(data.attributes);
//     })();
//     return () => {
//       getCredentials;
//     };
//   }, [userData]);
//   const SignoutUser = () => {
//     SignOutFunc();
// }

  return (
    <SafeAreaView style={styles.Container}>
    <ScrollView >
      <Header2 title="Settings" backButton={true}  />
      {/* { userData==={}? (
        <>
          <View style={styles.HeaderView}>
            <Text style={styles.HeaderText}>ACCOUNT</Text>
          </View>
          <Pressable
            style={styles.buttonView}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: false,
              radius: 300,
            }}>
            <View>
              <Text style={styles.BtnTitle}>Create a free SN Account </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.buttonView}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: false,
              radius: 300,
            }}>
            <View>
              <Text style={styles.BtnTitle}>Login to your SN Account </Text>
            </View>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.HeaderView}>
            <Text style={styles.HeaderText}>PROFILE</Text>
          </View>
          <Pressable
            style={styles.buttonView}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: false,
              radius: 300,
            }}>
            <View>
              <Text style={styles.BtnTitle}>{"👤 "+userData.name} </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.buttonView}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: false,
              radius: 300,
            }}>
            <View>
              <Text style={styles.BtnTitle}>{"📪 "+userData.email} </Text>
            </View>
          </Pressable>
    
          <Image />
        </>
      )} */}
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>NOTIFICATIONS</Text>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View>
          <Text style={styles.BtnTitle}>Coronavirus</Text>
          <Text style={styles.switchCaption}>
            Latest updates on Global Pandemic.
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={CoronaisEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={CoronaisEnabled}
          />
        </View>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View style={styles.overflowcontent}>
          <Text style={styles.BtnTitle}>Latest News</Text>
          <Text style={styles.switchCaption}>
            Get the Latest News from all over the World.
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={LatestisEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={LatestisEnabled}
          />
        </View>
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>PRIVACY</Text>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View style={styles.overflowcontent}>
          <Text style={styles.BtnTitle}>Follow Anonomously</Text>
          <Text style={styles.switchCaption}>
            Do not let others know of your activities
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={AnonomousisEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={AnonomousisEnabled}
          />
        </View>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View style={styles.overflowcontent}>
          <Text style={styles.BtnTitle}>Hide your Profile from others</Text>
          <Text style={styles.switchCaption}>Hide your Identity</Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={HideisEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch4}
            value={HideisEnabled}
          />
        </View>
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>GENERAL</Text>
      </View>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Terms of Service</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Send Feedback</Text>
        </View>
      </Pressable>
      <View
        style={{
          position: 'relative',
          alignSelf: 'center',
          marginTop: 60,
        }}>
        <Text style={styles.VersionText}>VERSION 1.0</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     SignOutFunc: event => dispatch(SignOut(event)),
//   };
// };

export default Settings


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: theme.constants.screenWidth,
    backgroundColor: theme.colors.White,
  },
  HeaderView: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  overflowcontent: {
    width: theme.constants.screenWidth - 100,
    flexWrap: 'nowrap',
  },
  VersionText: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Black,
    letterSpacing: 0.5,
  },
  HeaderText: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.subTitle.fontSize,
    color: theme.colors.MediumGray,
    letterSpacing: 0.5,
  },
  buttonView: {
    width: theme.constants.screenWidth,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  BtnTitle: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Black,
    letterSpacing: 0.5,
  },
  switchCaption: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: theme.fonts.body.fontSize,
    color: theme.colors.DarkGray,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  NotificationsSwitchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
