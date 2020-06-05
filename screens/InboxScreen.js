
import React, {useState} from 'react';
import {View, 
        Text,
        TouchableOpacity,
        Image,
        ScrollView, 
        SafeAreaView, 
        FlatList
      } from 'react-native';
import {cars} from '../data/data'
import {Entypo} from '@expo/vector-icons'

import Header from './Subcomponents/headerNav'

const ListSection = (props)=>{
  return(
    <View style={{flexDirection: "row", paddingVertical: 20, padding: 10, justifyContent: "space-between"}}>
      <View style={{backgroundColor: "blue", height: 4, width: 4, borderRadius: 50,marginTop: 14}}/>
      <View style={{height: 30, width: 30 ,borderRadius: 50, backgroundColor: "red", marginLeft: 6}}>
          
      </View>
      <View style={{flex: 4, marginHorizontal: 10}}>
          <Text>{props.description}</Text>
      </View>
      <View style={{flex: 1}}>
          <Image source={{uri: props.image}} style={{height: 40, width: 70}}/>
      </View>
      <View style={{flex: 1, alignItems: "flex-end", marginTop:10 }}>
          <Entypo
            name="dots-three-vertical"
            size={15}
            color="gray"
          />
      </View>
    </View>
  )
}



const InboxScreen = ()=>{
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: "#f8f8f8"}}>
      <View>
        {/* header section */}
        <Header/>

        
          <ScrollView>
            <FlatList
              data={cars}
              renderItem={({item})=> <ListSection 
                description={item.snippet.title}
                image={item.snippet.thumbnails.high.url}
              />}
            />    
          </ScrollView>

      </View>
    </SafeAreaView>
  )

}

InboxScreen.navigationOptions = {
  header: null
}


export default InboxScreen;