import React from 'react';
import { Text, View, StyleSheet, Share, TouchableHighlight } from 'react-native';
import Card from '../components/Card';

export default function QRScannedScreen({ route, navigation }) {
  const params = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: params.data,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    // <ScrollView style={{ padding: 10 }}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Card text={params.data} />
        </View>
        <TouchableHighlight onPress={onShare} style={styles.bottomView}>
         <Text style={styles.textStyle}>Share</Text>
        </TouchableHighlight>
      </View>
    // </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  main: {
    flex: 1,
  },
  shareButton: {
    paddingVertical: 10,
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
