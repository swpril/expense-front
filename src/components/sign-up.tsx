import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IAuthInput } from '../interfaces';
import { useAuth } from '../hooks/useAuth';

const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
});

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IAuthInput>({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });

  const onSubmit: SubmitHandler<IAuthInput> = data => console.log(data);

  const authCtx = useAuth();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-3'>
        <input
          placeholder='Email'
          className='w-100 py-2 text-lg form-control'
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className='text-red text-italic text-lg'>
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className='my-3'>
        <input
          className='py-2 w-100 text-lg form-control'
          placeholder='Password'
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className='text-red text-italic text-lg'>
            {errors.password?.message}
          </span>
        )}
      </div>
      <div className='my-3 text-lg'>
        Already have an account?
        <span
          tabIndex={0}
          aria-roledescription='button'
          className='text-primary cursor-pointer'
          onClick={authCtx.toggleAuthCard}>
          &nbsp;Login
        </span>
      </div>
      <button
        disabled={!isValid}
        className='btn btn-primary w-100 py-2 text-lg'
        type='submit'>
        Sign Up
      </button>
    </form>
  );
};
