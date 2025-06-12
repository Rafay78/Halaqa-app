import React from 'react';
import {Text} from 'react-native';

function Home(props) {
  const {route} = props;
  const {data} = route.params;
  console.log(route.params);

  return <Text>home screen {data.username.toUpperCase()}</Text>;
}

export default Home;
