const checkErrorsStatusCode = (response, jsonResponse) => {
  if (response.status === 500) {
    throw new Error('ایراد سروری رخ داده‌است! ما رو مطلع کنید.');
    // throw new Error('Internal Server Error! Contact Us!');
  }
  if (jsonResponse.res_code === 661 || jsonResponse.res_code === 662) {
    throw new Error('توکن شما منقضی شده است!');
    // throw new Error('TOKEN EXPIRED');
  }
  if (jsonResponse.res_code === 667) {
    throw new Error('نمیشه که نه متن بفرستی، نه فایل!');
  }
  // todo: confusing!
  if (response.status === 403 || jsonResponse.res_code === 601 || jsonResponse.res_code === 663) {
    throw new Error('شما دسترسی ندارید!');
    // throw new Error('You don\'t have access!');
  }
  // todo: show "this account doesn't exist" when attempting to login with no-existing account info
  if (jsonResponse.res_code === 660) {
    throw new Error('کد ملی یا کلمه‌ی عبور اشتباه است!');
  }

  if (jsonResponse.res_code === 668) {
    throw new Error('این شماره متعلق به این کد ملی نیست!');
  }

  if (jsonResponse.res_code === 800) {
    throw new Error('اکنون وقت آزمون نیست!');
  }
};

const fetchApi = async (url, fetchOptions) => {

  const response = await fetch(url, fetchOptions);
  let jsonResponse = await response.json();

  checkErrorsStatusCode(response, jsonResponse);
  if (!response.ok) {
    throw new Error(jsonResponse.message || 'error');
  }
  return jsonResponse;
};

export default fetchApi;
