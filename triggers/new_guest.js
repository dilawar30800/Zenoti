const perform = (z, bundle) => {
  let date_ob = new Date();
  let date = ('0' + date_ob.getDate()).slice(-2);
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  var last_updated = year + '-' + month + '-' + date;
  var guests = [];
  const options = {
    url:
      'https://api.zenoti.com/v1/guests?center_id=' +
      bundle.inputData.center_id +
      '&last_updated=' +
      last_updated +
      '&size=100',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'apikey ' + bundle.authData.api_key,
    },
    params: {},
  };
  var d = [];
  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    for (var i = 0; i < results.guests.length; i++) {
      var created_on = results.guests[i].created_date.toString().split('T');
      var res = last_updated == created_on[0].toString();
      if (res == true) {
        // d.push(created_on[0]);
        // d.push(res);
        guests.push(results.guests[i]);
      }
    }
    // You can do any parsing you need for results here before returning them

    return guests;
    // return [{'id':12,d,last_updated,guests}];
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'center_id',
        type: 'string',
        label: 'Center',
        dynamic: 'Centers.id.display_name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: '3233C72C-8F4B-4FA5-B716-55FA7F3020F7',
      code: 'GHO7',
      center_id: 'e5876438-b693-4ed0-8344-a9ba2994ee8c',
      created_date: '2020-06-19T18:02:58',
      personal_info: {
        user_name: 'a.old',
        first_name: 'A_OLD',
        last_name: 'O_OLD',
        middle_name: '',
        email: 'A_OLD@rush.co.uk',
        mobile_phone: { country_code: 224, number: '1111111111' },
        work_phone: null,
        home_phone: null,
        gender: -1,
        date_of_birth: null,
        is_minor: false,
        nationality_id: 0,
        anniversary_date: null,
        lock_guest_custom_data: false,
        pan: '',
      },
      address_info: null,
      preferences: null,
      tags: null,
      referral: null,
      primary_employee: null,
    },
    outputFields: [
      { key: 'id' },
      { key: 'code' },
      { key: 'center_id' },
      { key: 'created_date' },
      { key: 'personal_info__user_name' },
      { key: 'personal_info__first_name' },
      { key: 'personal_info__last_name' },
      { key: 'personal_info__middle_name' },
      { key: 'personal_info__email' },
      { key: 'personal_info__mobile_phone__country_code' },
      { key: 'personal_info__mobile_phone__number' },
      { key: 'personal_info__work_phone' },
      { key: 'personal_info__home_phone' },
      { key: 'personal_info__gender' },
      { key: 'personal_info__date_of_birth' },
      { key: 'personal_info__is_minor' },
      { key: 'personal_info__nationality_id' },
      { key: 'personal_info__anniversary_date' },
      { key: 'personal_info__lock_guest_custom_data' },
      { key: 'personal_info__pan' },
      { key: 'address_info' },
      { key: 'preferences' },
      { key: 'tags' },
      { key: 'referral' },
      { key: 'primary_employee' },
    ],
  },
  key: 'new_guest',
  noun: 'guest',
  display: {
    label: 'New Guest',
    description: 'To get a new guest from a specific center',
    hidden: false,
    important: true,
  },
};
