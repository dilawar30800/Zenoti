const perform = (z, bundle) => {
  var first_name = '';
  var last_name = '';
  var zip_code = '';
  var phone = '';
  var tags = '';
  var user_name = '';
  var user_code = '';
  var email = '';
  if (bundle.inputData.email != null) {
    email = bundle.inputData.email;
  }
  if (bundle.inputData.user_code != null) {
    user_code = bundle.inputData.user_code;
  }

  if (bundle.inputData.user_name != null) {
    user_name = bundle.inputData.user_name;
  }
  if (bundle.inputData.tags != null) {
    tags = bundle.inputData.tags;
  }
  if (bundle.inputData.phone != null) {
    phone = bundle.inputData.phone;
  }
  if (bundle.inputData.zip_code != null) {
    zip_code = bundle.inputData.zip_code;
  }
  if (bundle.inputData.last_name != null) {
    last_name = bundle.inputData.last_name;
  }
  if (bundle.inputData.first_name != null) {
    first_name = bundle.inputData.first_name;
  }
  const options = {
    url:
      'https://api.zenoti.com/v1/guests/search?center_id=' +
      bundle.inputData.center_id +
      '&first_name=' +
      first_name +
      '&last_name=' +
      last_name +
      '&zip_code=' +
      zip_code +
      '&phone=' +
      phone +
      '&tags=' +
      tags +
      '&user_name=' +
      user_name +
      '&email=' +
      email +
      '&expand=tags&expand=address_info&expand=preferences&expand=referral&expand=primary_employee',
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

    return results.guests;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'center_id',
        label: 'Center',
        type: 'string',
        dynamic: 'centers.id.display_name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'first_name',
        label: 'First Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'last_name',
        label: 'Last Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'zip_code',
        label: 'Zip Code',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'phone',
        label: 'Phone',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'tags',
        label: 'Tags',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'user_name',
        label: 'Username',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'user_code',
        label: 'User Code',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'email',
        label: 'Email',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: '06D1A9D2-BCC1-424A-86F4-BC38A4166A0B',
      code: 'BAS-G669152',
      center_id: 'e4f7b45c-f66e-489a-be37-f8a472618fd4',
      created_date: '2020-06-07T18:53:13',
      personal_info: {
        user_name: 'osano.maissie@yahoo.co.uk',
        first_name: 'Maissie',
        last_name: 'Osano',
        middle_name: '',
        email: 'Osano.maissie@yahoo.co.uk',
        mobile_phone: { country_code: 224, number: '07903624233' },
        work_phone: null,
        home_phone: null,
        gender: 0,
        date_of_birth: null,
        is_minor: false,
        nationality_id: -1,
        anniversary_date: null,
        lock_guest_custom_data: false,
        pan: '',
      },
      address_info: {
        address_1: '',
        address_2: '',
        city: '',
        country_id: 224,
        state_id: -2,
        state_other: '',
        zip_code: 'CT27UF',
      },
      preferences: {
        receive_transactional_email: true,
        receive_transactional_sms: true,
        receive_marketing_email: false,
        receive_marketing_sms: true,
        recieve_lp_stmt: true,
        preferred_therapist: null,
        opt_in_for_loyalty_program: false,
        lp_enrollment_status: false,
      },
      tags: null,
      referral: {
        referral_source: {
          id: '63490976-c248-47c2-9ecf-ef52b080c4c2',
          name: 'Online Bookings',
        },
        referred_by: null,
      },
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
      { key: 'address_info__address_1' },
      { key: 'address_info__address_2' },
      { key: 'address_info__city' },
      { key: 'address_info__country_id' },
      { key: 'address_info__state_id' },
      { key: 'address_info__state_other' },
      { key: 'address_info__zip_code' },
      { key: 'preferences__receive_transactional_email' },
      { key: 'preferences__receive_transactional_sms' },
      { key: 'preferences__receive_marketing_email' },
      { key: 'preferences__receive_marketing_sms' },
      { key: 'preferences__recieve_lp_stmt' },
      { key: 'preferences__preferred_therapist' },
      { key: 'preferences__opt_in_for_loyalty_program' },
      { key: 'preferences__lp_enrollment_status' },
      { key: 'tags' },
      { key: 'referral__referral_source__id' },
      { key: 'referral__referral_source__name' },
      { key: 'referral__referred_by' },
      { key: 'primary_employee' },
    ],
  },
  key: 'Search_a_guest',
  noun: 'guest',
  display: {
    label: 'Search A Guest',
    description: 'To search a guest form zenoti',
    hidden: false,
    important: true,
  },
};
