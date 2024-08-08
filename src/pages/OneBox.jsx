import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tokenFromUrl = queryParams.get("token");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (tokenFromUrl) {
      // Store the token in localStorage with the Bearer prefix
      localStorage.setItem("token", `Bearer ${tokenFromUrl}`);
      navigate('/'); // Navigate to the main page after setting the token
    } else if (!storedToken) {
      navigate("/login");
    }
  }, [tokenFromUrl, navigate]);

  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "/search":
      case "/mail":
      case "/send":
      case "/stack":
      case "/stacks":
        return <SubView />;
      case "/inbox":
        return <MainPage />;
      default:
        return <SubView />;
    }
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      {renderSelectedComponent()}
    </div>
  );
}

export default OneBox;
