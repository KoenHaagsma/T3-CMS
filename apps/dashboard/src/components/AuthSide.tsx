import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { MdLogin, MdLogout } from 'react-icons/md';

import { trpc } from '@utils';

type AuthProps = {
  collapsed: boolean;
};

const AuthSide = ({ collapsed }: AuthProps) => {
  const { data: session } = trpc.auth.getSession.useQuery();
  return (
    <div
      className={`${
        collapsed || !session ? 'w-16' : 'w-48'
      } py-2 px-4 border-t flex items-center justify-between transition-all duration-100`}
    >
      {session && (
        <Image
          className={`rounded-full ${!collapsed && 'mr-2'}`}
          alt=""
          src={`${session?.user.image}`}
          width={32}
          height={32}
        />
      )}
      {session && !collapsed && <p className="mr-4">{session.user.name}</p>}
      {!collapsed && (
        <button
          className=""
          onClick={session ? () => signOut() : () => signIn()}
        >
          {!session ? <MdLogin size={24} /> : <MdLogout size={24} />}
        </button>
      )}
    </div>
  );
};

export default AuthSide;
