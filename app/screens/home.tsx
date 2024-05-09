import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Define the type for 'navigation'
type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
};

type DrawerNavigationType = DrawerNavigationProp<RootStackParamList>;

// Update the type of 'navigation' parameter for HomeScreen component
function HomeScreen({ navigation }: { navigation: DrawerNavigationType }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

// Update the type of 'navigation' parameter for NotificationsScreen component
function NotificationsScreen({ navigation }: { navigation: DrawerNavigationType }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
