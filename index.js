/**
 * @format
 */

async function executeArbitrary() {
    const response = await fetch("bundle-assets://test.js");
    const text = await response.text();
    await eval(text);
}
executeArbitrary();

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
