export default {
  id: 'disable-cortana',
  name: 'Disable Cortana',
  description: 'Completely disable Cortana assistant',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortana /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: true,
  requiresAdmin: true
};
