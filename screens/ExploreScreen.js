import React from 'react';
import {View, SafeAreaView ,ScrollView, StyleSheet, Text, FlatList, Image } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import Header from './Subcomponents/headerNav'
import {trends} from '../data/data'

const Display = ({etag, channelUrl, ChannelName, views, data})=>{
  return(
    <View>     
      <View>
        <Image source={{uri: channelUrl}} style={{height: 220, width: 400}}/>
      </View>
      <View style={{flexDirection: "row", padding: 15}}>
        <View style={{height: 40, width: 40, borderRadius: 50,backgroundColor: "red", flex: 1}}/>
        <View style={{flex: 6, marginHorizontal: 15}}>
          <Text style={{color: "#000"}}>{etag}</Text>      
          <Text style={{color: "gray"}}>{ChannelName} . {views} . {data}</Text>
        </View>
        <View style={{flex: 1, alignItems: "flex-end"}}>
            <Entypo
              name="dots-three-vertical"
              size={14}
              color="#a8a8a8"
            />
        </View>
      </View>
    </View>
  )
}

export default function ExploreScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View>
        <Header/>

        <View>
          <View  style={{paddingVertical: 10, paddingHorizontal: 16,flexDirection:"row", backgroundColor: "whitesmoke",  justifyContent: "space-between"}}>
            <View style={{height: 40, width: 165, backgroundColor: "red", borderRadius: 8}}>

            </View>
            <View style={{height: 40, width: 165, backgroundColor: "red", borderRadius: 8}}>

            </View>
          </View>

          <View>
          <ScrollView>
            <View style={{justifuContent: "space-between", flexDirection: "row", padding: 20}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 17}}>Trending Videos</Text>
              </View>
              <View style={{flec: 1}}>
                <Text style={{fontSize: 17, color: "blue"}}>See All</Text>
              </View>
            </View>

              <FlatList
                data={trends}
                renderItem = {({item})=><Display 
                    channelUrl={item.snippet.thumbnails.high.url} 
                    etag={item.snippet.title} 
                    ChannelName={item.snippet.channelTitle}
                    />}
              />
            </ScrollView>
          </View>

        </View>
    </View>
  </SafeAreaView>
  );
}

ExploreScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
