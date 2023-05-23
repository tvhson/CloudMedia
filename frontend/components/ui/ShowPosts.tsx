/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon, {Icons} from '../../components/ui/Icons';
import CustomIcon from '../data/CustomIcon';
import Colors from '../../constants/Colors';

export default function ShowPosts({item}: any) {
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <View style={Styles.flexCenter}>
        <Image
          source={{uri: item.profile_picture}}
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />
        <View>
          <View style={Styles.flexCenter}>
            <Text
              style={{fontSize: 16, color: Colors.black, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            {item.connection ? (
              <Text style={{fontWeight: 'bold'}}>
                <Icon
                  type={Icons.Entypo}
                  size={16}
                  name="dot-single"
                  color={Colors.gray}
                />
                {item.connection}
              </Text>
            ) : null}
          </View>
          <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={{fontSize: 11}}>{item.timeAgo} hr</Text>
        </View>
        {item.connection ? (
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                padding: 4,
              }}>
              <Icon
                type={Icons.Entypo}
                name="dots-three-vertical"
                size={19}
                color={Colors.gray}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => {}} style={Styles.flexCenter}>
            <Icon
              type={Icons.Entypo}
              name="plus"
              color={Colors.irisBlue}
              size={22}
            />
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: Colors.skyBlue,
                marginLeft: 5,
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {item.content ? (
        <Text
          style={{
            paddingHorizontal: 16,
            color: Colors.black,
            marginVertical: 10,
            textAlign: 'justify',
          }}
          numberOfLines={3}
          ellipsizeMode="tail">
          {item.content}
        </Text>
      ) : (
        <View style={{marginTop: 10}} />
      )}

      {item.hasImage ? (
        <Image
          source={{uri: item.postImage}}
          style={{height: 300, width: deviceWidth}}
        />
      ) : null}

      <View
        style={[
          Styles.flexCenter,
          {
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop: 5,
          },
        ]}>
        <View style={Styles.flexCenter}>
          <Icon
            type={Icons.AntDesign}
            name="like1"
            color={Colors.irisBlue}
            style={{height: 25, width: 25, borderRadius: 100}}
          />
          <Text>{item.likes} likes</Text>
        </View>
        <View style={Styles.flexCenter}>
          {item.comments > 0 ? <Text>{item.comments} comments</Text> : null}
          {item.comments > 0 && item.shares > 0 ? (
            <Icon
              type={Icons.Entypo}
              name="dot-single"
              size={16}
              color={Colors.gray}
            />
          ) : null}
          {item.shares > 0 ? <Text>{item.shares} shares</Text> : null}
        </View>
      </View>

      <View
        style={{
          borderTopColor: Colors.darkGray,
          borderTopWidth: 1,
          margin: 10,
        }}
      />

      <View
        style={[
          Styles.flexCenter,
          {
            justifyContent: 'space-between',
            paddingHorizontal: 40,
          },
        ]}>
        <TouchableOpacity onPress={() => {}} style={{alignItems: 'center'}}>
          <Icon
            type={Icons.Entypo}
            name="thumbs-up"
            size={19}
            color={item.isLiked ? Colors.skyBlue : Colors.gray}
          />
          <Text style={{color: item.isLiked ? Colors.skyBlue : Colors.gray}}>
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <CustomIcon
            name="chatbubble-ellipses-outline"
            size={19}
            color={Colors.gray}
          />
          <Text>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <Icon
            type={Icons.Entypo}
            name="share"
            size={19}
            color={Colors.gray}
          />
          <Text>share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <CustomIcon name="send-outline" size={19} color={Colors.gray} />
          <Text>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    padding: 10,
    paddingBottom: 0,
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
