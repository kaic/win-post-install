export default {
  id: 'disable-startup-delay',
  name: 'Disable startup delay',
  description: 'Remove delay for startup apps (faster boot)',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Serialize" /v StartupDelayInMSec /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: true,
  requiresAdmin: false
};
