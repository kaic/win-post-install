export default {
  id: 'remove-xbox-apps-complete',
  name: 'Remove all Xbox apps',
  description: 'Uninstall Xbox Identity Provider, Xbox Speech, and other Xbox services',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.XboxIdentityProvider | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage Microsoft.XboxSpeechToTextOverlay | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage Microsoft.Xbox.TCUI | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'May affect Xbox game functionality and Game Pass'
};
