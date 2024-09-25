"use client";
import React from "react";
import { Chart, registerables } from "chart.js";
import Header from "../Components/Header.js";
import Sidebar from "../Components/Sidebar.js";
// import { isAuthenticated } from "@/app/helper/verifytoken";
import { LuBarChart2 } from "react-icons/lu";
// import { useRouter } from "next/navigation";
import { CiWavePulse1 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { RiFolderReceivedFill } from "react-icons/ri";
import HeroSection from "../Components/HeroSection";
import Image from "next/image.js";
const Page = () => {
  Chart.register(...registerables);
  const counts = {
    admins: 0,
    team: 0,
    vacancies: 0,
    getInTouch: 0,
    requests: 0,
  };

  // const router = useRouter();

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
                icon: <LuBarChart2 size={30} />,
                title: "Companies",
                count: counts.admins,
                gradient: "bg-gradient-to-r",
                style: {
                  backgroundImage:
                    "linear-gradient(to right, #E64B87, #B35A9E)", // replace with your desired hex colors
                },
              },
              {
                icon: <FaChartLine size={30} />,

                title: "Customers",
                count: counts.team,
                gradient: "bg-gradient-to-r",
                style: {
                  backgroundImage:
                    "linear-gradient(to right, #8461BF, #4F4699)", // replace with your desired hex colors
                },
              },
              {
                icon: <CiWavePulse1 size={30} />,
                title: "Vehicles",
                count: counts.vacancies,
                gradient: "bg-gradient-to-r",
                style: {
                  backgroundImage:
                    "linear-gradient(to right, #47C2FF, #6893D8)", // replace with your desired hex colors
                },
              },
              {
                icon: <LuBarChart2 size={30} />,
                title: "Reports",
                count: counts.getInTouch,
                gradient: "bg-gradient-to-r",
                style: {
                  backgroundImage:
                    "linear-gradient(to right, #47C2FF, #6893D8)", // replace with your desired hex colors
                },
              },
              {
                icon: <RiFolderReceivedFill size={30} />,
                title: "Requests",
                count: counts.requests,
                gradient: "bg-gradient-to-r",
                style: {
                  backgroundImage:
                    "linear-gradient(to right, #FFB72D, #F38459)", // replace with your desired hex colors
                },
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`border-2 shadow-sm shadow-custom-blue rounded-md py-3 ${item.gradient}`}
                style={item.style}
              >
                <div
                  key={index}
                  className={`flex items-center flex-col sm:flex-row gap-4 justify-start ml-3 text-white ${item.gradient}`}
                  style={item.style}
                >
                  <div
                    className={`flex flex-col items-start gap-2 justify-start`}
                  >
                    <span className="text-xs">{item.title}</span>
                    <span className="text-start">{item.icon}</span>
                  </div>
                  <span className="text-2xl">
                    <stong> $</stong> {item.count}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="flex gap-4 min-w-full justify-between mt-4 ">
            {/* First Container - Customer Data */}
            <div className="flex flex-col w-3/6  p-4 rounded-md shadow">
              <h2 className="text-lg font-semibold mb-2">Drivers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Image
                    src="/image.jpg" // replace with actual image path
                    alt="John Smith"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <strong className="text-lg block">John Smith</strong>
                    <p className="text-sm text-gray-600">
                      Is the Driver of BMW.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Image
                    src="/image.jpg" // replace with actual image path
                    alt="Emma Johnson"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <strong className="text-lg block">Emma Johnson</strong>
                    <p className="text-sm text-gray-600">
                      Is the Driver of Honda.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Image
                    src="/image.jpg" // replace with actual image path
                    alt="David Brown"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <strong className="text-lg block">David Brown</strong>
                    <p className="text-sm text-gray-600">
                      Is the Driver of Toyota.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Second Container - User Table */}
            <div className="w-full bg-white p-4 rounded-md shadow">
              <h2 className="text-lg font-semibold mb-2">User Table</h2>
              <h2 className="text-xm text-gray-600 font-semibold mb-2">
                Register User In Website
              </h2>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white">
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
