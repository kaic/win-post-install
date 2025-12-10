export default {
  id: 'hide-taskview-button',
  name: 'Hide Task View button',
  description: 'Remove Task View button from taskbar',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowTaskViewButton /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
