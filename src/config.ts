// Add your API key from Coinbase Commerce
export const COINBASE_COMMERCE_API_KEY =
  process.env.COINBASE_COMMERCE_API_KEY || '';
// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://onchain-commerce-template.vercel.app';
// Add your API KEY from the Coinbase Developer Portal
export const NEXT_PUBLIC_ONCHAINKIT_API_KEY =
  process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || '';

// Debug function to check API keys
export const checkApiKeys = () => {
  console.log('🔑 API Key Durumu:');
  console.log('OnchainKit API Key:', NEXT_PUBLIC_ONCHAINKIT_API_KEY ? '✅ Yüklendi' : '❌ Eksik');
  console.log('Commerce API Key:', COINBASE_COMMERCE_API_KEY ? '✅ Yüklendi' : '❌ Eksik');
  
  if (!NEXT_PUBLIC_ONCHAINKIT_API_KEY) {
    console.warn('⚠️ NEXT_PUBLIC_ONCHAINKIT_API_KEY eksik! .env.local dosyasına ekleyin');
  }
  
  if (!COINBASE_COMMERCE_API_KEY) {
    console.warn('⚠️ COINBASE_COMMERCE_API_KEY eksik! .env.local dosyasına ekleyin');
  }
};
