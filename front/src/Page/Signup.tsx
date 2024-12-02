import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fsrotjrwllkimiidizgk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcm90anJ3bGxraW1paWRpemdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMjgzMTQsImV4cCI6MjA0ODYwNDMxNH0.uiFog4O3BbOZhBC1z0LRFTtEE4p4z3PK5VQ5wKrRHzg',
);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name, // 사용자 정의 메타데이터로 전달
          },
        },
      });

      if (error) {
        throw error;
      } else {
        throw data;
      }

      setResponseMessage('Signup successful! Check your email for confirmation.');
    } catch (error: any) {
      setResponseMessage(error.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h1>Sign Up</h1>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button
        onClick={handleSignUp}
        type='button'
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Sign Up
      </button>
      {responseMessage && <p style={{ marginTop: '20px', color: 'red' }}>{responseMessage}</p>}
    </div>
  );
};

export default Login;
