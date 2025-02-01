import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.windowcalculator.app',
  appName: 'Window Calculator',
  webDir: 'dist',
  server: {
    url: 'https://1d190d44-9ae4-42a6-bcbc-cdf5da7e8249.lovableproject.com',
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