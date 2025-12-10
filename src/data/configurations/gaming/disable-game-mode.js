export default {
  id: 'disable-game-mode',
  name: 'Disable Game Mode',
  description: 'Turn off Windows Game Mode',
  category: 'gaming',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
