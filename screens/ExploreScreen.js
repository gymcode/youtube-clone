import React from 'react';
import {View, SafeAreaView ,ScrollView, StyleSheet, Text } from 'react-native';
import Header from './Subcomponents/headerNav'


export default function ExploreScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: "#f8f8f8"}}>
          {/* header section */}
          <Header/>

          

        </View>
      </ScrollView>
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
