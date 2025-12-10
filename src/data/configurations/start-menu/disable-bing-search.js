export default {
  id: 'disable-bing-search',
  name: 'Disable Bing search in Start Menu',
  description: 'Search only local files',
  category: 'start-menu',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BingSearchEnabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
