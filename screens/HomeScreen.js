import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PureChart from 'react-native-pure-chart';

// This is static data used to render the chart
let sampleChartData = [
  {x: '2018-11-18', y: 12}, 
  {x: '2018-11-19', y: 14}, 
  {x: '2018-11-20', y: 18},
  {x: '2018-11-21', y: 17},
  {x: '2018-11-22', y: 21},
  {x: '2018-11-23', y: 21},
  {x: '2018-11-24', y: 24}
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null, 
  };

  render() {
    return (
      <View style={styles.container}>
      
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={styles.treeCount}>
              <Image style={styles.treeCountImage} source={require('../assets/images/tree.png')} />
              <Text style={styles.treeCountTextMain}>You've Saved 12 trees</Text>
            </View>

            <View style={styles.companyTreeCount}>
              <Text style={styles.companyTreeCountText}>Your company has saved 218 trees</Text>
            </View>

            <View style={styles.chartContainer}>
              <Text style={styles.companyTreeCountText}>Company tree count (last 7 days)</Text>
              <PureChart data={sampleChartData} type='line' />
            </View>

          </ScrollView>

          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>Your currently on the 2nd floor</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  treeCount: {
    padding: 50,
    backgroundColor: '#0071b9',
    alignItems: 'center',
  },
  treeCountImage: {
    width: 200,
    height: 200,
  },
  treeCountTextMain: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'kone-p-font',
  },
  companyTreeCount: {
    backgroundColor: '#ceebff',
    alignItems: 'center',
    padding: 30,
  },
  companyTreeCountText: {
    color: '#0071b9',
    fontSize: 24,
    fontFamily: 'kone-p-font',
  },
  chartContainer: {
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
