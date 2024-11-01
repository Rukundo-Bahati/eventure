"use client";

import React, { useState } from "react";
import Image from "next/image";
import UserCard from "./ui/UserCard";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

type Event = {
  id: number;
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
};

const UserHomePage = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Art Exhibition",
      description:
        "A showcase of contemporary art featuring local artists. Enjoy a day of creativity and inspiration.",
      seats: 150,
      date: "November 10, 2024",
      image: "https://picsum.photos/seed/picsum/300/200",
    },
    {
      id: 2,
      title: "Music Festival",
      description:
        "Join us for a day filled with live music from various genres and local bands.",
      seats: 200,
      date: "December 5, 2024",
      image: "https://picsum.photos/seed/music/300/200",
    },
    {
      id: 3,
      title: "Food Fair",
      description:
        "Taste delicious dishes from local food trucks and restaurants at our annual food fair.",
      seats: 100,
      date: "January 15, 2025",
      image: "https://picsum.photos/seed/food/300/200",
    },
    // Additional events...
  ]);

  const bookSeat = (eventId: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.seats > 0
          ? { ...event, seats: event.seats - 1 }
          : event
      )
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen overflow-x-hidden w-screen">

      <Navbar /> 

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
        <Image
          src="/hat.png"
          alt="Events"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-20"
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-2">Discover Amazing Events</h1>
          <p className="text-lg font-light mb-4">
            Explore, enjoy, and book your seat today!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            View All Events
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full max-w-screen-xl mt-12 p-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <UserCard
              key={event.id}
              title={event.title}
              description={event.description}
              seats={event.seats}
              date={event.date}
              image={event.image}
              onBookSeat={() => bookSeat(event.id)}
              isSoldOut={event.seats === 0}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserHomePage;
