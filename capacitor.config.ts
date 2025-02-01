import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.windowcalculator.app',
  appName: 'Window Calculator',
  webDir: 'dist',
  server: {
    url: 'https://[project-id].lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'release-key.keystore',
      keystoreAlias: 'key0',
      keystorePassword: 'password',
      keyPassword: 'password',
    }
  }
};

export default config;