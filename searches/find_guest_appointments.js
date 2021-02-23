const perform = (z, bundle) => {
  let date_ob = new Date();
  let date = ('0' + (date_ob.getDate() + 10)).slice(-2);
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  let last_day = ('0' + date_ob.getDate()).slice(-2);
  let year = date_ob.getFullYear();
  var end_date = year + '-' + month + '-' + date;
  var start_date = year + '-' + month + '-' + last_day;

  const options = {
    url:
      'https://api.zenoti.com/v1/guests/' +
      bundle.inputData.guest_id +
      '/appointments?page=1&size=100&start_date=' +
      start_date,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Apikey ' + bundle.authData.api_key,
    },
    params: {},
    body: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.appointments;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'guest_id',
        label: 'Guest Id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'find_guest_appointments',
  noun: 'appointments',
  display: {
    label: 'Find Guest Appointments',
    description: 'To get appointments of a guest form zenoti',
    hidden: false,
    important: true,
  },
};
