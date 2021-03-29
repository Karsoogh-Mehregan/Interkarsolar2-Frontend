const checkErrorsStatusCode = (response, jsonResponse) => {
  if (response.status === 500) {
    throw new Error('ایراد سروری رخ داده‌است! ما رو مطلع کنید.');
    // throw new Error('Internal Server Error! Contact Us!');
  }
  if (response.status === 404) {
    throw new Error('صفحه مورد نظر یافت نشد!');
    // throw new Error('Not Found!');
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
};

const fetchApi = async (url, fetchOptions) => {
  const response = await fetch(url, fetchOptions);
  let stringifiedResponse = await response.json();
  stringifiedResponse = stringifiedResponse.replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
  stringifiedResponse = stringifiedResponse.replace(/[\u0000-\u0019]+/g, "");


  console.log(stringifiedResponse);


  const jsonResponse = JSON.parse(stringifiedResponse);


  console.log(jsonResponse);


  checkErrorsStatusCode(response, jsonResponse);
  if (!response.ok) {
    throw new Error(jsonResponse.message || 'error');
  }
  return jsonResponse;
};

export default fetchApi;
