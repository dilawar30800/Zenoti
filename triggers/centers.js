const perform = (z, bundle) => {
  const options = {
    url: 'https://api.zenoti.com/v1/centers',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `apikey ${bundle.authData.api_key}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.centers;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: 'e5876438-b693-4ed0-8344-a9ba2994ee8c',
      code: 'RHL',
      name: 'Head Office',
      display_name: 'RUSH HAIR & BEAUTY',
      description: '',
      country: {
        id: 224,
        code: 'GB',
        name: 'United Kingdom',
        phone_code: 44,
        nationality: 'British',
      },
      state: { id: 2921, code: 'GBH9', name: 'London', short_name: '' },
      location: {
        lattitude: 0,
        longitude: 0,
        time_zone: {
          id: 36,
          name: '(UTC) Dublin, Edinburgh, Lisbon, London',
          standard_name: 'GMT Standard Time',
          symbol: 'GMT Standard Time',
        },
      },
      address_info: {
        address_1: '',
        address_2: '',
        city: 'Others',
        zip_code: '',
      },
      settings: null,
      contact_info: { phone_1: null, phone_2: null, email: '' },
      additional_info: {
        service_tax_no: '',
        tin: '',
        vat: '',
        cst: '',
        can_book: false,
        collect_feedback: true,
        services_available: true,
        available_services: null,
        unavailable_services: null,
        is_add_ons_available: false,
        feedback_link: '',
        feedback_label: '',
        is_auto_pay_enabled_at_center: false,
        cancellation_fee_duration: -1,
      },
      go_settings: {
        enable_self_checkin: false,
        enable_auto_pay: false,
        enable_self_pay: false,
        allow_self_checkin_before: 60,
        allow_self_checkin_within_radius: 100,
      },
    },
    outputFields: [
      { key: 'id' },
      { key: 'code' },
      { key: 'name' },
      { key: 'display_name' },
      { key: 'description' },
      { key: 'country__id' },
      { key: 'country__code' },
      { key: 'country__name' },
      { key: 'country__phone_code' },
      { key: 'country__nationality' },
      { key: 'state__id' },
      { key: 'state__code' },
      { key: 'state__name' },
      { key: 'state__short_name' },
      { key: 'location__lattitude' },
      { key: 'location__longitude' },
      { key: 'location__time_zone__id' },
      { key: 'location__time_zone__name' },
      { key: 'location__time_zone__standard_name' },
      { key: 'location__time_zone__symbol' },
      { key: 'address_info__address_1' },
      { key: 'address_info__address_2' },
      { key: 'address_info__city' },
      { key: 'address_info__zip_code' },
      { key: 'settings' },
      { key: 'contact_info__phone_1' },
      { key: 'contact_info__phone_2' },
      { key: 'contact_info__email' },
      { key: 'additional_info__service_tax_no' },
      { key: 'additional_info__tin' },
      { key: 'additional_info__vat' },
      { key: 'additional_info__cst' },
      { key: 'additional_info__can_book' },
      { key: 'additional_info__collect_feedback' },
      { key: 'additional_info__services_available' },
      { key: 'additional_info__available_services' },
      { key: 'additional_info__unavailable_services' },
      { key: 'additional_info__is_add_ons_available' },
      { key: 'additional_info__feedback_link' },
      { key: 'additional_info__feedback_label' },
      { key: 'additional_info__is_auto_pay_enabled_at_center' },
      { key: 'additional_info__cancellation_fee_duration' },
      { key: 'go_settings__enable_self_checkin' },
      { key: 'go_settings__enable_auto_pay' },
      { key: 'go_settings__enable_self_pay' },
      { key: 'go_settings__allow_self_checkin_before' },
      { key: 'go_settings__allow_self_checkin_within_radius' },
    ],
  },
  key: 'Centers',
  noun: 'center',
  display: {
    label: 'Centers',
    description: 'This will get all center of the app',
    hidden: true,
    important: false,
  },
};
