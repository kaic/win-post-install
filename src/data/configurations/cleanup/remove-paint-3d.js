export default {
  id: 'remove-paint-3d',
  name: 'Remove Paint 3D',
  description: 'Uninstall Paint 3D application',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.MSPaint | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
