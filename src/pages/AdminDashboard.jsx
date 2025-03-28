
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Briefcase, 
  Users, 
  CalendarDays, 
  Settings, 
  PieChart, 
  BarChart3, 
  Building, 
  LayoutGrid,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddVenueForm from '@/components/admin/AddVenueForm';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

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
        {activeTab === 'overview' && (
          <Button onClick={() => setActiveTab('add-venue')}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Venue
          </Button>
        )}
        {activeTab !== 'overview' && (
          <Button variant="outline" onClick={() => setActiveTab('overview')}>
            Back to Overview
          </Button>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="add-venue">Add Venue</TabsTrigger>
          <TabsTrigger value="manage-venues">Manage Venues</TabsTrigger>
          <TabsTrigger value="manage-users">Manage Users</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
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
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center gap-3"
              onClick={() => setActiveTab('manage-venues')}
            >
              <Building className="h-8 w-8 text-orange-500" />
              <span>Manage Venues</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center gap-3"
              onClick={() => setActiveTab('manage-users')}
            >
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
              This is the admin dashboard. You can manage venues, users, bookings, and other platform settings from here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="add-venue">
          <AddVenueForm />
        </TabsContent>

        <TabsContent value="manage-venues">
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Manage Venues</h2>
            <p className="text-gray-600 mb-6">This section will allow you to view, edit, and delete existing venues.</p>
            <div className="text-center py-8">
              <p className="text-gray-500">Venue management functionality coming soon.</p>
              <Button onClick={() => setActiveTab('add-venue')} className="mt-4">
                Add New Venue Instead
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manage-users">
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Manage Users</h2>
            <p className="text-gray-600 mb-6">This section will allow you to view and manage user accounts.</p>
            <div className="text-center py-8">
              <p className="text-gray-500">User management functionality coming soon.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
