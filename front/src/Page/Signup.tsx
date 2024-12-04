import React, { useState } from 'react';
import fetchSignUp from '../Controller/fetch.signup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [job, setJob] = useState('');
  const [nickname, setNickName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSignUp = async () => {
    const { responseMessage } = await fetchSignUp({
      email,
      password,
      admin,
      job,
      nickname,
    });
    setResponseMessage(responseMessage);
  };

  return (
    <div className='max-w-md p-5 mx-auto'>
      <h1 className='mb-5 text-2xl font-bold'>Sign Up</h1>
      {/* Nickname */}
      <input
        type='text'
        placeholder='nickname'
        value={nickname}
        onChange={(e) => setNickName(e.target.value)}
        className='block w-full p-2 mb-3 border border-gray-300 rounded'
      />
      {/* Job */}
      <select
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className='block w-full p-2 mb-3 border border-gray-300 rounded'
      >
        <option value=''>Select your job</option>
        <option value='Front-Developer'>프론트 개발자</option>
        <option value='Back-Developer'>백엔드 개발자</option>
        <option value='Full-Developer'>풀스택 개발자</option>
        <option value='Designer'>디자이너</option>
        <option value='Manager'>기획자</option>
        <option value='Student'>학생</option>
      </select>
      {/* Email */}
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='block w-full p-2 mb-3 border border-gray-300 rounded'
      />
      {/* Password */}
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='block w-full p-2 mb-3 border border-gray-300 rounded'
      />
      {/* Sign Up Button */}
      <button
        onClick={handleSignUp}
        type='button'
        className='w-full p-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-600'
      >
        Sign Up
      </button>
      {responseMessage && <p className='mt-5 text-red-500'>{responseMessage}</p>}
    </div>
  );
};

export default Signup;
