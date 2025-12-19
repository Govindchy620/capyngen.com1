import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/authService";
import { assets } from "../../../assets/assets";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="w-full bg-[#0A1F44] border-b border-[#071830]">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* ✅ LOGO → HOME */}
        <Link to="/admin-dashboard" className="flex items-center gap-3">
          <img
            src={assets.capyngenLogo}
            alt="Capyngen Logo"
            className="h-12 md:h-20 object-contain"
          />
          {/* <span className="text-lg md:text-xl font-semibold text-white">
            Admin Panel
          </span> */}
        </Link>

        {/* ✅ LOGOUT */}
        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition text-[#0A1F44] text-lg font-semibold shadow"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
