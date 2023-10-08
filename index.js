/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

alert("test0");
AppRegistry.registerComponent(appName, () => {
    alert("test1");
    (async () => {
        try {
            const response = await fetch("bundle-assets://test.js");
            const text = await response.text();
            await eval(text);
            alert("test2");
        } catch (e) {
            alert(e);
        }

        try {
            const response = await fetch("file:///android_asset/test.js");
            const text = await response.text();
            await eval(text);
            alert("test3");
        } catch (e) {
            alert(e);
        }
    });
    alert("test4");

    return App;
});
alert("test5");
