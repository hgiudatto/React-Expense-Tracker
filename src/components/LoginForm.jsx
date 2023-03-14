import React from 'react';

export const LoginForm = ({ registerForm }) => {
  return (
    <>
      <div>{registerForm.nickname}</div>
      <div>{registerForm.email}</div>
      <div>{registerForm.zipcode}</div>
    </>
  );
};
