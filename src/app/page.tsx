'use client';
import { useEffect } from 'react';
import OnchainStore from 'src/components/OnchainStore';
import { checkApiKeys } from 'src/config';

export default function Page() {
  useEffect(() => {
    // API key'leri console'da kontrol et
    checkApiKeys();
  }, []);

  return <OnchainStore />;
}
