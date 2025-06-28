import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "ways-to-give", label: "Ways to Give" },
  { to: "become-sustainer", label: "Become a Sustainer" },
  { to: "signup", label: "Sign Up" },
  { to: "events", label: "Events" },
  { to: "employment", label: "Employment" },
];

export default function GetInvolvedLayout() {
  return (
    <div className="w-full px-4 mx-auto my-8">
      {/* Mobile: Horizontal nav at top */}
      <nav className="mb-6 lg:hidden">
        <div className="p-2 overflow-x-auto bg-white rounded-md shadow">
          <div className="flex space-x-2 min-w-max">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `whitespace-nowrap px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#143C2F] text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop: Flex layout with sidebar */}
      <div className="lg:flex lg:space-x-6">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside className="hidden lg:block w-64 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto rounded-md shadow p-4 space-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded relative hover:bg-gray-200 ${
                  isActive
                    ? "bg-[#143C2F] text-white font-semibold after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-white"
                    : "text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </aside>

        {/* Content */}
        <main className="flex-1 text-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
