export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <span className="font-bold">Task Manager</span>
      {localStorage.getItem("token") && (
        <button onClick={handleLogout} className="bg-white text-blue-600 px-3 py-1 rounded">
          Logout
        </button>
      )}
    </nav>
  );
}
