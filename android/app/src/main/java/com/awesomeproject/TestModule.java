package com.awesomeproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestModule extends ReactContextBaseJavaModule {
    public TestModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TestModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void testMethod() {
        return "console.error('success inject')";
    }
}
