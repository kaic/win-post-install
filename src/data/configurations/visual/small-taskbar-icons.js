export default {
  id: 'small-taskbar-icons',
  name: 'Small taskbar buttons',
  description: 'Use smaller icons in taskbar',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarSmallIcons /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
