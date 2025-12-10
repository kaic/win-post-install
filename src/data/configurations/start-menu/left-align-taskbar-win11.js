export default {
  id: 'left-align-taskbar-win11',
  name: 'Left align taskbar (Win11)',
  description: 'Move taskbar icons to left side',
  category: 'start-menu',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarAl /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false,
  warning: 'Only works on Windows 11'
};
