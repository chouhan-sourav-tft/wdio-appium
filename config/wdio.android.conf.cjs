const { config } = require('./wdio.shared.conf.cjs');
const path = require('path');

//
// ====================
// Runner Configuration
// ====================
config.port = 4723;


//
// ====================
// Specs
// ====================
config.specs = [
    // ToDo: define location for spec files here
    //        './test/specs/**/*.js'
    //   './test/specs/**/android-native*.js'
    // 'test/specs/android/add-note-screen.spec.js'
      '../test/specs/android/add-note-screen.spec.js'

];

//
// ============
// Capabilities
// ============
config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 3',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    //    'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
    "appium:uiautomator2ServerInstallTimeout": 60000,
    "appium:adbExecTimeout": 60000,
    "appium:uiautomator2ServerLaunchTimeout": 60000,
    "appium:autoGrantPermissions": true
}
];


exports.config = config;
// export { config };