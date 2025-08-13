import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.quiet.care',
  appName: 'Тихая Забота',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' },
  plugins: {
    LocalNotifications: {
      smallIcon: 'mipmap/ic_launcher', // используем стандартную иконку приложения
      iconColor: '#6c63ff'
    }
  }
};

export default config;
