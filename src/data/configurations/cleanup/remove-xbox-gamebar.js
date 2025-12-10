export default {
  id: 'remove-xbox-gamebar',
  name: 'Remove Xbox Game Bar',
  description: 'Uninstall Xbox Game Bar overlay and related apps',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.XboxGamingOverlay | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage Microsoft.XboxGameCallableUI | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
