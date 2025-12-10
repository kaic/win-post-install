export default {
  id: 'disable-diagnostic-data',
  name: 'Disable diagnostic data collection',
  description: 'Minimize diagnostic data sent to Microsoft',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'May affect some Windows features'
};
