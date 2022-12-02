import { signIn } from 'next-auth/react';

const Auth = () => {
  return (
    <>
      <header></header>
      <section className="bg-white w-full flex justify-center items-center">
        <div>
          <button
            className="whitespace-nowrap w-fit py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-800 transition-all transition-100 text-white disabled:opacity-50"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      </section>
      <footer></footer>
    </>
  );
};

export default Auth;
