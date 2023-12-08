import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'PulsaFi, Obtainable Credit For All',
  description: 'Website for PulsaFi',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="apple-touch-icon" sizes="180x180" href="/website/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/website/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/website/favicon-16x16.png" />
        <link rel="manifest" href="/website/site.webmanifest" />
        <link rel="mask-icon" href="/website/safari-pinned-tab.svg" color="#760e87" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
