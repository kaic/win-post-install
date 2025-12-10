export default {
  id: 'disable-nvidia-telemetry',
  name: 'Disable Nvidia Telemetry',
  description: 'Stop Nvidia telemetry services (if Nvidia GPU detected)',
  category: 'gaming',
  commandBat: [
    'sc config NvTelemetryContainer start= disabled',
    'sc stop NvTelemetryContainer'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Only works if Nvidia GPU is installed'
};
