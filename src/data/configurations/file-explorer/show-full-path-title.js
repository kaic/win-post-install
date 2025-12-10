export default {
  id: 'show-full-path-title',
  name: 'Show full path in title bar',
  description: 'Display complete folder path in File Explorer title bar',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\CabinetState" /v FullPath /t REG_DWORD /d 1 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
