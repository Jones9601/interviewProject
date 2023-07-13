/* eslint-disable no-empty */
import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {CoreText} from '@src/core-components';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';
import {deleteUserData, getUserData} from '../services/home.services';
import {UserData} from '@src/core-services/service.model';
import {stores} from '@src/core-stores';
import Styles from '../styles/home.styles';

export interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Home = (props: HomeProps) => {
  const isFocused = useIsFocused();
  const [userData, setUserData] = useState<Array<UserData>>([]);

  const callGetUserData = async () => {
    stores.setLoading(true);
    try {
      const response = await getUserData();
      const result: Array<UserData> = response.data;
      setUserData(result);
    } catch (error: any) {}
  };

  const callDeleteUserData = async (item: UserData) => {
    stores.setLoading(true);
    try {
      if ((item._id ?? '') !== '') await deleteUserData(item._id ?? '');
      callGetUserData();
    } catch (error: any) {}
  };

  useFocusEffect(
    useCallback(() => {
      callGetUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]),
  );

  const goRegisterScreen = (item: UserData) => {
    props.navigation.navigate('register', {
      userData: item,
    });
  };

  const userContainer = (item: UserData) => {
    return (
      <View style={Styles.userDetailsContainer}>
        <CoreText textStyle={Styles.text}>{item.name}</CoreText>
        <View style={Styles.rowContainer}>
          <CoreText
            onPress={() => goRegisterScreen(item)}
            textStyle={Styles.text}
          >
            {'Update'}
          </CoreText>
          <CoreText
            onPress={() => callDeleteUserData(item)}
            textStyle={[Styles.text, Styles.deleteText]}
          >
            {'Delete'}
          </CoreText>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <CoreText>{'Home Screen'}</CoreText>
      </View>
      <View style={Styles.addBtnContainer}>
        <View />
        <CoreText onPress={() => goRegisterScreen(new UserData())}>
          {'Add'}
        </CoreText>
      </View>
      <FlatList
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        data={userData}
        renderItem={item => userContainer(item.item)}
        keyExtractor={(item, index) => item.toString() + index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
