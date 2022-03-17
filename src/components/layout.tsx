import React from 'react';
import GlobalNavigation from './navigation';
import Footer from './footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }) {
  return (
    <div className="relative pt-6 mx-10">
      <GlobalNavigation></GlobalNavigation>

      {children}

      {/* <Footer></Footer>*/}
    </div>
  );
}
