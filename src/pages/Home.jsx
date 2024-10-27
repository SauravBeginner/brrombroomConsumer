import React, { useEffect } from "react";
import { ChevronRight, Users, UserCircle, UserCircle2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import authService from "../appwrite/auth";
import { Button } from "../components/Button";

const Home = () => {
  //   useEffect(() => {
  //     authService
  //       .getTeamList()
  //       .then((response) => console.log("teamList", response));
  //   }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* <Button
        onClick={async () => {
          try {
            await authService.createTeam("consumer");
            alert("Team created successfully!");
          } catch (error) {
            console.error("Error creating team:", error);
            alert("Failed to create team.");
          }
        }}
      >
        Create Team
      </Button> */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Designed for Everyone in the Organisation
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Our features and benefits are curated to suit the needs of every
          employee using myBiz.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Travel Managers",
              subtitle: "Who manages company's travel expense",
              icon: <UserCircle2Icon className="h-12 w-12 text-red-500" />,
              features: [
                "Simplified Admin Panel to manage all employees and their expenses",
                "Detailed reports on regular basis to keep a track on your spends",
                "Dedicated Support Manager from myBiz to take care of your queries",
              ],
            },
            {
              title: "Central Bookers",
              subtitle: "Who books for employees",
              icon: <Users className="h-12 w-12 text-red-500" />,
              features: [
                "Book using the traveller's Policy to ensure the right options are booked",
                "Shortlist & share travel options to employees directly from myBiz",
                "Track your requests & get the job done from one single place",
              ],
            },
            {
              title: "Employees",
              subtitle: "Who travel for business",
              icon: <UserCircle className="h-12 w-12 text-red-500" />,
              features: [
                "Special Corporate Fares in flights to ensure you get more benefits at reduced price",
                "myBiz Assured Hotels for top-rated stay options",
                "Sanitized Cabs to safely pick & drop you to your destinations",
              ],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.subtitle}</p>
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-red-500 mt-4 font-semibold hover:underline">
                  KNOW MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Grab all the corporate benefits by creating your account now
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
              SIGN UP NOW
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
