import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../../lib/tailwind';
import Input from '../../components/Input';
import {Mail} from 'react-native-feather';
import AuthNavigatorLine from '../../components/AuthNavigatorLine';
import {useNavigation} from '@react-navigation/native';
import {handleSetToken, isValidEmail} from '../../lib/utils';
import Toast from 'react-native-toast-message';
import AuthButton from '../../components/buttons/AuthButton';
import {Plus} from '../../assets/images/svgs';
import {useMutation} from '@tanstack/react-query';
import {URL_STRING} from '../../lib/utils';
import { useAuthContext } from '../../contexts/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('rahmi@gmail.com');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('123456');

  const {login} = useAuthContext()
  const navigation = useNavigation();

  const {mutate: handleLogin, data} = useMutation({
    mutationFn: () =>
      fetch(`${URL_STRING}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(
          email,
        )}&password=${encodeURIComponent(password)}`,
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(res => {
          handleSetToken(res);
          handleSetState(res);
          return res;
        })
        .then(res => {
          navigation.navigate('MainScreen', {data: res});
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
      // navigation.navigate('Home', {data: 'rafay'});
    },
  });

  console.log(data);

  const handleSetState = (user: any) => {
    login(user)
  };

  const handlePressSignIn = () => {
    if (isValidEmail(email) && password.length >= 6) {
      handleLogin();
    } else {
      setError('Please Enter a Valid Email & Password should be');
      Toast.show({
        type: 'error',
        text1: 'Auth Failed',
        text2: 'Please Enter a Valid Email & Password should be of length 8',
      });
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled
      style={tw`flex-1`}>
      <Image
        style={[tw`w-full h-50 rounded-b-xl`]}
        source={require('../../assets/images/cloudShield.jpg')}
      />
      <View
        style={tw`bg-gray-light mx-5 p-5 rounded-xl min-h-100 justify-between pt-10 mt--7`}>
        <View>
          <Text style={tw`text-black text-3xl font-bold`}>Login</Text>
          {/* <Plus style={tw`h-10 w-10`} height={20} width={20} /> */}
          <Text style={tw`text-black text-base font-light	mt-3`}>
            Please Sign in to continue
          </Text>

          <View style={tw`mt-3`}>
            <Input
              placeholder="Enter Email"
              value={email}
              onChangeText={val => setEmail(val)}
              InputSvg={Mail}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={val => setPassword(val)}
              secureTextEntry
            />
          </View>

          <View style={tw`flex-row justify-between my-5`}>
            <View>
              {/* <Pressable onPress={handleCheckboxPress} style={{}}> */}
                {/* <AnimatedCheckbox
                checked={checked}
                highlightColor="#4444ff"
                checkmarkColor="#ffffff"
                boxOutlineColor="#4444ff"
              /> */}
              {/* </Pressable> */}
              <Text>Remember me</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={tw`text-black`}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <AuthButton CTA={'Sign In'} handlePress={handlePressSignIn} />

        <AuthNavigatorLine
          assertion="Don't have an Account ?"
          navigatorText="Sign Up Here!"
          navigateTo="signUpScreen"
        />
      </View>
    </ScrollView>
  );
}

export default SignIn;
