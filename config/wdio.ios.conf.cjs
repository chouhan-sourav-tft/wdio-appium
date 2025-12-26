const {config} = require('./wdio.shared.conf.cjs');
import path from 'path';

    //
    // ====================
    // Runner Configuration
    // ====================
    config.port = 4723;


    //
    // ====================
    // Specs
    // ====================
    config.specs =  [
        // ToDo: define location for spec files here
//        './test/specs/**/*.js'
        //   './test/specs/**/android-native*.js'
          './test/specs/ios/ios-todo-item-screen*.js'
    ],

    //
    // ============
    // Capabilities
    // ============
    config.capabilities = [{
    'appium:platformName': 'ios',
    'appium:platformVersion': '14.5',
    'appium:deviceName': 'iPhone 12',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
    //  "appium:uiautomator2ServerInstallTimeout": 60000,
    //  "appium:adbExecTimeout": 60000,
    //  "appium:uiautomator2ServerLaunchTimeout": 60000,
    //  "appium:autoGrantPermissions": true
    }
],


exports.config = config;