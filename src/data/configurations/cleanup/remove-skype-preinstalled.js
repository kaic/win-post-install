export default {
  id: 'remove-skype-preinstalled',
  name: 'Remove Skype (pre-installed)',
  description: 'Uninstall pre-installed Skype UWP app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.SkypeApp | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
