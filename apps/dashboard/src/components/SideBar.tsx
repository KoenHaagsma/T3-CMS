import { useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';

import AuthSide from './AuthSide';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className="flex flex-col justify-between border-r w-fit min-h-screen relative">
      <section className="options"></section>
      <AuthSide collapsed={collapsed} />
      <div className="absolute right-[-1rem] bottom-0 top-0 flex items-center">
        <MdChevronLeft
          onClick={handleClick}
          size={32}
          className={`border bg-white my-1 cursor-pointer transition-all duration-200 ${
            collapsed && 'rotate-180'
          }`}
        />
      </div>
    </aside>
  );
};

export default SideBar;
