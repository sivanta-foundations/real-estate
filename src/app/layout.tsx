import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Real Estate Website',
  description: 'Find your dream home with our real estate listings',
  keywords: 'real estate, homes, properties, buy, sell',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <h1>Welcome to Your Real Estate Website</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Real Estate Website</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;