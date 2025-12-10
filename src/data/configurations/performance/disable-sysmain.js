export default {
  id: 'disable-sysmain',
  name: 'Disable Superfetch/SysMain',
  description: 'Disable SysMain service (may improve SSD performance)',
  category: 'performance',
  commandBat: [
    'sc config SysMain start= disabled',
    'sc stop SysMain'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
