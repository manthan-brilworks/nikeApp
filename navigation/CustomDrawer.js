// CustomDrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

    <DrawerContentScrollView {...props}>
       
       
      <View style={styles.header}>
        <Image source={require('../assets/nike/user-dummy-pic.png')} style={styles.userPic}/>
        <Text style={styles.headerText}>Emmanuel Oyiboke</Text>
      </View>

      <View style={styles.menuItems}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('account')}
        >
          <Image source={require('../assets/nike/profile.png')}/>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={require('../assets/nike/cart.png')}/>
          <Text style={styles.menuText}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('favorite')}
        >
          <Image source={require('../assets/nike/fav.png')}/>
          <Text style={styles.menuText}>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('orders')}
        >
         <Image source={require('../assets/nike/orders.png')}/>
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('notification')}
        >
          <Image source={require('../assets/nike/noti.png')}/>
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('settings')}
        >
          <Image source={require('../assets/nike/set.png')}/>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <View style={styles.line}></View>

      </View>

      <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={require('../assets/nike/signout.png')}/>
          <Text style={styles.menuText}>Sign Out</Text>
        </TouchableOpacity>

        
      
    </DrawerContentScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0D6EFD',
    flex:1
  },
    header: {
    padding: 20,
   
  },
  userPic:{
    height:96,
    width:96
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    
  },
  menuItems: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color:'white'
  },
  line:{
    height:2,
    width:'90%',
    color:'white',
    margin:10,
    marginTop:30,
    backgroundColor:'white',
  }
});

export default CustomDrawer;