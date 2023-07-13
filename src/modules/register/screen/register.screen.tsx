/* eslint-disable no-empty */
import React from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from '../styles/register.styles';
import {CoreButton, CoreIcon, CoreText} from '@src/core-components';
import {back} from '@assets/images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {color} from '@src/theme';
import {UserData} from '@src/core-services/service.model';
import {updateUserData} from '../services/register.services';

export interface RegisterProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      userData: UserData;
    };
  }>;
}

const Register = (props: RegisterProps) => {
  const userData = props.route.params.userData;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    age: Yup.string().required('Required'),
  });

  const callUpdateUserData = async (name: string, age: string, id: string) => {
    try {
      const userDataValue: UserData = {
        name: name,
        age: age,
      };
      await updateUserData(id, userDataValue);
      props.navigation.goBack();
    } catch (error: any) {}
  };

  const handleNext = async (value: any) => {
    callUpdateUserData(value.name, value.age, userData._id ?? '');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <CoreIcon width={30} height={30} icon={back} />
        </TouchableOpacity>
        <CoreText textStyle={[Styles.btnText, Styles.headerText]}>
          {'Add User'}
        </CoreText>
      </View>
      <Formik
        initialValues={{name: userData.name, age: userData.age}}
        validationSchema={validationSchema}
        onSubmit={handleNext}
      >
        {({errors, touched, handleChange, handleSubmit, values}) => (
          <>
            <TextInput
              style={Styles.input}
              placeholder={'Enter Name'}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <CoreText textStyle={[Styles.btnText, Styles.error]}>
                {errors.name}
              </CoreText>
            ) : null}
            <TextInput
              style={Styles.input}
              onChangeText={handleChange('age')}
              value={values.age}
              placeholder={'Enter Age'}
              keyboardType={'numeric'}
            />
            {errors.age && touched.age ? (
              <CoreText textStyle={[Styles.btnText, Styles.error]}>
                {errors.age}
              </CoreText>
            ) : null}
            <View style={Styles.container} />
            <CoreButton
              buttonLabel={
                (userData._id ?? '') === '' ? 'Add User' : 'Update User'
              }
              onPress={() => handleSubmit()}
              disabled={!(!errors.name && !errors.age)}
              buttonBodyStyle={Styles.btn}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
