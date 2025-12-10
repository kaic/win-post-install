export default {
  id: 'disable-transparency',
  name: 'Disable transparency effects',
  description: 'Disable transparency in Start menu and taskbar',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
