import { SignUp } from '../../components/sign-up';
import { Login } from '../../components/login';
import classes from './auth.module.scss';
import { useAuth } from '../../hooks/useAuth';

export const Auth = () => {
  const { isLoginPage } = useAuth();

  return (
    <main className='h-100vh d-flex align-items-center justify-content-center bg-light'>
      <div className={classes.hero}>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
        <div className={classes.cube}></div>
      </div>
      <div className={`${classes.card} shadow p-5 bg-white rounded`}>
        <h1 className='mb-5 text-2xl'>{isLoginPage ? 'Login.' : 'Sign up.'}</h1>
        {!isLoginPage && <SignUp />}
        {isLoginPage && <Login />}
      </div>
    </main>
  );
};
