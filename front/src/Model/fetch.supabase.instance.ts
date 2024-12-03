import { createClient } from '@supabase/supabase-js';

const supabaseInstance = createClient(
  process.env.REACT_APP_SUPABASE_URL as string, // .env 파일의 URL
  process.env.REACT_APP_SUPABASE_API_KEY as string, // .env 파일의 API Key
);

export default supabaseInstance;
