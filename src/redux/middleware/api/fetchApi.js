const checkErrorsStatusCode = (response, jsonResponse) => {
  if (response.status === 500) {
    throw new Error('ایراد سروری رخ داده‌است! ما رو مطلع کنید.');
    // throw new Error('Internal Server Error! Contact Us!');
  }
  if (response.status === 404) {
    throw new Error('صفحه مورد نظر یافت نشد!');
    // throw new Error('Not Found!');
  }
  if (response.status === 401 || jsonResponse.res_code === 661) {
    throw new Error('توکن شما منقضی شده است !');
    // throw new Error('TOKEN EXPIRED');
  }
  if (response.status === 403 || jsonResponse.res_code === 662) {
    throw new Error('شما دسترسی ندارید!');
    // throw new Error('You don\'t have access!');
  }
  if (jsonResponse.res_code === 660) {
    throw new Error('نام کاربری یا کلمه‌ی عبور اشتباه است!');
  }
};

const fetchApi = async (url, fetchOptions) => {
  console.log(fetchOptions)
  const response = await fetch(url, fetchOptions);
  const stringifiedResponse = await response.json();
  const jsonResponse = JSON.parse(stringifiedResponse);

  console.log(response);
  console.log(stringifiedResponse);
  console.log(jsonResponse)

  checkErrorsStatusCode(response, jsonResponse);
  if (!response.ok) {
    throw new Error(jsonResponse.message || 'error');
  }
  return jsonResponse;
};

export default fetchApi;
