export default {
  id: 'show-hidden-files',
  name: 'Show hidden files and folders',
  description: 'Display hidden files, folders, and drives',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v Hidden /t REG_DWORD /d 1 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
