export default {
  id: 'disable-quick-access',
  name: 'Disable Quick Access',
  description: 'Remove Quick Access and show "This PC" by default',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v LaunchTo /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
