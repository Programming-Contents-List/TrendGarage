import { createClient } from '@supabase/supabase-js';

const supabaseInstance = createClient(
  'https://bsrffkqymaqhwwqziqee.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcmZma3F5bWFxaHd3cXppcWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMTc5NzMsImV4cCI6MjA0ODY5Mzk3M30.1UKuqvG0Ls3WxLvNkAHRASWyv8Y8coIJKe0M9tZ8flA',
);

export default supabaseInstance;
