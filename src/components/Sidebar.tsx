import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isCollapsed: boolean;
  isCmsOpen: boolean;
  toggleCms: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isCmsOpen, toggleCms }) => {
  const router = useRouter();

  const menuCategories = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
      href: '/dashboard',
    },
    {
      id: 'rates',
      label: 'Update Rates',
      icon: '💰',
      href: '/rates',
    },
    {
      id: 'rooms',
      label: 'Update Rooms',
      icon: '🏠',
      href: '/rooms',
    },
    {
      id: 'bulk',
      label: 'Bulk Update',
      icon: '📝',
      href: '/bulk-update',
    },
    {
      id: 'bookings',
      label: 'Live Bookings',
      icon: '📅',
      href: '/live-bookings',
    },
    {
      id: 'commissions',
      label: 'OTA Commissions',
      icon: '💵',
      href: '/commissions',
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: '✉️',
      href: '/messages',
    },
  ];

  return (
    <aside className={`
      bg-gray-900 text-white 
      ${isCollapsed ? 'w-16' : 'w-56'} 
      min-h-screen transition-all duration-300 ease-in-out
      flex flex-col
    `}>
      {/* Collapse Button */}
      <button
        onClick={toggleCms}
        className="w-full bg-primary h-16 hover:bg-primary-hover transition-colors flex items-center justify-center"
      >
        {isCollapsed ? '→' : '←'}
      </button>

      {/* CMS Button */}
      <button
        onClick={toggleCms}
        className="w-full bg-primary h-16 hover:bg-primary-hover transition-colors flex items-center justify-center"
      >
        {!isCollapsed && <span className="text-xs">Channel Manager & RMS</span>}
      </button>

      {/* Navigation Menu */}
      <nav className={`space-y-1 px-1 flex-grow ${isCmsOpen ? 'block' : 'hidden'}`}>
        {menuCategories.map((category) => (
          <div key={category.id} className="py-0.5">
            <Link
              href={category.href}
              className={`
                flex items-center px-2 py-1 rounded-md
                transition-all duration-200
                ${router.pathname === category.href ? 'bg-primary' : 'hover:bg-gray-700'}
                ${isCollapsed ? 'justify-center' : ''}
                text-gray-400
              `}
            >
              <span className={`text-xl ${!isCollapsed ? 'mr-1' : ''}`}>{category.icon}</span>
              {!isCollapsed && <span className="text-xs whitespace-nowrap">{category.label}</span>}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;