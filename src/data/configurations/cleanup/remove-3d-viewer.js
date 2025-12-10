export default {
  id: 'remove-3d-viewer',
  name: 'Remove 3D Viewer',
  description: 'Uninstall Microsoft 3D Viewer application',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage *3DViewer* | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage Microsoft.Microsoft3DViewer | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
