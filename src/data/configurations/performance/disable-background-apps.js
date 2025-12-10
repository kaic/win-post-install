export default {
  id: 'disable-background-apps',
  name: 'Disable background apps',
  description: 'Prevent apps from running in background',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
