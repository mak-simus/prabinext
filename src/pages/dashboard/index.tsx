import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout';
import DashboardWidgets from '../../components/DashboardWidgets';

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();

    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [router]);

  if (!isAuthenticated) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <PageLayout title="Dashboard">
      <DashboardWidgets />
    </PageLayout>
  );
}
