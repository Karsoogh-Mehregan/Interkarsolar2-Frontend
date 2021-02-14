const checkErrorsStatusCode = (response, jsonResponse) => {
  if (response.status === 500) {
    throw new Error('ایراد سروری رخ داده‌است! ما رو مطلع کنید.');
    // throw new Error('Internal Server Error! Contact Us!');
  }
  if (response.status === 404) {
    throw new Error('صفحه مورد نظر یافت نشد!');
    // throw new Error('Not Found!');
  }
  if (jsonResponse.res_code === 661) {
    throw new Error('توکن شما منقضی شده است!');
    // throw new Error('TOKEN EXPIRED');
  }
  // todo: confusing!
  if (response.status === 403 || jsonResponse.res_code === 601 || jsonResponse.res_code === 662 || jsonResponse.res_code === 663) {
    throw new Error('شما دسترسی ندارید!');
    // throw new Error('You don\'t have access!');
  }
  if (jsonResponse.res_code === 660) {
    throw new Error('نام کاربری یا کلمه‌ی عبور اشتباه است!');
  }
};

const fetchApi = async (url, fetchOptions) => {
  const response = await fetch(url, fetchOptions);
  const stringifiedResponse = await response.json();
  const jsonResponse = JSON.parse(stringifiedResponse);

  checkErrorsStatusCode(response, jsonResponse);
  if (!response.ok) {
    throw new Error(jsonResponse.message || 'error');
  }
  return jsonResponse;
};

export default fetchApi;
