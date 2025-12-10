export default {
  id: 'show-all-tray-icons',
  name: 'Show all tray icons',
  description: 'Always show all system tray icons',
  category: 'start-menu',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer" /v EnableAutoTray /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
