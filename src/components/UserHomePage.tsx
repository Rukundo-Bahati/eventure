"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import UserCard from "./ui/UserCard";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

// Define the Event type
type Event = {
  id: string; // Assuming _id from MongoDB is used as a string
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
};

const UserHomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const bookSeat = (eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.seats > 0
          ? { ...event, seats: event.seats - 1 }
          : event
      )
    );
  };

  if (loading) {
    return <div className="text-center">Loading events...</div>; // Loading indicator
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen overflow-x-hidden w-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
        <Image
          src="/hat.png"
          alt="Events"
          fill
          className="absolute inset-0 opacity-20 object-cover"
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
          {events.length > 0 ? (
            events.map((event) => (
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
            ))
          ) : (
            <div className="col-span-3 text-center">No events available</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserHomePage;
