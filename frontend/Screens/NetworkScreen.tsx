/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';
import Icon, {Icons} from '../components/ui/Icons';
import FriendList from '../components/ui/FriendList';
import InvitationsScreen from './InvitationsScreen';
import AddFriendEmail from '../components/ui/AddFriendEmail';

function NetworkScreen({navigation}: any) {
  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const [invitationsScreen, setInvitationsScreen] = useState(false);

  const [ishowAddEmail, setIshowAddEmail] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <AddFriendEmail isVisible={ishowAddEmail} setVisible={setIshowAddEmail} />
      <Animated.View style={[styles.circle, {bottom: icon_1}]}>
        <TouchableOpacity>
          <Icon
            type={Icons.FontAwesome}
            name="address-book-o"
            size={25}
            color="#0A66C2"
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, {bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity>
          <Icon
            type={Icons.AntDesign}
            name="qrcode"
            size={25}
            color="#0A66C2"
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, {right: icon_3}]}>
        <TouchableOpacity
          onPress={() => {
            setIshowAddEmail(true);
            popOut();
          }}>
          <Icon
            type={Icons.MaterialIcons}
            name="group-add"
            size={25}
            color="#0A66C2"
          />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={[styles.circle, {backgroundColor: '#0A66C2'}]}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}>
        <Icon type={Icons.AntDesign} name="adduser" size={25} color="#FFFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.manageNetworkView}>
          <Text style={styles.title}>Manage my network</Text>
          <Icon type={Icons.AntDesign} name={'right'} />
        </View>
      </TouchableOpacity>
      <View style={{backgroundColor: '#eeeeee', height: 10}} />
      <InvitationsScreen
        isVisible={invitationsScreen}
        setVisible={setInvitationsScreen}
      />
      <TouchableOpacity
        onPress={() => setInvitationsScreen(!invitationsScreen)}>
        <View style={styles.manageNetworkView}>
          <Text style={styles.title}>Invitation</Text>
          <Icon type={Icons.AntDesign} name={'right'} />
        </View>
      </TouchableOpacity>
      <View style={{backgroundColor: '#eeeeee', height: 10}} />
      <View>
        <View style={styles.manageNetworkView}>
          <Text style={styles.title}>People you may know</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <FriendList />
        </View>
      </View>
    </View>
  );
}

export default NetworkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  manageNetworkView: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#0A66C2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  circle: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
