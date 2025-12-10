export default {
  id: 'disable-fax-service',
  name: 'Disable Fax service',
  description: 'Stop and disable Windows Fax service (rarely used)',
  category: 'cleanup',
  commandBat: [
    'sc config Fax start= disabled',
    'sc stop Fax'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
