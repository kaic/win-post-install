export default {
  id: 'disable-mobile-hotspot',
  name: 'Disable Mobile Hotspot service',
  description: 'Stop and disable Windows Mobile Hotspot Service (safe if not using mobile hotspot)',
  category: 'cleanup',
  commandBat: [
    'sc config icssvc start= disabled',
    'sc stop icssvc'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'You will not be able to share internet via mobile hotspot'
};
