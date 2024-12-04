export interface SignUpParams {
  email: string;
  password: string;
  admin: boolean;
  job?: string; // Optional: name은 필수가 아닐 수 있음
  nickname?: string;
}

export interface UseFetchTokenDataParams {
  url: string;
  token?: string; // Optional: Authorization 토큰
}
