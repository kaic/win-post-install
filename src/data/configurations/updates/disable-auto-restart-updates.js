export default {
  id: 'disable-auto-restart-updates',
  name: 'Disable automatic restart after updates',
  description: 'Prevent Windows from automatically restarting after updates',
  category: 'updates',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoRebootWithLoggedOnUsers /t REG_DWORD /d 1 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
