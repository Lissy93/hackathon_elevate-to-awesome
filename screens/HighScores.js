import React from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, StatusBar } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

/**
 * Returns a URL for a unique avatar for each user, based on the user ID
 */
 makeAvatar  = (userId) => {
   return `https://api.adorable.io/avatars/80/user${userId}.png`
 };

export default class HighScoresScreen extends React.Component {

  state = {
    data: [
        { name: 'We Tu Lo', score: null, iconUrl: makeAvatar(Math.random()) },
        { name: 'Adam Savage', score: 12, iconUrl: makeAvatar(Math.random()) },
        { name: 'Derek Black', score: 244, iconUrl: makeAvatar(Math.random()) },
        { name: 'Erika White', score: 0, iconUrl: makeAvatar(Math.random()) },
        { name: 'Jimmy John', score: 20, iconUrl: makeAvatar(Math.random()) },
        { name: 'Joe Roddy', score: 69, iconUrl: makeAvatar(Math.random()) },
        { name: 'Ericka Johannesburg', score: 101, iconUrl: makeAvatar(Math.random()) },
        { name: 'Tim Thomas', score: 41, iconUrl: makeAvatar(Math.random()) },
        { name: 'John Davis', score: 80, iconUrl: makeAvatar(Math.random()) },
        { name: 'Tina Turner', score: 22, iconUrl: makeAvatar(Math.random()) },
        { name: 'Harry Reynolds', score: null, iconUrl: makeAvatar(Math.random()) },
        { name: 'Betty Davis', score: 25, iconUrl: makeAvatar(Math.random()) },
        { name: 'Lauren Leonard', score: 30, iconUrl: makeAvatar(Math.random()) },

    ]
  };

  _alert = (title, body) => {
    Alert.alert(title, body,
        [{ text: 'OK', onPress: () => { } },],
        { cancelable: false }
    )
}

  static navigationOptions = {
    title: 'High Scores',
  };

  constructor(props) {
    super(props);
  }

  render() {

    const props = {
      labelBy: 'name',
      sortBy: 'score',
      data: this.state.data,
      icon: 'iconUrl',
      onRowPress: (item, index) => {
          this._alert(`${item.name}'s score is ${item.score}`, 
          'Earn more points by using the stairs rather than elevator!')
      },
      evenRowColor: '#ceebff',
  }

    return (
      <View style={styles.container} >
        {/* Ghetto Header */}
        <View style={styles.leaderBoardHeaderContainer}>
            <Text style={styles.leaderBoardHeaderText}>
                Leaderboard
            </Text>
        </View>
        <Leaderboard {...props} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#0071b9',
  },
  leaderBoardHeaderText: {
    fontSize: 48, 
    color: 'white',
    paddingBottom: 10,
    fontFamily: 'kone-p-font',
  },
  leaderBoardHeaderContainer: {
    backgroundColor: '#0071b9',
    paddingTop: 40,
    alignItems: 'center' 
  },
  koneFont: {
    fontFamily: 'kone-p-font'
  },
});
