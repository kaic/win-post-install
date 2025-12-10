export default {
  id: 'launch-folder-windows',
  name: 'Open folders in separate windows',
  description: 'Launch folder windows in a separate process',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v SeparateProcess /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
