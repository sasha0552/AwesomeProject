/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';

const App = () => {
  return <Text onPress={() => console.error("test")}>test</Text>;
}

AppRegistry.registerComponent(appName, () => App);
