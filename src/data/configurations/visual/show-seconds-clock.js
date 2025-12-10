export default {
  id: 'show-seconds-clock',
  name: 'Show seconds in taskbar clock',
  description: 'Display seconds on system clock',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowSecondsInSystemClock /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
