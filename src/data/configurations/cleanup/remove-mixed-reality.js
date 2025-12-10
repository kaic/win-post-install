export default {
  id: 'remove-mixed-reality',
  name: 'Remove Mixed Reality Portal',
  description: 'Uninstall Windows Mixed Reality Portal and Viewer',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.MixedReality.Portal | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage *HolographicFirstRun* | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
