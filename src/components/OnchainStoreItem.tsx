import type { Product } from 'src/types';
import Image from 'next/image';
import QuantityInput from './QuantityInput';

export default function OnchainStoreItem({ id, name, price, image, description, commerceId, currency }: Product) {
  const displayPrice = currency === 'TRY' ? `${price.toFixed(2)} TRY` : `${price.toFixed(2)} USDC`;
  
  return (
    <div className="store-item mx-auto flex w-full flex-col p-4 sm:mx-0 lg:p-6">
      <div className="mb-1 flex items-start justify-between">
        <h2 className="font-regular text-xs">{name}</h2>
        {commerceId && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Commerce
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-gray-600 mb-2">{description}</p>
      )}
      <div className="flex grow justify-center md:relative">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="mx-auto object-contain max-sm:max-w-[300px] md:absolute md:h-full md:w-auto"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-regular text-xs">{displayPrice}</p>
        <QuantityInput productId={id} />
      </div>
      
      {/* Hemen Al Butonu */}
      {commerceId && (
        <div className="mt-3 space-y-2">
          <a
            href={`https://commerce.coinbase.com/checkout/${commerceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0052FF] hover:bg-[#0041CC] text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1"
          >
            Satın Al
          </a>
          <p className="text-xs text-gray-500 text-center">ID: {commerceId.slice(0, 8)}...</p>
        </div>
      )}
    </div>
  );
}
