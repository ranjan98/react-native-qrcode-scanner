import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRCodeScannerScreen from '../screens/QRScanner/QRCodeScannerScreen';
import QRScannedScreen from '../screens/QRScanner/QRScannedScreen';

const QRCodeStack = createStackNavigator();

export default function QRCodeStackScreen() {
  return (
    <QRCodeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <QRCodeStack.Screen name="QRCode" component={QRCodeScannerScreen} options={{ title: 'QR Code Scanner'}}/>
      <QRCodeStack.Screen name="QRScanned" component={QRScannedScreen} options={{title: 'QR Code Result'}} />
    </QRCodeStack.Navigator>
  );
}