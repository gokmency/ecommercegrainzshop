import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { OnchainStoreContextType } from '../types';
import jacketImage from '../images/jacket.png';
import airpodsImage from '../images/airpods.png';
import mugImage from '../images/mug.png';
import bottleImage from '../images/bottle.png';
import type { Product } from 'src/types';

const emptyContext = {} as OnchainStoreContextType;

const OnchainStoreContext =
  createContext<OnchainStoreContextType>(emptyContext);

type OnchainStoreProviderReact = {
  children: ReactNode;
};

const products: Product[] = [
  { 
    id: 'test-product', 
    name: 'testürünü', 
    price: 1.00, 
    image: jacketImage, // Geçici olarak mevcut resmi kullanıyoruz
    description: 'test ürünü açıklaması',
    commerceId: '1e39e95a-e7f2-466a-9b0e-ddbaf2c02a6f',
    currency: 'TRY'
  },
  { id: 'product1', name: `'BUILDER' JACKET`, price: 0.04, image: jacketImage },
  {
    id: 'product2',
    name: `'DND, I'M BUILDING' AIRPODS`,
    price: 0.01,
    image: airpodsImage,
  },
  {
    id: 'product3',
    name: `'CAFFEINATED TO BUILD' MUG`,
    price: 0.02,
    image: mugImage,
  },
  {
    id: 'product4',
    name: `'HYDRATED TO BUILD' BOTTLE`,
    price: 0.01,
    image: bottleImage,
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
