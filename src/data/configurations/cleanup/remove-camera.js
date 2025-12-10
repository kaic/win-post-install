export default {
  id: 'remove-camera',
  name: 'Remove Windows Camera',
  description: 'Uninstall Windows Camera app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.WindowsCamera | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'You will need alternative software to use your webcam'
};
