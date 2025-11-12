import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();

  const tabs = [
    { name: "Gallery", path: "/gallery" },
    { name: "Features", path: "/features" },
    { name: "Symbols", path: "/symbols" },
  ];

  return (
    <div className="bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-3">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                location.pathname === tab.path
                  ? "bg-gradient-to-br from-primary via-secondary to-primary text-primary-content shadow-lg"
                  : "bg-base-200 hover:bg-base-300 text-base-content"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
