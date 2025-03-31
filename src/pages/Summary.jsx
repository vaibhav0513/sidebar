// import React from "react";

// const Summary = () => {
//   const studentDetails = {
//     name: "John Doe",
//     class: "12",
//     stream: "Science",
//     board: "CBSE",
//     school: "ABC Public School",
//     package: "Premium Plan",
//   };

//   const domains = [
//     { name: "Mathematics", score: 85, status: "Good" },
//     { name: "Physics", score: 78, status: "Average" },
//     { name: "Chemistry", score: 90, status: "Excellent" },
//     { name: "Biology", score: 82, status: "Good" },
//     { name: "English", score: 88, status: "Good" },
//     { name: "History", score: 75, status: "Average" },
//     { name: "Geography", score: 80, status: "Good" },
//     { name: "Computer Science", score: 95, status: "Excellent" },
//     { name: "Economics", score: 70, status: "Average" },
//     { name: "Psychology", score: 85, status: "Good" },
//   ];

//   return (
//     <div className="p-1">
//       <h1 className="text-2xl text-gray-400 font-bold mb-4">Summary</h1>
//       {/* Student Details & Package Card */}
//       <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6">
//         <h1 className="text-xl text-[#f1b963] font-bold mb-4">Profile</h1>
//         <hr className="my-4 border-gray-300" />
//         <div className="bg-white  rounded-lg p-3 mb-3 w-full flex flex-col md:flex-row gap-6">
//           {/* Student Details */}
//           <div className="w-full md:w-1/2 border border-gray-300 bg-gray-100 p-6 rounded-lg">
//             <h2 className="text-2xl  text-yellow-700 mb-4">Student Details</h2>
//             <p>
//               <strong>Name:</strong> {studentDetails.name}
//             </p>
//             <p>
//               <strong>Class:</strong> {studentDetails.class}
//             </p>
//             <p>
//               <strong>School:</strong> {studentDetails.school}
//             </p>
//           </div>
//           {/* Package Details */}
//           <div className="w-full md:w-1/2 border border-gray-300 bg-gray-100 p-6 rounded-lg">
//             <h2 className="text-2xl  text-yellow-700 mb-4">Package Details</h2>
//             <p>
//               <strong>Package Name:</strong> {studentDetails.package}
//             </p>
//             <p>
//               <strong>Price:</strong> {studentDetails.packagePrice}
//             </p>
//             <p>
//               <strong>Purchase Date:</strong> {studentDetails.purchaseDate}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Domain Scores Table */}
//       <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6">
//         <h1 className="text-xl text-[#f1b963] font-bold mb-4">Domain Scores</h1>
//         <hr className="my-4 border-gray-300" />
//         <div className="rounded-lg p-6 w-full">
//           <table className="w-full border-collapse border border-gray-900">
//             <thead>
//               <tr className="bg-gray-500">
//                 <th className="border border-gray-300 px-4 py-2">
//                   Domain Name
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2">Score</th>
//                 <th className="border border-gray-300 px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {domains.map((domain, index) => (
//                 <tr key={index} className="text-center border border-gray-300">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {domain.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 font-bold">
//                     {domain.score}
//                   </td>
//                   <td
//                     className={`border border-gray-300 px-4 py-2 font-bold ${
//                       domain.status === "Excellent"
//                         ? "text-green-600"
//                         : domain.status === "Good"
//                         ? "text-blue-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {domain.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* </div> */}
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Summary;


import React from "react";

const Summary = () => {
  const studentDetails = {
    name: "John Doe",
    class: "12",
    stream: "Science",
    board: "CBSE",
    school: "ABC Public School",
    package: "Premium Plan",
    packagePrice: "$199",
    purchaseDate: "March 1, 2025",
  };

  const domains = [
    { name: "Mathematics", score: 85, status: "Good" },
    { name: "Physics", score: 78, status: "Average" },
    { name: "Chemistry", score: 90, status: "Excellent" },
    { name: "Biology", score: 82, status: "Good" },
    { name: "English", score: 88, status: "Good" },
    { name: "History", score: 75, status: "Average" },
    { name: "Geography", score: 80, status: "Good" },
    { name: "Computer Science", score: 95, status: "Excellent" },
    { name: "Economics", score: 70, status: "Average" },
    { name: "Psychology", score: 85, status: "Good" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl text-gray-400 font-bold mb-4">Summary</h1>

      {/* Profile & Package Section */}
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-xl text-[#f1b963] font-bold mb-4">Profile</h1>
        <hr className="my-4 border-gray-300" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Details */}
          <div className="border border-gray-300 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-700 mb-4">Student Details</h2>
            <p><strong>Name:</strong> {studentDetails.name}</p>
            <p><strong>Class:</strong> {studentDetails.class}</p>
            <p><strong>School:</strong> {studentDetails.school}</p>
          </div>

          {/* Package Details */}
          <div className="border border-gray-300 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-700 mb-4">Package Details</h2>
            <p><strong>Package Name:</strong> {studentDetails.package}</p>
            <p><strong>Price:</strong> {studentDetails.packagePrice}</p>
            <p><strong>Purchase Date:</strong> {studentDetails.purchaseDate}</p>
          </div>
        </div>
      </div>

      {/* Domain Scores Table */}
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6">
        <h1 className="text-xl text-[#f1b963] font-bold mb-4">Domain Scores</h1>
        <hr className="my-4 border-gray-300" />

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-900 min-w-[600px]">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="border border-gray-300 px-4 py-2">Domain Name</th>
                <th className="border border-gray-300 px-4 py-2">Score</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((domain, index) => (
                <tr key={index} className="text-center border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{domain.name}</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">{domain.score}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 font-bold ${
                      domain.status === "Excellent" ? "text-green-600" :
                      domain.status === "Good" ? "text-blue-600" :
                      "text-red-600"
                    }`}
                  >
                    {domain.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
