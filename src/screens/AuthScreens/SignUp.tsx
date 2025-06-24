import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import tw from '../../lib/tailwind';
import Input from '../../components/Input';
import {CreditCard, Key, Lock, Mail, User} from 'react-native-feather';
import AuthButton from '../../components/buttons/AuthButton';
import AuthNavigatorLine from '../../components/AuthNavigatorLine';
import {useMutation} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {URL_STRING} from '../../lib/utils';
import {useNavigation} from '@react-navigation/native';
import {isValidEmail} from '../../lib/utils';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCNIC] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handlePressSignUp = () => {
    if (!isValidEmail(email)) {
      throw `Email not valid, Enter a valid email!`;
    }
    if (!cnic || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Incomplete Form',
        text2: 'Fill all the fields in the form.',
      });
      return;
    } else if (!(password == confirmPassword)) {
      Toast.show({
        type: 'error',
        text1: 'Password not same',
        text2: 'Please enter the same password in the Confirm password field.',
      });
      return;
    } else {
      handleSignUp();
    }
  };

  const {mutate: handleSignUp} = useMutation({
    mutationFn: () =>
      fetch(`${URL_STRING}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          password: password,
          email: email,
          cnic: cnic,
        }),
      }).then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      }),
    // .then(() => console.log("Succesfull Login"))
    onError: () => {
      // console.error('Error:', error.message);
      Toast.show({
        type: 'error',
        text1: 'Request Failed',
        text2: 'Your request Failed.',
      });
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Signed Up Successfully',
        text2: 'redirecting you to login.',
      });
      navigation.goBack();
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
      <Image
        style={[tw`w-full h-90 rounded-b-xl`]}
        source={require('../../assets/images/signUpSafety.jpg')}
      />

      <View style={tw`bg-gray-light p-5 mx-5 mt--33 rounded-xl min-h-60 mb-10`}>
        <Text style={tw`text-black text-3xl font-bold mt-3`}>Sign Up</Text>
        <Text style={tw`text-black text-base font-light	mt-3`}>
          We want a trusted society!
        </Text>
        <Input
          placeholder="Full Name"
          InputSvg={User}
          value={name}
          onChangeText={name => setName(name)}
        />
        <Input
          placeholder="Email"
          InputSvg={Mail}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          placeholder="CNIC Number"
          InputSvg={CreditCard}
          value={cnic}
          onChangeText={cnic => setCNIC(cnic)}
        />
        <Input
          placeholder="Enter Password"
          // InputSvg={Lock}
          secureTextEntry
          value={password}
          onChangeText={pass => setPassword(pass)}
        />
        <Input
          placeholder="Confirm Password"
          // InputSvg={Lock}
          secureTextEntry
          errorMsg={error}
          value={confirmPassword}
          onChangeText={cp => setConfirmPassword(cp)}
        />
        <AuthButton CTA="Sign Up" handlePress={() => handlePressSignUp()} />
        <AuthNavigatorLine
          assertion="Already have an account ?"
          navigatorText="Login Here"
          navigateTo="signInScreen"
        />
      </View>
    </ScrollView>
  );
}

export default SignUp;
