import supabaseInstance from '../Model/fetch.supabase.instance';
import { SignUpParams } from '../Types/auth';

const fetchSignUp = async ({ email, password, admin, job, nickname }: SignUpParams) => {
  try {
    const { data, error } = await supabaseInstance.auth.signUp({
      email,
      password,
      options: {
        data: {
          // 사용자 정의 메타데이터로 전달
          admin,
          job,
          nickname,
        },
      },
    });

    // 구조할당으로 responseMessage를 보내는 이유는 이 구조로 호출하는 쪽에서 명확하게 responseMessage와 data를 구분해서 사용할 수 있게 하기 위함이다. 즉, 반환 값은 객체이기 때문이다.
    // 추가적으로 fetchSignup은 promise를 반환했다.

    if (error) {
      // error
      console.error('SignUp Error:', error);
      const errorMessage = error.message || 'Signup failed. Please try again.';
      return { responseMessage: errorMessage, data: undefined };
    }
    // 성공적인 경우
    const successMessage = 'Signup successful! Check your email for confirmation.';
    return { responseMessage: successMessage, data };

    // 예외가 발생할 경우
  } catch (error: any) {
    console.error('SignUp Error:', error);
    const catchMessage = error.message || 'An unexpected error occurred. Please try again.';
    return { responseMessage: catchMessage, data: undefined };
  }
};

export default fetchSignUp;
