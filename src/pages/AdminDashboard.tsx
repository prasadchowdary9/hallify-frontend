
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Briefcase, Users, CalendarDays, Settings, PieChart, BarChart3, Building, LayoutGrid } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();

  // If not admin, redirect to regular dashboard
  if (!isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container mx-auto py-10 px-6">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your venue platform</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Admin Settings
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Venues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-3xl font-bold">156</span>
            </div>
            <p className="text-xs text-green-500 mt-2">↑ 12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-3xl font-bold">2,568</span>
            </div>
            <p className="text-xs text-green-500 mt-2">↑ 8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">New Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-3xl font-bold">412</span>
            </div>
            <p className="text-xs text-green-500 mt-2">↑ 18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-3xl font-bold">₹62.5L</span>
            </div>
            <p className="text-xs text-green-500 mt-2">↑ 15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tools */}
      <h2 className="text-xl font-semibold mb-6">Admin Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <Building className="h-8 w-8 text-orange-500" />
          <span>Manage Venues</span>
        </Button>
        
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <Users className="h-8 w-8 text-orange-500" />
          <span>Manage Users</span>
        </Button>
        
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <CalendarDays className="h-8 w-8 text-orange-500" />
          <span>Booking Management</span>
        </Button>
        
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <PieChart className="h-8 w-8 text-orange-500" />
          <span>Analytics Dashboard</span>
        </Button>
        
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <LayoutGrid className="h-8 w-8 text-orange-500" />
          <span>Featured Listings</span>
        </Button>
        
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-3">
          <Briefcase className="h-8 w-8 text-orange-500" />
          <span>Business Settings</span>
        </Button>
      </div>

      <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Admin Notice</h3>
        <p className="text-orange-700">
          This is a demo admin dashboard. In a real application, you would have access to manage users, venues, bookings, and other platform settings.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
