import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  Image,
  TouchableOpacity,
  SafeAreaView 
} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import {ToastAndroid} from 'react-native';

const cards = [
  { name: '10% off at Starbucks', description: 'Limited time offer!', image: 'https://i.imgur.com/I0VbwET.jpg', url: ''},
  { name: '50p at the Deli', description: 'Your points have earned you £0.50 off, at selected stores', image: 'https://i.imgur.com/Gn65sGP.jpg', url: ''},
  { name: 'Buy 1 get one free Sub', description: '', image: 'https://i.imgur.com/PQuquuL.jpg', url: ''},
  { name: 'Free fries with large meal', description: '', image: 'https://i.imgur.com/4XRwetr.jpg', url: ''},
];

function showFinishedMessage(){
  ToastAndroid.show('Check back later for more rewards!', ToastAndroid.SHORT);
}

function redeemOffer(){
  console.log('redeem offer');
}

export default class RewardsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rewards',
    style: {
      backgroundColor: '0071b9'
    },
    tintColor: '0071b9',
    titleStyle: {
      color: '#FFF'
    }
    
  };

  render () {
    return(
    <SafeAreaView style={styles.container}>

        <Swiper
            cards={cards}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{card.name}</Text>
                        <Text style={styles.cardDescription}>{card.description}</Text>
                        <Image style={styles.cardImage}
                            source={{uri: card.image}}
                          />
                        <TouchableOpacity onPress={this.redeemOffer} style={styles.cardButton}>
                          <Text style={styles.cardButtonText}>Redeem Offer</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {
              console.log(cardIndex)
            }}
            onSwipedAll={() => {
              showFinishedMessage();
            }}
            cardIndex={0}
            backgroundColor={'#0071b9'}
            stackSize= {3}>
        </Swiper>
        
    </SafeAreaView>
    )}
}


const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#0071b9',
  },
  card: {
    marginTop: 50,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    color: '#0071b9',
    fontSize: 24,
    fontFamily: 'kone-p-font',
  },
  cardDescription: {
    color: '#a2a3a5',
    fontSize: 18,
    fontFamily: 'kone-p-font',
    height: 35,
  },
  cardImage: {
    height: 270,
    margin: 20
  },
  cardButton: {
    backgroundColor: '#0071b9',
    padding: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 2,
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'kone-p-font',
  },
  pointsBalanceContainer: {
    backgroundColor: '#0071b9',
    padding: 10,
    alignItems: 'center',
  },
  pointsBalanceText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'kone-p-font',
  },
});
