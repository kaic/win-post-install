export default {
  id: 'disable-app-suggestions',
  name: 'Disable app suggestions',
  description: 'Stop Windows from suggesting apps',
  category: 'privacy',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" /v SubscribedContent-338388Enabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
