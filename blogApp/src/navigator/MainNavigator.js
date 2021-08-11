import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';

import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? COLORS.primaryColor
                : COLORS.accentColor,
          },
          headerTintColor:
            Platform.OS === 'android' ? COLORS.secondacc : COLORS.primaryColor,
          headerTitle: 'BLOGS',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Blog"
          component={IndexScreen}
          options={navData => {
            return {
              headerLeft: () => (
                <Icon.Button
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'ios-menu'}
                  color={COLORS.secondacc}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  // onPress={() => navData.navigation.openDrawer()}
                ></Icon.Button>
              ),
              headerRight: () => (
                <Icon.Button
                  name={
                    Platform.OS === 'ios'
                      ? 'add-circle-outline'
                      : 'add-circle-sharp'
                  }
                  color={COLORS.secondacc}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  onPress={() => {
                    navData.navigation.navigate('Create');
                  }}></Icon.Button>
              ),
            };
          }}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={navData => {
            return {
              headerLeft: () => (
                <Icon.Button
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'ios-menu'}
                  color={COLORS.secondacc}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  // onPress={() => navData.navigation.openDrawer()}
                ></Icon.Button>
              ),
              headerRight: () => (
                <Icon.Button
                  name={
                    Platform.OS === 'ios' ? 'pencil-outline' : 'pencil-sharp'
                  }
                  color={COLORS.secondacc}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  onPress={() => {
                    navData.navigation.navigate('Edit', {
                      id: navData.route.params?.id,
                    });
                  }}></Icon.Button>
              ),
            };
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={navData => {
            return {
              headerLeft: () => (
                <Icon.Button
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'ios-menu'}
                  color={COLORS.accentColor}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  // onPress={() => navData.navigation.openDrawer()}
                ></Icon.Button>
              ),
              // headerRight: () => (
              //   <Icon.Button
              //     name={Platform.OS === 'ios' ? 'cart-sharp' : 'cart-sharp'}
              //     color={COLORS.accentColor}
              //     size={25}
              //     backgroundColor={COLORS.primaryColor}
              //     // onPress={() => {}}
              //   ></Icon.Button>
              // ),
            };
          }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={navData => {
            return {
              headerLeft: () => (
                <Icon.Button
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'ios-menu'}
                  color={COLORS.accentColor}
                  size={25}
                  backgroundColor={COLORS.primaryColor}
                  // onPress={() => navData.navigation.openDrawer()}
                ></Icon.Button>
              ),
              // headerRight: () => (
              //   <Icon.Button
              //     name={Platform.OS === 'ios' ? 'cart-sharp' : 'cart-sharp'}
              //     color={COLORS.accentColor}
              //     size={25}
              //     backgroundColor={COLORS.primaryColor}
              //     // onPress={() => {}}
              //   ></Icon.Button>
              // ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
