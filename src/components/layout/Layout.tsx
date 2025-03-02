
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileNavigation } from './Header';
import { SidebarProvider } from '@/components/ui/sidebar';

export const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        
        <div className="flex-1 lg:ml-16 transition-all duration-300">
          {/* Page content wrapper with padding adjustments for mobile header and navigation */}
          <main className="min-h-screen page-transition pt-16 pb-16 lg:pt-0 lg:pb-0 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
        
        <MobileNavigation />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
