import React from 'react'
import {Text,View,StyleSheet,Image,ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const Header = ({navigation , title}) => {
  const toogleMenu = () => {
    navigation.openDrawer()
  }
  return <ImageBackground 
      source={require('../assets/game_bg.png')} 
      style={styles.customHeader}
    >
      <MaterialIcons name='menu'
        size={28}
        onPress={toogleMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImg}/>
        <Text style={styles.customText}>{title}</Text>
      </View>
  </ImageBackground>
}


const styles = StyleSheet.create({
  customHeader:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:18
  },
  icon:{
    position:'absolute',
    left:8
  },
  headerTitle:{
    flexDirection:'row'
  },
  headerImg:{
    width:26,
    height:26,
    marginRight:8,
    marginLeft:8
  },
  customText:{
    fontWeight:'bold',
    fontSize: 20,
    color:'#444',
    letterSpacing:1
  }
})

export default Header;