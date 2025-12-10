export default {
  id: 'disable-windows-tips',
  name: 'Disable Windows Tips',
  description: 'Stop Windows from showing tips and suggestions',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" /v SoftLandingEnabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
