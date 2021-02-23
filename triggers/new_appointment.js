const perform = (z, bundle) => {
  var appointments = [];
  let date_ob = new Date();
  let date = ('0' + (date_ob.getDate() + 10)).slice(-2);
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  let last_day = ('0' + date_ob.getDate()).slice(-2);
  let year = date_ob.getFullYear();
  var end_date = year + '-' + month + '-' + date;
  var start_date = year + '-' + month + '-' + last_day;
  const options = {
    url:
      'https://api.zenoti.com/v1/appointments?center_id=' +
      bundle.inputData.center_id +
      '&start_date=' +
      start_date +
      '&end_date=' +
      end_date +
      '&include_no_show_cancel=true',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'apikey ' + bundle.authData.api_key,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    for (var i = 0; i < results.length; i++) {
      if (results[i].status == bundle.inputData.status) {
        appointments.push(results[i]);
      }
    }
    // You can do any parsing you need for results here before returning them

    return appointments.map(function (e) {
      e.id = e.appointment_id;
      return e;
    });
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
      {
        key: 'status',
        type: 'string',
        label: 'Appointment Status',
        choices: [
          { sample: '-1', value: '-1', label: 'Cancelled' },
          { sample: '0', value: '0', label: 'New' },
          { sample: '1', value: '1', label: 'Closed' },
          { sample: '2', value: '2', label: 'Checkin' },
          { sample: '4', value: '4', label: 'Confirm' },
          { sample: '10', value: '10', label: 'Break' },
          { sample: '11', value: '11', label: 'NotSpecified' },
          { sample: '20', value: '20', label: 'Available' },
          { sample: '21', value: '21', label: 'Voided' },
          { sample: '-2', value: '-2', label: 'NoShow' },
        ],
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      appointment_id: '7d5bae12-691e-47cf-915b-3362dc4739ab',
      appointment_segment_id: null,
      appointment_group_id: '4c92b9c7-8eae-496d-ac9c-078f6444a987',
      invoice_id: '6095c888-fa9e-40c3-b138-bfe0660a69ce',
      service: {
        id: 'a04a3c82-60c0-4bcf-aee9-c1caa79fe40a',
        name: 'Ladies Cut & Finish',
        is_addon: false,
        has_addons: true,
        parent_appointment_id: null,
        business_unit: {
          guid: '4b7f8e8a-1959-4934-ac97-dce8c3aaa496',
          name: 'Default',
          id: 161,
        },
        category: {
          id: '23f205db-9707-4681-8262-fb22d316a3cc',
          name: 'Cut & Style',
        },
        sub_category: {
          id: '60660629-e880-4816-899b-7d9ffc96b71a',
          name: 'Cut & Style',
        },
        override_product_consumption: false,
        override_default_product_consumption: false,
      },
      start_time: '2020-09-16T08:00:00',
      start_time_utc: '2020-09-16T07:00:00',
      end_time: '2020-09-16T09:00:00',
      end_time_utc: '2020-09-16T08:00:00',
      status: 1,
      source: 0,
      progress: 0,
      locked: false,
      invoice_locked: false,
      has_active_membership_for_auto_pay: true,
      guest: {
        id: '1851ce47-657e-4558-9829-968c89930243',
        first_name: 'Ankita',
        last_name: 'Mehta',
        gender: 0,
        mobile: {
          country_id: 0,
          number: null,
          display_number: '+1 4255159553',
        },
        email: 'ankitam@zenoti.com',
        indicator: '0@0@0@0@0@0@0@x@0@0@1@0@2@0',
        lp_tier_info: '0@x',
        GuestIndicatorValue: null,
      },
      therapist: {
        id: '747d8bf2-ba3a-4c95-9eea-f91fc1cffbd4',
        first_name: 'Migrated',
        last_name: 'Employee',
        nick_name: null,
        display_name: null,
        email: 'noreply6@gmail.com',
        gender: -1,
        vanity_image_url: '',
      },
      room: null,
      equipment: null,
      service_custom_data_indicator: '0#0#0#0#0#0#0',
      notes: null,
      price: null,
      actual_start_time: null,
      actual_completed_time: null,
      checkin_time: null,
      therapist_preference_type: 0,
      form_id: null,
      blockout: null,
      creation_date: '2020-09-16T23:01:00',
      creation_date_utc: '2020-09-16T22:01:00',
      created_by_id: 'c5c1eb5a-9a20-49a5-999f-7f6bc6092060',
      closed_by_id: 'c5c1eb5a-9a20-49a5-999f-7f6bc6092060',
      show_in_calender: 1,
      email_link: null,
      sms_link: null,
      invoice_processed_in_integrations: 0,
      available_therapists: null,
      available_rooms: null,
      available_times: null,
      selected_therapist_id: null,
      selected_room_id: null,
      selected_time: '0001-01-01T00:00:00',
      requested_alternative: 0,
      group_invoice_id: null,
      group_name: null,
      canUpdateTherapist: true,
      package_id: '00000000-0000-0000-0000-000000000000',
      error: null,
      id: '7d5bae12-691e-47cf-915b-3362dc4739ab',
    },
    outputFields: [
      { key: 'appointment_id' },
      { key: 'appointment_segment_id' },
      { key: 'appointment_group_id' },
      { key: 'invoice_id' },
      { key: 'service__id' },
      { key: 'service__name' },
      { key: 'service__is_addon' },
      { key: 'service__has_addons' },
      { key: 'service__parent_appointment_id' },
      { key: 'service__business_unit__guid' },
      { key: 'service__business_unit__name' },
      { key: 'service__business_unit__id' },
      { key: 'service__category__id' },
      { key: 'service__category__name' },
      { key: 'service__sub_category__id' },
      { key: 'service__sub_category__name' },
      { key: 'service__override_product_consumption' },
      { key: 'service__override_default_product_consumption' },
      { key: 'start_time' },
      { key: 'start_time_utc' },
      { key: 'end_time' },
      { key: 'end_time_utc' },
      { key: 'status' },
      { key: 'source' },
      { key: 'progress' },
      { key: 'locked' },
      { key: 'invoice_locked' },
      { key: 'has_active_membership_for_auto_pay' },
      { key: 'guest__id' },
      { key: 'guest__first_name' },
      { key: 'guest__last_name' },
      { key: 'guest__gender' },
      { key: 'guest__mobile__country_id' },
      { key: 'guest__mobile__number' },
      { key: 'guest__mobile__display_number' },
      { key: 'guest__email' },
      { key: 'guest__indicator' },
      { key: 'guest__lp_tier_info' },
      { key: 'guest__GuestIndicatorValue' },
      { key: 'therapist__id' },
      { key: 'therapist__first_name' },
      { key: 'therapist__last_name' },
      { key: 'therapist__nick_name' },
      { key: 'therapist__display_name' },
      { key: 'therapist__email' },
      { key: 'therapist__gender' },
      { key: 'therapist__vanity_image_url' },
      { key: 'room' },
      { key: 'equipment' },
      { key: 'service_custom_data_indicator' },
      { key: 'notes' },
      { key: 'price' },
      { key: 'actual_start_time' },
      { key: 'actual_completed_time' },
      { key: 'checkin_time' },
      { key: 'therapist_preference_type' },
      { key: 'form_id' },
      { key: 'blockout' },
      { key: 'creation_date' },
      { key: 'creation_date_utc' },
      { key: 'created_by_id' },
      { key: 'closed_by_id' },
      { key: 'show_in_calender' },
      { key: 'email_link' },
      { key: 'sms_link' },
      { key: 'invoice_processed_in_integrations' },
      { key: 'available_therapists' },
      { key: 'available_rooms' },
      { key: 'available_times' },
      { key: 'selected_therapist_id' },
      { key: 'selected_room_id' },
      { key: 'selected_time' },
      { key: 'requested_alternative' },
      { key: 'group_invoice_id' },
      { key: 'group_name' },
      { key: 'canUpdateTherapist' },
      { key: 'package_id' },
      { key: 'error' },
      { key: 'id' },
    ],
  },
  key: 'new_appointment',
  noun: 'appointment',
  display: {
    label: 'New Appointment',
    description: 'TO get a newly created appointment',
    hidden: false,
    important: true,
  },
};
