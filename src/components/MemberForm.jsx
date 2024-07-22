"use client";
import axios from "axios";
import React, { useState } from "react";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    degree: "",
    enumber: "",
    year: "",
    email: "",
    tel: "",
    skills: "",
    whychoose: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
  
    try {
      // const response = await fetch('', {
      //   method: 'POST',
      //   body: JSON.stringify(formData), // Stringify the form data as JSON
      // });

      axios.post("https://script.google.com/macros/s/AKfycbyUvp-trhzrEv4cKxJ-jboGwlUo_EvD8qEQoIwHAucS3o11SuytkdY9Ap7yj5VQ9WmB/exec" , formData)
      .then((res) => {
        if(res.status === 200){
          setFormData({
            firstname: "",
            lastname: "",
            degree: "",
            enumber: "",
            year: "",
            email: "",
            tel: "",
            skills: "",
            whychoose: ""
          });
        }
      })
  
      // if (response.ok) {
      //   console.log('Form data submitted successfully.');
      //   // Clear form fields or show a success message
      //   setFormData({
      //     firstname: "",
      //     lastname: "",
      //     degree: "",
      //     enumber: "",
      //     year: "",
      //     email: "",
      //     tel: "",
      //     skills: "",
      //     whychoose: ""
      //   }); // Clear form fields after successful submission
      // } else {
      //   console.error('Failed to submit form data.');
      // }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <div className="relative flex items-top justify-center xl:min-h-[100vh] bg-white sm:items-center sm:pt-0 my-8 xl:my-0">
      <div className="max-w-6xl w-[90vw] xl:w-[900px] mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-1 bg-pink-300 rounded-xl bg-fixed bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('assets/images/bg/header-bg.svg')" }}>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center w-full">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Degree Programme"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mt-2">
                <input
                  type="text"
                  name="enumber"
                  id="enumber"
                  placeholder="Enrollment Number"
                  value={formData.enumber}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="Academic Year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="textarea"
                  name="skills"
                  id="skills"
                  placeholder="Your Skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="textarea"
                  name="whychoose"
                  id="whychoose"
                  placeholder="Why Choose Rotaract"
                  value={formData.whychoose}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="md:w-32 bg-[#831e49] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberForm;
// "use client";
// import { useState } from "react";

// const MemberForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     tel: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="relative flex items-top justify-center xl:min-h-[100vh] bg-white  sm:items-center sm:pt-0 my-8 xl:my-0">
//       <div className="max-w-6xl w-[90vw] xl:w-[900px] mx-auto sm:px-6 lg:px-8">
//         <div className="overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-1 bg-pink-300 rounded-xl bg-fixed bg-cover bg-no-repeat"
//           style={{ backgroundImage: "url('assets/images/bg/header-bg.svg')" }}>
//             <form
//               onSubmit={handleSubmit}
//               className="p-6 flex flex-col justify-center w-full"
//             >
//               <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
//                 <label htmlFor="name" className="hidden">
//                   Frist Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   id="firstname"
//                   placeholder="First Name"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//                 <input
//                   type="text"
//                   name="lastname"
//                   id="lastname"
//                   placeholder="Last Name"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col mt-2">
//                 <label htmlFor="email" className="hidden">
//                   Degree Programme
//                 </label>
//                 <input
//                   type="text"
//                   name="dgree"
//                   id="dgree"
//                   placeholder="Degree Programme"
//                   value={formData.dgree}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mt-2">
//                 <label htmlFor="enumber" className="hidden">
//                   Enrollment Number
//                 </label>
//                 <input
//                   type="text"
//                   name="enumber"
//                   id="enumber"
//                   placeholder="Enrollment Number"
//                   value={formData.enumber}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//                 <input
//                   type="text"
//                   name="year"
//                   id="year"
//                   placeholder="Acadamic Year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <div className="flex flex-col mt-2">
//                 <label htmlFor="email" className="hidden">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <div className="flex flex-col mt-2">
//                 <label htmlFor="tel" className="hidden">
//                   Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="tel"
//                   id="tel"
//                   placeholder="Telephone Number"
//                   value={formData.tel}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col mt-2">
//                 <label htmlFor="tel" className="hidden">
//                 Why Choose Rotaract
//                 </label>
//                 <input
//                   type="textarea"
//                   name="skills"
//                   id="skills"
//                   placeholder="Your Skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col mt-2">
//                 <label htmlFor="tel" className="hidden">
//                 Why Choose Rotaract
//                 </label>
//                 <input
//                   type="textarea"
//                   name="whychoose"
//                   id="whychoose"
//                   placeholder="Why Choose Rotaract"
//                   value={formData.whychoose}
//                   onChange={handleChange}
//                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-[#D51067]  font-semibold focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="md:w-32 bg-[#831e49] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberForm;
