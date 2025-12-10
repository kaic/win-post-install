export default {
  id: 'remove-microsoft-tips',
  name: 'Remove Microsoft Tips',
  description: 'Uninstall Microsoft Tips / Get Started app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.Getstarted | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
