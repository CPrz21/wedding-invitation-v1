import './globals.scss';

import type { Metadata } from 'next';

import { dosis } from '@app/fonts';

export const metadata: Metadata = {
  title: 'Boda Burgos Alvarado 🤵🏻‍♂️👰🏽‍♀️',
  description: 'Sé parte de nuestra boda 🎉 🍾',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={dosis.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
