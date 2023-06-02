/** @format */

import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Welcome, {session.user.name} <br />
        <button onClick={() => signOut()}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }
};

export default Login;
