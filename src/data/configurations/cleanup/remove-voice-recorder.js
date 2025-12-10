export default {
  id: 'remove-voice-recorder',
  name: 'Remove Voice Recorder',
  description: 'Uninstall Windows Voice Recorder app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.WindowsSoundRecorder | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
