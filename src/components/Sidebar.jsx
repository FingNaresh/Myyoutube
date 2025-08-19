import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Reusable Menu Item Component
const MenuItem = ({ icon, label, to }) => {
  const content = (
    <li className="flex items-center cursor-pointer mb-2 hover:text-red-500 transition">
      <span className="mr-2">{icon}</span>
      {label}
    </li>
  );
  return to ? <Link to={to}>{content}</Link> : content;
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  // Menu Groups
  const mainMenu = [
    { label: "Home", to: "/", icon: "🏠" },
    { label: "Shorts", icon: "🎬" },
    { label: "Videos", icon: "📹" },
  ];

  const subscriptions = [
    { label: "Music", icon: "🎵" },
    { label: "Sports", icon: "⚽" },
    { label: "Gaming", icon: "🎮" },
    { label: "Movies", icon: "🎥" },
  ];

  const watchLater = [
    { label: "Music", icon: "🎵" },
    { label: "Sports", icon: "⚽" },
    { label: "Gaming", icon: "🎮" },
    { label: "Movies", icon: "🎥" },
  ];

  return (
    <div className="p-4 shadow-lg h-screen sticky top-20 text-md w-48 bg-white">
      {/* Main Menu */}
      <ul className="font-semibold text-lg">
        {mainMenu.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </ul>

      {/* Subscription Section */}
      <h1 className="font-bold pt-5 text-lg">Subscription</h1>
      <ul className="my-2 text-lg">
        {subscriptions.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </ul>

      {/* Watch Later Section */}
      <h1 className="font-bold pt-5 text-lg">Watch Later</h1>
      <ul className="my-2 text-lg">
        {watchLater.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
