import { NavLink } from "react-router-dom";
import { useActivePath } from "../../hooks/useActivePath";
import { cn } from "../../lib/utils";

export const Menu = () => {
  const { isActive } = useActivePath();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
      <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
        <NavLink
          to="/"
          className={cn(
            "inline-flex flex-col items-center justify-center px-5 text-gray-500",
            {
              "text-blue-500": isActive("/"),
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-home text-current"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-sm text-current">Home</span>
        </NavLink>

        <NavLink
          to="/invite-friends"
          className={cn(
            "inline-flex flex-col items-center justify-center px-5 text-gray-500",
            {
              "text-blue-500": isActive("/invite-friends"),
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users text-current"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-sm text-current">Invite friends</span>
        </NavLink>
      </div>
    </div>
  );
};
