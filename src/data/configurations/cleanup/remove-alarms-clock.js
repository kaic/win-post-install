export default {
  id: 'remove-alarms-clock',
  name: 'Remove Alarms & Clock',
  description: 'Uninstall Windows Alarms and Clock app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.WindowsAlarms | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
