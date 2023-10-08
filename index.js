/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {
  return <Text onPress={console.error('test')}>test</Text>;
});
