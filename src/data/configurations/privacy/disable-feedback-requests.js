export default {
  id: 'disable-feedback-requests',
  name: 'Disable Windows feedback requests',
  description: 'Stop Windows from asking for feedback',
  category: 'privacy',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Siuf\\Rules" /v NumberOfSIUFInPeriod /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
