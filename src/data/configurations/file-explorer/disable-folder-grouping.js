export default {
  id: 'disable-folder-grouping',
  name: 'Disable folder grouping in search',
  description: 'Show flat search results without grouping',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v FolderContentsInfoTip /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
