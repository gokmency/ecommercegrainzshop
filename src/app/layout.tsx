import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'GRAINZ Shop - Web3 E-ticaret',
  description: 'GRAINZ Shop - Kripto para ile güvenli alışveriş. Web3 teknolojisi ile desteklenen modern e-ticaret deneyimi.',
  openGraph: {
    title: 'GRAINZ Shop - Web3 E-ticaret',
    description: 'Kripto para ile güvenli alışveriş yapın. USDC, ETH ve diğer kripto paralarla ödeme kabul ediyoruz.',
    images: [`${NEXT_PUBLIC_URL}/grainz-og.png`],
  },
  keywords: ['web3', 'e-ticaret', 'kripto', 'GRAINZ', 'blockchain', 'USDC', 'Coinbase'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
