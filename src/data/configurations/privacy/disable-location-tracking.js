export default {
  id: 'disable-location-tracking',
  name: 'Disable location tracking',
  description: 'Turn off Windows location services',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\LocationAndSensors" /v DisableLocation /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
