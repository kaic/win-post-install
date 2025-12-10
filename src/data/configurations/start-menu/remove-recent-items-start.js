export default {
  id: 'remove-recent-items-start',
  name: 'Remove recent items from Start Menu',
  description: 'Don\'t show recently opened files',
  category: 'start-menu',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v Start_TrackDocs /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
