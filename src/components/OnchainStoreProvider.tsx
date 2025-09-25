import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { OnchainStoreContextType } from '../types';
import type { Product } from 'src/types';

const emptyContext = {} as OnchainStoreContextType;

const OnchainStoreContext =
  createContext<OnchainStoreContextType>(emptyContext);

type OnchainStoreProviderReact = {
  children: ReactNode;
};

const products: Product[] = [
  { 
    id: 'grainz-phone-case', 
    name: 'GRAINZ iPhone Kılıfı', 
    price: 0.01, 
    image: '/images/image-1.jpg',
    description: 'Premium iPhone kılıfı - GRAINZ tasarımı ile özel üretim',
    commerceId: '961fa502-4c49-47c1-a310-7a6b6dd96edc',
    currency: 'USDC'
  },
  { 
    id: 'grainz-wireless-earbuds', 
    name: 'GRAINZ Wireless Kulaklık', 
    price: 0.02, 
    image: '/images/image-2.jpg',
    description: 'Yüksek kaliteli wireless kulaklık - Web3 teknolojisi ile geliştirildi',
    commerceId: 'be0f4658-f4c8-4277-b7b3-45cc3b36380b',
    currency: 'USDC'
  },
  {
    id: 'grainz-crypto-mug',
    name: 'GRAINZ Kripto Kupa',
    price: 0.03,
    image: '/images/image-3.jpg',
    description: 'Seramik kupa - Bitcoin ve Ethereum logoları ile özel tasarım',
    commerceId: '027453a3-3129-4321-95df-03db6122adcd',
    currency: 'USDC'
  },
  {
    id: 'grainz-water-bottle',
    name: 'GRAINZ Su Şişesi',
    price: 0.04,
    image: '/images/image-4.jpg',
    description: 'Çevre dostu su şişesi - GRAINZ logosu ile premium kalite',
    commerceId: '70315d15-30c1-4365-b382-de2d2545374a',
    currency: 'USDC'
  },
];

export function OnchainStoreProvider({ children }: OnchainStoreProviderReact) {
  const [quantities, setQuantities] = useState({});
  const value = useMemo(() => {
    return {
      quantities,
      setQuantities,
      products,
    };
  }, [quantities]);

  return (
    <OnchainStoreContext.Provider value={value}>
      {children}
    </OnchainStoreContext.Provider>
  );
}

export function useOnchainStoreContext() {
  return useContext(OnchainStoreContext);
}
