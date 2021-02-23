const authentication = require('./authentication');
const centersTrigger = require('./triggers/centers.js');
const newGuestTrigger = require('./triggers/new_guest.js');
const newAppointmentTrigger = require('./triggers/new_appointment.js');
const getAllAppointmentsCreate = require('./creates/get_all_appointments.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [centersTrigger.key]: centersTrigger,
    [newGuestTrigger.key]: newGuestTrigger,
    [newAppointmentTrigger.key]: newAppointmentTrigger,
  },
  creates: { [getAllAppointmentsCreate.key]: getAllAppointmentsCreate },
};
