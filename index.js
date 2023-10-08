/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';

async function test() {
  try {
    const response = await fetch("file:///android_asset/test.js");
    const text = await response.text();
    await eval(text);
    console.error("test3");
  } catch (e) {
    console.error(e);
  }
}

const App = () => {
  return <Text onPress={() => test()}>test</Text>;
}

AppRegistry.registerComponent(appName, () => App);
