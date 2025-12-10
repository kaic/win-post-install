export default {
  id: 'cpu-max-performance',
  name: 'Set CPU to maximum performance',
  description: 'Force CPU to always run at maximum frequency (no throttling)',
  category: 'performance',
  registryBat: [
    'powercfg -setacvalueindex SCHEME_CURRENT SUB_PROCESSOR PROCTHROTTLEMIN 100',
    'powercfg -setactive SCHEME_CURRENT'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Increases power consumption and heat generation'
};
