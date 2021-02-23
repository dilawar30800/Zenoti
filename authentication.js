module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.zenoti.com/v1/centers',
    method: 'GET',
    params: {},
    headers: { Authorization: 'apikey {{bundle.authData.api_key}}' },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    { computed: false, key: 'api_key', required: true, label: 'API Key' },
  ],
  customConfig: {},
};
