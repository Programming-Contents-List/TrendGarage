import { useEffect, useState } from 'react';
import fetchInstance from '../Model/fetch.instance';

const useFetchGetData = (url: string) => {
  const [isData, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // 로딩 시작
        const response = await fetchInstance.get(url);
        // setData(response.data); // 데이터 설정
        // 그냥 setData(response.data);를 사용할 수 있지만 response.data가 배열인 검증을 통해서 예외 처리를 할 수 있게 코드를 구현
        setData(Array.isArray(response.data) ? response.data : ['!No Array']); // 배열로 변환
        setSuccess(true); // 성공 상태
      } catch (error: any) {
        console.error('Get 요청 실패', error.message);
        setError(true); // 에러 상태
      } finally {
        setLoading(false); // 로딩 종료
      }
    };
    fetchData();
  }, [url]);
  return { isData, isLoading, isError, isSuccess };
};

export default useFetchGetData;
