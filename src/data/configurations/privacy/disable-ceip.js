export default {
  id: 'disable-ceip',
  name: 'Disable Customer Experience Program',
  description: 'Stop participating in Microsoft Customer Experience Improvement Program',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\SQMClient\\Windows" /v CEIPEnable /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
