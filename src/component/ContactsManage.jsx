
import { useState } from "react";

export default function ContactManager({addContact}) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    Phonenumber: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else if (e.target.email === "email") {
      setContactData({ ...contactData, email: e.target.value });
    } else {
      setContactData({ ...contactData, Phonenumber: e.target.value });
    }
  };

  const handleAdd = () => {
    if (
      contactData.name === "" ||
      contactData.email === "" ||
      contactData.Phonenumber === ""
    )
      alert("fill the all information");
    return;
  };

  addContact(contactData);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-4xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-3xl font-bold p-5 text-center rounded-lg shadow-md">
        Contact Manager
      </div>

      <div className="w-full max-w-4xl bg-white p-6 mt-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add New Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Full Name:</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              name="name"
              value={contactData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email Address:</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              name="Email"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Phone Number:</label>
            <input
              type="number"
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              name="Phonenumber"
              value={contactData.Phonenumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            className="px-4 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-2 focus:ring-purple-300"
            onClick={handleAdd}
          >
            + Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}









































// export default function ContactsManage(){
//     return (
//       <div className="flex justify-center bg-slate-200 h-screen w-screen">
//         {/* <div className="bg-red-500 w-[800px]">Hello</div> */}
//         <div className=" w-[800px] mt-10 bg-white h-[530px] rounded-lg">
//           <form>
//             <div className=" flex text-3xl justify-center items-center h-20 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">
//               Contact Manager
//             </div>

//             <div className="ml-8 ">
//               <p className="text-2xl font-bold mt-5 mb-3"> Add New Contact </p>

//               <div className="flex justify-between">
//                 <lebal className="text-xl "> Full Name : </lebal>
//                 <lebal className="text-xl  "> Email Address : </lebal>
//                 <lebal className="text-xl  "> Phone Number : </lebal>
//               </div>

//               <div className="flex justify-between">
//                 <input
//                   placeholder="Enter full name  "
//                   type="text"
//                   className="h-12  mt-3 mb-3 pl-5 border border-black  rounded-lg"
//                 />

//                 <input
//                   placeholder="Enter email address  "
//                   type="text"
//                   className="h-12  mt-3 pl-5 mb-3 border border-black  rounded-lg"
//                 />
//                 <input
//                   placeholder="Enter phone number"
//                   type="text"
//                   className="h-12  mt-3 pl-5 border border-black  rounded-lg"
//                 />
//               </div>
           

//               <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg mt-5">
//                 {" "}
//                 + Add Contact{" "}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* <div className="bg-blue-600 h-20  ">
//           <p className="text-white text-2xl flex justify-center ">
//             {" "}
//             Manage Contacts
//           </p>
//         </div>
//         <p className=" text-xl font-extrabold pl-10">Add Contact </p>
//         <form>
//           <div className="pl-10 mt-2">
//             <lebal className="text-lg">Name :</lebal>
//             <br />
//             <input
//               placeholder="enter name"
//               className="border border-black hover:border-[3px] w-60 h-8 "
//             />
//           </div>
//           <div className="pl-10 mt-3">
//             <lebal className="text-lg">Email :</lebal>
//             <br />
//             <input
//               placeholder="enter Email"
//               className="border border-black hover:border-[3px] w-60 h-8 "
//             />
//           </div>
//           <div className="pl-10 mt-5">
//             <button className="text-red-800 text-lg bg-teal-100 border hover:border-2 border-emerald-600  h-8 w-32">
//               {" "}
//               Add Contact{" "}
//             </button>
//           </div>
//         </form> */}
//       </div>
//     );
// };

