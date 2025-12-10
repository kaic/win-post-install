export default {
  id: 'disable-hibernation',
  name: 'Disable hibernation',
  description: 'Disables hibernation and deletes hiberfil.sys (frees disk space)',
  category: 'performance',
  commandBat: [
    'powercfg -h off'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'You will not be able to use hibernation mode'
};
