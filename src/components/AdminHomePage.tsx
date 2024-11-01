import React from "react";
import { Button } from "./ui/button";
import hat from "../../public/hat.png";
import Card from "./ui/Card";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <a
          href="#"
          className="flex flex-col items-center bg-blue-600 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-blue-700 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700 duration-200 text-white text-2xl"
        >
          <div className="flex flex-col justify-between p-6 leading-relaxed">
            <h5 className="mb-4 text-3xl font-bold tracking-tight text-white dark:text-white">
              Noteworthy Technology Acquisitions 2021
            </h5>
            <p className="mb-4 font-normal text-white dark:text-gray-400 text-lg">
              Enter the world of events. Discover the latest Events or start
              creating your own!
            </p>
            <div className="flex mt-4">
              <Button className="px-6 py-5 bg-white text-slate-600 text-lg hover:bg-transparent hover:border hover:text-white hover:border-white mx-4">
                Discover Now
              </Button>
              <Button className="px-6 py-5 bg-transparent border border-white text-lg text-white hover:bg-transparent">
                Watch Video
              </Button>
            </div>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-[400px] md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
            src={hat.src}
            alt="Noteworthy technology acquisitions"
          />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Art Exhibition"
          description=" A showcase of contemporary art featuring local artists. Enjoy a day of creativity and inspiration."
          seats="150"
          date="November 10, 2024"
          image="https://picsum.photos/seed/picsum/200/300"
        />
        <Card
          title="Tech Conference"
          description="Join industry leaders and innovators for discussions on the latest trends in technology and networking opportunities"
          seats="300"
          date="December 5, 2024"
             image="https://picsum.photos/seed/picsum/200/300"
        />
        <Card
          title="Music Festival"
          description=" A celebration of music with various genres, featuring live performances from popular bands and artists."
          seats="500"
          date=" January 20, 2025"
             image="https://picsum.photos/seed/picsum/200/300"
        />
        <Card
          title=" Charity Gala"  
           image="https://picsum.photos/seed/picsum/200/300"
          description=" Attend an elegant evening to support local charities. Enjoy dinner, entertainment, and an auction for a good cause."
          seats="2  00"
          date=" April 30, 2025"
        />
        <Card
          title="Outdoor Adventure"
          description=" Join us for a day of hiking and exploration in the beautiful national park, perfect for adventure enthusiasts."
          seats="40"
          date="March 15, 2025"
             image="https://picsum.photos/seed/picsum/200/300"
        />
        <Card
          title=" Food & Wine Tasting"
          description="Experience a delightful evening of gourmet food and exquisite wine pairings, hosted by renowned chefs."
          seats="75"
          date="February 14, 2025"
             image="https://picsum.photos/seed/picsum/200/300"
        />
      </div>
    </div>
  );
};

export default AdminHomePage;
