export default {
  id: 'disable-telemetry',
  name: 'Disable telemetry',
  description: 'Reduce Windows data collection and telemetry',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'May affect some Windows features and updates'
};
