// require('dotenv').config();
import 'dotenv/config';
import path from 'path';


export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/android/add-note-screen.spec.js'
    ],

    //
    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '14.0',
            'appium:deviceName': 'Google Pixel 8',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'bs://1823b564f753e9ca67e4d673f6e73594b4cbce83',
            // maxInstances: 1,
            // 'bstack:options': {
            //     projectName: 'Appium Demo Project',
            //     buildName: 'Android Build 1',
            //     sessionName: 'Android Test',
            //     debug: true,
            //     networkLogs: true
            // },

            'appium:autoGrantPermissions': true,
            'appium:uiautomator2ServerInstallTimeout': 60000,
            'appium:uiautomator2ServerLaunchTimeout': 60000,
            'appium:adbExecTimeout': 60000
        }
    ],

    //
    // ===================
    // BrowserStack Credentials
    // ===================
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    maxInstances: 1,
    testObservability: false,
    services: [
        [
            'browserstack',
            // {
            //     browserstackLocal: false
            // }
        ]
    ],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
