export default {
  id: 'disable-visual-effects',
  name: 'Disable visual effects',
  description: 'Set to "Best Performance" (disables animations, shadows, etc.)',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: false,
  warning: 'Windows will look less visually appealing'
};
