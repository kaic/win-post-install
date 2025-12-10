export default {
  id: 'disable-taskbar-thumbnails',
  name: 'Disable taskbar thumbnail previews',
  description: 'Show text-only previews on hover',
  category: 'visual',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ExtendedUIHoverTime /t REG_DWORD /d 10000 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: false
};
