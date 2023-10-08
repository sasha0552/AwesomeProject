/**
 * @format
 */

import {AppRegistry, NativeModules, Text} from 'react-native';
import {name as appName} from './app.json';

function test() {
  const {TestModule} = NativeModules;
  eval(TestModule.testMethod());
}

const App = () => {
  return <Text onPress={() => test()}>test</Text>;
}

AppRegistry.registerComponent(appName, () => App);
