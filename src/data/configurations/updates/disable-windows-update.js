export default {
  id: 'disable-windows-update',
  name: 'Disable Windows Update',
  description: 'Stop Windows Update service (requires manual updates)',
  category: 'updates',
  commandBat: [
    'sc config wuauserv start= disabled'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'You will need to manually update Windows. Not recommended for most users.'
};
