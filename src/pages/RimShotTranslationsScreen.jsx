import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import RimShotHeader from '../components/RimShotHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <RimShotHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Six Nations', '03.11 20:00', 'Ireland \n' + 'England')}
        {renderBroadcast('Rugby', '05.11 19:30', 'New Zealand \n' + 'South Africa')}
        {renderBroadcast('Premiership', '07.11 18:15', 'Leicester Tigers \n' + 'Harlequins')}
        {renderBroadcast('Super Rugby', '09.11 21:00', 'Crusaders \n' + 'Brumbies')}
        {renderBroadcast('Top 14', '11.11 20:30', 'Clermont \n' + 'Racing 92')}
        {renderBroadcast('Pro14', '13.11 19:45', 'Munster \n' + 'Leinster')}
        {renderBroadcast('Rugby Europe', '15.11 18:00', 'Georgia \n' + 'Spain')}
        {renderBroadcast('Major League', '17.11 22:00', 'Seattle Seawolves \n' + 'Austin Gilgronis')}
        {renderBroadcast('Challenge Cup', '19.11 19:00', 'Gloucester \n' + 'Benetton Rugby')}
        {renderBroadcast('Rugby Cup', '21.11 20:00', 'France \n' + 'Argentina')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: COLORS.main,
    borderWidth: 2,
    paddingLeft: 20,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
