export default {
  id: 'show-file-checkboxes',
  name: 'Show checkboxes to select items',
  description: 'Enable item checkboxes in File Explorer',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v AutoCheckSelect /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
