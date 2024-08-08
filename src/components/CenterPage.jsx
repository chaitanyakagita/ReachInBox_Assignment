import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "./CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import DeletePopUp from "./DeletePopUp";

function CenterPage({ selectedThread }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState([]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("Token not found");
            return;
          }
          const res = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error.response ? error.response.data : error.message);
        }
      } else {
        setSelectedMail([]);
      }
    };

    fetchMail();
  }, [selectedThread, showDelete]);

  const togglePopUp = () => setShowPopUp(!showPopUp);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }
      await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowDelete(false);
      // Optionally, trigger a reload or update the list
    } catch (error) {
      console.error("Error deleting mail:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      const isTextInput =
        activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA" ||
        activeElement.isContentEditable;

      if (isTextInput) return;

      if (event.key === "d" || event.key === "D") {
        event.preventDefault();
        setShowDelete((prev) => !prev);
      }

      if (event.key === "r" || event.key === "R") {
        event.preventDefault();
        setShowPopUp((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="overflow-y-scroll no-scrollbar h-full">
      <div className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-4">
        <div>
          <div className="dark:text-white text-black text-lg">Orlando</div>
          <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">orladom@gmail.com</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-2 px-3 text-sm">
            <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
            Move <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
            ...
          </div>
        </div>
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full dark:bg-[#33383F] bg-[#E0E0E0]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-[#171819] bg-[#E0E0E0] px-4 py-1 text-sm text-black dark:text-white">
            Today
          </div>
        </div>
      </div>

      <div>
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-[#171819] bg-[#E0E0E0] text-black dark:text-white px-4 py-1 text-sm flex items-center space-x-1">
            <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
            <span className="text-blue-500">4</span> replies
          </div>
        </div>
      </div>

      <div className="mx-8">
        {showPopUp && (
          <CustomMail
            threadId={selectedThread}
            onClose={() => setShowPopUp(false)}
          />
        )}
      </div>
      <div
        className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2"
        onClick={togglePopUp}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>
      {showDelete && (
        <DeletePopUp
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

CenterPage.propTypes = {
  selectedThread: PropTypes.string.isRequired,
};

const Mail = ({ fromEmail, toEmail, subject, body, sentAt }) => {
  return (
    <div className="mb-4 p-4 border dark:border-[#33383F] border-[#E0E0E0] rounded-md">
      <div className="text-sm text-[#5B5F66] dark:text-[#A0A0A0]">
        {sentAt}
      </div>
      <div className="font-semibold dark:text-white text-black">{fromEmail}</div>
      <div className="text-sm text-[#5B5F66] dark:text-[#A0A0A0]">{toEmail}</div>
      <div className="mt-2 font-bold text-black dark:text-white">{subject}</div>
      <div className="mt-2 text-[#5B5F66] dark:text-[#A0A0A0]">{body}</div>
    </div>
  );
};

Mail.propTypes = {
  fromEmail: PropTypes.string.isRequired,
  toEmail: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sentAt: PropTypes.string.isRequired,
};

export default CenterPage;
