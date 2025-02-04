import React from 'react';

const DashboardWidgets = () => {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Update Rates
            </button>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              New Booking
            </button>
          </div>
        </div>

        {/* Occupancy Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Occupancy Rate</h3>
          <div className="text-3xl font-bold text-green-600">78%</div>
          <p className="text-sm text-gray-600">Last 30 days</p>
        </div>

        {/* Revenue Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
          <div className="text-3xl font-bold text-indigo-600">$45,250</div>
          <p className="text-sm text-green-600">↑ 12% from last month</p>
        </div>
      </div>

      {/* Booking Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Active Rooms</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Rooms</span>
              <span className="font-bold">50</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Occupied</span>
              <span className="font-bold text-green-600">42</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Available</span>
              <span className="font-bold text-blue-600">8</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Upcoming Check-ins</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <div>
                <p className="font-semibold">Room 101</p>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
              <span className="text-sm text-gray-600">Today</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <div>
                <p className="font-semibold">Room 205</p>
                <p className="text-sm text-gray-600">Jane Smith</p>
              </div>
              <span className="text-sm text-gray-600">Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
