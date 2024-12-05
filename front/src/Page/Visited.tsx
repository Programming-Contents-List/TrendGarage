import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetchGetData from '../Controller/fetch.Hook.getData';

const Visited = () => {
  const { isData, isLoading, isError, isSuccess } = useFetchGetData(
    `${process.env.REACT_APP_SUPABASE_URI}/guestbook`,
  );
  const [isResMessage, setResMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    console.log('Updating ResMessage...');
    if (isLoading) {
      console.log('Loading...');
      setResMessage('Loading 중입니다.');
    } else if (isError) {
      console.log('Error occurred:', isError);
      setResMessage(`Fetch !Error : ${isError}`);
    } else if (isSuccess && isData) {
      console.log('Success with data:', isData);
      setResMessage(`Fetch Success: ${JSON.stringify(isData)}`);
    } else if (isSuccess) {
      // isSuccess지만 isData가 없는 경우
      console.log('Fetch Success: No DATA.(っ °Д °;)っ');
      setResMessage('Fetch Success: No DATA.(っ °Д °;)っ');
    }
  }, [isData, isLoading, isError, isSuccess]);

  return (
    <div className='flex items-center justify-center min-h-screen mt-32'>
      {/* max-w-md || mx-auto w-96 */}
      <div className='flex flex-col w-6/12'>
        {/* p-4 bg-white rounded shadow-md */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-3xl mb-9'>방명록 ヾ(•ω•`)o</div>
          <div className='flex flex-col mb-5'>
            <textarea
              {
                // 유효성 검사
                ...register('message', {
                  required: '방명록 내용을 입력해주세요.',
                  minLength: {
                    value: 5,
                    message: '내용은 최소 5자 이상이어야 합니다.',
                  },
                })
              }
              rows={4}
              placeholder='방명록을 적어주세요~(〜￣▽￣)〜'
              className='w-full p-2 border-2 rounded-md'
            />
            {/* 에러 메시지 표시 */}
            {/* typeof나 타입 단언(Type Assertion)을 사용하여 errors.message?.message가 string임을 명시적으로 알려주어야 한다. */}
            <div className='flex justify-end text-gray-300'>
              <span>0</span>/<span>100</span>
            </div>
            {errors.message?.message && (
              <p className='mt-1 text-sm text-red-500'>
                {typeof errors.message.message === 'string' ? errors.message.message : ''}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            등록 (ง •_•)ง
          </button>
        </form>
        <div>
          {/* <div>전체 댓글</div> */}
          {isData.map((el) => {
            return (
              <div key={el.id} className='p-5 border-2 rounded-md mb-9'>
                <div className=''>{el.message}</div>
                <div className='flex justify-end w-full mt-4'>
                  <div className='flex justify-between w-20 text-gray-500'>
                    <span className='cursor-pointer hover:text-blue-500'>수정</span>
                    <span className='cursor-pointer hover:text-blue-500'>삭제</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Visited;
