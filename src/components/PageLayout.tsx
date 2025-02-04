import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCmsOpen, setIsCmsOpen] = useState(true); // Keep CMS open by default

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleCms = () => {
    setIsCmsOpen(!isCmsOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} isCmsOpen={isCmsOpen} toggleCms={toggleCms} />
      <div className="flex-1 bg-gray-200">
        <Header onToggleSidebar={handleToggleSidebar} />
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
