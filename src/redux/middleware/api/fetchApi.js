const checkErrorsStatusCode = (response, json_response) => {
  if (response.status === 500) {
    // throw new Error('ایراد سروری رخ داده‌است! ما رو مطلع کنید.');
    throw new Error('Internal Server Error! Contact Us!');
  }
  if (response.status === 404) {
    // throw new Error('صفحه مورد نظر یافت نشد!');
    throw new Error('Not Found!');
  }
  if (response.status === 401) {
    // throw new Error('توکن شما منقضی شده است!');
    throw new Error('TOKEN EXPIRED');
  }
  if (response.status === 403) {
    // throw new Error('شما دسترسی ندارید!');
    throw new Error('You don\'t have access!');
  }
};

const fetchApi = async (url, fetchOptions) => {
  console.log(fetchOptions)
  const response = await fetch(url, fetchOptions);
  const json_response = await response.json();
  checkErrorsStatusCode(response, json_response);
  if (!response.ok) {
    throw new Error(json_response.message || 'error');
  }
  return JSON.parse(json_response);
};

export default fetchApi;
