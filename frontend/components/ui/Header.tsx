/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Icon, {Icons} from './Icons';
import {Image, Text} from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/Store';

export default function Header({navigation}: any) {
  const user = useSelector((state: RootState) => state.userInfo);
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Image
            source={
              user.profileImagePath === ''
                ? require('../../assets/images/Spiderman.jpg')
                : {uri: user.profileImagePath}
            }
            style={{height: 35, width: 35, borderRadius: 100}}
          />
        </TouchableOpacity>
      </View>
      <Pressable
        style={styles.textInput}
        onPress={() => {
          navigation.navigate('search');
        }}>
        <Icon type={Icons.Feather} name="search" />
        <Text style={{marginHorizontal: 10, fontSize: 18}}>Search</Text>
      </Pressable>
      <TouchableOpacity
        style={{marginRight: 10}}
        onPress={() => {
          navigation.navigate('chat')
        }}>
        <Icon type={Icons.Ionicons} name="chatbox-ellipses-outline" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 4,
    paddingVertical: 7,
  },
  textInput: {
    marginHorizontal: 20,
    width: 260,
    height: 40,
    backgroundColor: Colors.skyBlue,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: Colors.black,
    alignItems: 'center',
    flexDirection: 'row',
  },
});