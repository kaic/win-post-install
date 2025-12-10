export default {
  id: 'disable-thumbnail-cache',
  name: 'Disable thumbnail cache',
  description: 'Prevent creation of Thumbs.db files',
  category: 'file-explorer',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v DisableThumbnailCache /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
