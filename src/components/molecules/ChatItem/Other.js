import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {S2} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={S2} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Silahkan Ready gan barang banyak</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingLeft: 18,
    backgroundColor: 'white',
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    // fontFamily: fonts.primary.normal,
    // color: colors.white,
  },
  date: {
    fontSize: 12,
    // fontFamily: fonts.primary.normal,
    // color: colors.text.secondary,
    marginTop: 8,
  },
});
