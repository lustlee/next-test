import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'This Customers Acme page',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Customers() {
  return (
    <p>Customers Page</p>
  );
};
