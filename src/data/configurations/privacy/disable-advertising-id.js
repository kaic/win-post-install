export default {
  id: 'disable-advertising-id',
  name: 'Disable advertising ID',
  description: 'Turn off advertising ID for personalized ads',
  category: 'privacy',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\AdvertisingInfo" /v Enabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
