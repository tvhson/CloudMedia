import {View, FlatList} from 'react-native';
import React from 'react';
import {Posts} from '../components/data/Posts';
import ShowPosts from '../components/ui/ShowPosts';

export default function HomeScreen({navigation}: any) {
  return (
    <View>
      <FlatList
        data={Posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </View>
  );
}