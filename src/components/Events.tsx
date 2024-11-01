import Link from "next/link";

const Events: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-md p-10 w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome Back, Admin!
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Manage your events and settings efficiently.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">
              Total Events
            </h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">
              Registered Users
            </h3>
            <p className="text-3xl font-bold text-gray-900">250</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">
              Upcoming Events
            </h3>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Recent Activities
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                Created a new event: "Tech Conference 2023"
              </p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                Updated user information for John Doe
              </p>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                Deleted event: "Music Festival 2022"
              </p>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Events;