import axios from "axios";
import img from "../assets/i.svg";
import { useEffect, useState } from "react";

function SubView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const call = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token not found");
          return;
        }
        await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Error during reset:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    call();
  }, []);

  if (loading) {
    return (
      <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen">
        Loading ...
      </div>
    );
  }

  return (
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
      <div>
        <img src={img} alt="Illustration" />
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;
