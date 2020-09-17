import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView , Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const win = Dimensions.get('window');
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);

export default function App({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerGroup}>
        <View style={styles.imageWrapper}>
          <Image 
          source={require('./assets/huyen.png')} 
          style={styles.avatarImg}
          />
        </View>
  
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Minh Huyen</Text>
          <Text style={styles.jobText}>Student</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendMessButton}>
              <Feather name='send' size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.countLikeGroup}>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.countLabel}>Photos</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countLabel}>Followers</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.countLabel}>Following</Text>
        </View>
      </View>

      <ScrollView 
        style={{
        flex: 0.6
      }}
      >
        <View style={styles.imagesGroup}>
          <View 
            style={{
              flexDirection: 'column'
            }}>
              {imgData.slice(0, centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.imgFeed}></Image>
              })}
          </View>
          <View 
            style={{
              flexDirection: 'column'
            }}>
              {imgData.slice(centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.imgFeed}></Image>
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    marginTop: 50
  },

  // Images Feed 
  imagesGroup: {
    flex: 0.6, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  imgFeed: {
    alignSelf: 'stretch',
    width: 180,
    height: 230,
    // borderRadius: 10,
    resizeMode: 'stretch'

  },

  // Header
  headerGroup: {
    flex: 0.25, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarImg: {
    width: 120, 
    height: 120,
    borderRadius: 120
  },

  // User's Info
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  nameText: {
    flex: 0.7,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray'
  },

  jobText:{
    flex: 0.7,
    fontSize: 16,
    fontWeight: '400',
    color: 'gray'
  },

  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
  },

  followButton: {
    flex: 0.7,
    backgroundColor: 'blue',
    width: 110,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  sendMessButton: {
    flex: 0.3,
    backgroundColor: 'yellow',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginLeft: 5,
    marginRight: 5
  },

  followText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },

  // Count Like
  countLikeGroup: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countGroup:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countLabel: {
    fontSize: 17,
    fontWeight: '400',
  },

  // Scroll View
  scroll: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
