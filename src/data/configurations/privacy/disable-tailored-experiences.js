export default {
  id: 'disable-tailored-experiences',
  name: 'Disable tailored experiences',
  description: 'Disable personalized tips based on diagnostic data',
  category: 'privacy',
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Privacy" /v TailoredExperiencesWithDiagnosticDataEnabled /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
