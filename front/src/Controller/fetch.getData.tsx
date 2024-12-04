import fetchInstance from '../Model/fetch.instance';

const fetchGetData = async (url: string) => {
  try {
    const response = await fetchInstance.get(url);
    return response.data;
  } catch (error: any) {
    console.error('Get 요청 실패', error.message);
    throw error;
  }
};

export default fetchGetData;
