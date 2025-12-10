export default {
  id: 'hide-search-box',
  name: 'Hide search box from taskbar',
  description: 'Remove or collapse search box',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v SearchboxTaskbarMode /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
