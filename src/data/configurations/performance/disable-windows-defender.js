export default {
  id: 'disable-windows-defender',
  name: 'Disable Windows Defender',
  description: 'Completely disable Windows Defender real-time protection',
  category: 'performance',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f',
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableRealtimeMonitoring /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'DANGER: Your PC will be unprotected. Only do this if you have another antivirus!'
};
