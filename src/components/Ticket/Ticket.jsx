import { faPaperclip, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Ticket = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_location: "",
    customer_department: "",
    contact_person: "",
    contact_number: "",
    contact_mail: "",
    nature_of_call: "",
    ticket_type: "",
    domain: "",
    sub_domain: "",
    sla_priority: "",
    issue_nature: "",
    attachment: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost/TMS/backend/submit.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const result = await response.json();
  //     setSubmissionStatus({ success: true, message: result.message });

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   } catch (error) {
  //     setSubmissionStatus({
  //       success: false,
  //       message:
  //         "There was a problem with your fetch operation: " + error.message,
  //     });
  //   }
  // };
  const handleSubmit = () => {
    toast.success("Added");
  };
  return (
    <div className="bg-bgBlack max-w-full mx-auto p-1 overflow-y-auto h-full ticket-scroll font-poppins">
      <div className="max-w-5xl mt-0 bg-bgGray p-3 rounded-lg">
        <div>
          <p className="text-xl font-bold mb-2 text-white">New Ticket</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-name">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ml-2">
            <div className="mb-0 mr-4">
              <label className="block text-sm   mb-1">Name:</label>
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border border-[#2F2F2F] rounded-md shadow-sm outline-none"
                required
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Location:</label>
              <input
                type="text"
                name="customer_location"
                value={formData.customer_location}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Department:</label>
              <input
                type="text"
                name="customer_department"
                value={formData.customer_department}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Contact Person:</label>
              <input
                type="text"
                name="contact_person"
                value={formData.contact_person}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Contact No:</label>
              <input
                type="tel"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Email:</label>
              <input
                type="email"
                name="contact_mail"
                value={formData.contact_mail}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Nature of Call:</label>
              <input
                name="nature_of_call"
                value={formData.nature_of_call}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Type of Ticket:</label>
              <select
                name="ticket_type"
                value={formData.ticket_type}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-bgGray focus:ring-bgGray custom-select"
              >
                <option value="" className="custom-option">
                  Select Ticket Type
                </option>
                <option value="Incident" className="custom-option">
                  Incident
                </option>
                <option value="Request" className="custom-option">
                  Request
                </option>
                <option value="Problem" className="custom-option">
                  Problem
                </option>
                <option value="Change" className="custom-option">
                  Change
                </option>
              </select>
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Domain:</label>
              <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">Sub Domain:</label>
              <input
                type="text"
                name="sub_domain"
                value={formData.sub_domain}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-0 mr-4">
              <label className="block text-sm  mb-1">
                Nature of Issue (Description):
              </label>
              <textarea
                name="issue_nature"
                value={formData.issue_nature}
                onChange={handleChange}
                className="w-full bg-bgBlack p-1 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="mb-0 mr-4 flex justify-center items-center">
            <div className="w-[20vw] flex flex-col items-center justify-center border-gray-500 bg-bgBlack rounded-lg border-dotted border-[2px] p-3">
              {/* <FontAwesomeIcon icon={faPaperclip} /> */}
              {/* <FontAwesomeIcon icon={faUpload} /> */}
              <label className="block text-sm  mb-1 text-name font-poppins">
                Drag & Drop Your File Here
              </label>
              <p>OR</p>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                className="mt-2 ml-32 border-[#2F2F2F] rounded-md shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5FDD33] text-white py-2 px-4 rounded-md shadow-md focus:outline-none"
            >
              Submit
            </button>
          </div>
          {submissionStatus && (
            <div
              className={`mt-4 p-4 ${
                submissionStatus.success
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              } rounded-md`}
            >
              {submissionStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Ticket;
