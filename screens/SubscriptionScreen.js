import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';

import Header from './Subcomponents/headerNav'

export default function SubscriptionScreen() {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View>
          <Header/>

          <View>
            <View style={{paddingVertical: 30}}>
              <Text>fkslndjfsf</Text>
            </View>

            <View>
              <View style={{justifuContent: "space-between", flexDirection: "row"}}>
                <View>
                  <Text>Trending Videos</Text>
                </View>
                <View>
                  <Text>See All</Text>
                </View>
              </View>
            </View>

          </View>
      </View>
    </SafeAreaView>
  ) 
}

SubscriptionScreen.navigationOptions = {
  header: null
};
