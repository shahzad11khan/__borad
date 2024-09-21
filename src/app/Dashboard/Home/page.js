"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { Chart, registerables } from "chart.js";
import Header from "../Components/Header.js";
import Sidebar from "../Components/Sidebar.js";
// import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { GrUserAdmin } from "react-icons/gr";
import { FaPeopleGroup, FaNotesMedical } from "react-icons/fa6";
import { RiFolderReceivedFill } from "react-icons/ri";
import HeroSection from "../Components/HeroSection";
const Page = () => {
  Chart.register(...registerables);
  const [counts, setCounts] = useState({
    admins: 0,
    team: 0,
    vacancies: 0,
    getInTouch: 0,
    requests: 0,
  });

  const router = useRouter();

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 70], // Sample data values
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [50, 65, 84, 65, 87, 46, 70], // Sample data values
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4 ">
        <Sidebar />
        <main className="w-full mt-5 ">
          <HeroSection />
          <section className="grid grid-cols-5 min-w-full justify-between gap-2 text-center rounded-xl">
            {[
              {
                icon: <GrUserAdmin size={30} />,
                title: "All Registered Companies",
                count: counts.admins,
                gradient: "bg-gradient-to-r from-blue-200 to-blue-700",
              },
              {
                icon: <FaPeopleGroup size={30} />,
                title: "Customers",
                count: counts.team,
                gradient: "bg-gradient-to-r from-green-700 to-green-400",
              },
              {
                icon: <FaCar size={30} />,
                title: "Vehicles",
                count: counts.vacancies,
                gradient: "bg-gradient-to-r from-red-400 to-red-200",
              },
              {
                icon: <TbReport size={30} />,
                title: "Reports",
                count: counts.getInTouch,
                gradient: "bg-gradient-to-r from-yellow-500 to-yellow-200",
              },
              {
                icon: <RiFolderReceivedFill size={30} />,
                title: "Requests",
                count: counts.requests,
                gradient: "bg-gradient-to-r from-purple-800 to-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`border-2 shadow-sm shadow-custom-blue rounded-md py-3 ${item.gradient}`}
              >
                <div className="flex items-center flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex flex-col items-center gap-2 justify-center">
                    <span>{item.icon}</span>
                    <span className="text-xs">{item.title}</span>
                  </div>
                  <span className="text-2xl">{item.count}</span>
                </div>
              </div>
            ))}
          </section>

          <section className="flex gap-4 min-w-full justify-between mt-4 ">
            {/* First Container - Customer Data */}
            <div className="flex flex-col w-3/6 bg-gray-100 p-4 rounded-md shadow">
              <h2 className="text-lg font-semibold mb-2">Messages</h2>
              <ul className="list-disc ml-5">
                <li className="flex items-center">
                  <img
                    src="/image.jpg" // replace with actual image path
                    alt="Oliver Smith"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <strong>Username: Oliver Smith</strong>
                  <p className="ml-4 text-sm">
                    Good morning! How’s everything going?
                  </p>
                </li>
                <li className="flex items-center mt-2">
                  <img
                    src="/image.jpg" // replace with actual image path
                    alt="Emily Johnson"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <strong> Emily Johnson</strong>
                  <p className="ml-4 text-sm">
                    Don’t forget our meeting this afternoon.
                  </p>
                </li>
                <li className="flex items-center mt-2">
                  <img
                    src="/image.jpg" // replace with actual image path
                    alt="James Wilson"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <strong> James Wilson</strong>
                  <p className="ml-4 text-sm">
                    I’ve forwarded the contract to you.
                  </p>
                </li>
                <li className="flex items-center mt-2">
                  <img
                    src="/image.jpg" // replace with actual image path
                    alt="Sophie Taylor"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <strong> Sophie Taylor</strong>
                  <p className="ml-4 text-sm">
                    Could we reschedule for tomorrow?
                  </p>
                </li>
              </ul>
            </div>

            {/* Second Container - User Table */}
            <div className="w-full bg-white p-4 rounded-md shadow">
              <h2 className="text-lg font-semibold mb-2">User Table</h2>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">User Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Is Active</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      username: "johndoe",
                      email: "john@example.com",
                      isActive: true,
                    },
                    {
                      username: "janesmith",
                      email: "jane@example.com",
                      isActive: false,
                    },
                    {
                      username: "michaelj",
                      email: "michael@example.com",
                      isActive: true,
                    },
                  ].map((user, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2">{user.username}</td>
                      <td className="border px-4 py-2">{user.email}</td>
                      <td className="border px-4 py-2">
                        {user.isActive ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
