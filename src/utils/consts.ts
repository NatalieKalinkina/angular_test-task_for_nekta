export const DEVICES_REQ_DATA = {
  page: 1,
  last_page: 0,
  sort_field: 'id',
  sort: 'desc',
  search_string: null,
  device_state: 'all',
  is_archived: false,
  paginate: true,
  append_fields: ['active_polling', 'attributes', 'tied_point'],
  per_page: 10,
};

export const BASE_API_URL: string = 'https://core.nekta.cloud/api/';
