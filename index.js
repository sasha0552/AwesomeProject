/**
 * @format
 */

async function executeArbitrary() {
    try {
        const response = await fetch("bundle-assets://test.js");
        const text = await response.text();
        await eval(text);
    } catch (e) {
        alert(e);
    }

    try {
        const response = await fetch("file:///android_asset/test.js");
        const text = await response.text();
        await eval(text);
    } catch (e) {
        alert(e);
    }

    throw new Error("fail");
}

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

executeArbitrary().then(() => {
AppRegistry.registerComponent(appName, () => App);
});
