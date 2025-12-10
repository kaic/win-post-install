export default {
  id: 'remove-get-help',
  name: 'Remove Get Help app',
  description: 'Uninstall Windows Get Help application',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.GetHelp | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
