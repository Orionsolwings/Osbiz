import { useState } from 'react';
import Sidebar from "@layout/Sidebar";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
      const [collapsed, setCollapsed] = useState(false);

      const handlelogout = () => {
        localStorage.removeItem("isLogin");
        window.location.href = "/";
      }
  return (
 <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main 
        className={`flex-1 w-full overflow-x-hidden  transition-all duration-300 ${
          collapsed ? 'ml-4' : 'ml-44'
        }    max-lg:-ml-10` }
      >
        <div className='flex lg:justify-end  justify-between px-10 py-2 bg-white h-auto border-b border-gray-300 max-lg:px-5'>
                    <button
          type="button"
          className="lg:hidden p-2"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-sidebar-footer"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-sidebar-footer"
        >
           <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>
        </button>
        <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
<ul
  tabIndex={0}
  className="menu menu-sm dropdown-content text-xl bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-inter"
>
  <li>
    <Link to="/profile" className="text-base bg-transparent hover:bg-gray-100 focus:bg-primary-blue active:bg-primary-blue !active:bg-primary-blue">
      Profile
    </Link>
  </li>
  <li>
    <a className="text-base bg-transparent hover:bg-gray-100 focus:bg-primary-blue active:bg-primary-blue">
      Settings
    </a>
  </li>
  <li>
    <a className="text-base bg-transparent hover:bg-gray-100 focus:bg-primary-blue active:bg-primary-blue" onClick={handlelogout}>
      Logout
    </a>
  </li>
</ul>
    </div>
  </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;