export default {
  id: 'show-drives-no-media',
  name: 'Show empty drives',
  description: 'Display drives with no media (empty card readers, etc.)',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v HideDrivesWithNoMedia /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
