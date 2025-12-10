export default {
  id: 'disable-game-dvr',
  name: 'Disable Game DVR',
  description: 'Disable Xbox Game Bar background recording (can improve FPS)',
  category: 'gaming',
  registryBat: [
    'reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f',
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
