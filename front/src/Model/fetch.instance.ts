/* eslint-disable no-param-reassign */
// fetch.instance에서만 no-param-reassign 규칙을 따르지 않게 설정
// 따로 Eslint로 규칙을 설정하면 가독성과 관리 유지성이 떨어진다.
import axios from 'axios';

const fetchInstance = axios.create({
  baseURL: process.env.REACT_APP_SUPABASE_URL as string, // Supabase 프로젝트 URL
  headers: {
    apikey: process.env.REACT_APP_SUPABASE_API_KEY as string, // Supabase API Key
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
fetchInstance.interceptors.request.use(
  (config) => {
    // 사이드 이펙트는 코드의 예상치 못한 동작의 원인으로 문제가 발생할 수 있기 때문에 매개변수를 복사해서 사용하면 원본 데이터는 안전하게 보호되며, 함수 호출부와 결과가 명확히 분리 시키는 것
    if (!config.headers) {
      config.headers = {} as axios.AxiosRequestHeaders; // headers가 없는 경우 초기화, 일부 상황에서 타입 충돌이 발생할 수 있습니다. 따라서 명시적으로 타입을 정의
    }

    // Authorization 헤더 설정
    if (!config.headers.Authorization) {
      config.headers.Authorization = '';
    }

    return config; // 원본 config 반환 (타입 충돌 없음)
  },
  (error) => Promise.reject(error),
);

export default fetchInstance;
