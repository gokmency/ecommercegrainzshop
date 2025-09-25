export default function OnchainStoreSummary() {
  return (
    <div className="flex flex-col justify-center border-gray-200 border-b p-4 py-8 pb-22 md:w-1/3 md:border-r md:border-b-0 md:py-4 lg:border-r lg:p-6 lg:pb-22">
      <div className="space-y-4 text-left">
        <h2
          className="font-bold text-3xl leading-tight"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: 'condensed',
          }}
        >
          <span className="text-[#0052FF]">GRAINZ</span> ile Web3 alışverişin geleceğini yaşayın.
        </h2>
        <p className="text-sm leading-relaxed">
          Kripto para ile güvenli, hızlı ve düşük komisyonlu alışveriş deneyimi. 
          Geleneksel ödeme sistemlerinin yüksek ücretlerinden kurtulun.
        </p>
        <p className="text-sm leading-relaxed">
          USDC, ETH ve diğer kripto paralarla anında ödeme yapın. 
          Blockchain teknolojisinin gücüyle desteklenen modern e-ticaret.
        </p>
        <div className="flex flex-col pt-6">
          <div className="bg-gradient-to-r from-[#0052FF] to-[#00D2FF] p-4 rounded-lg text-white">
            <h3 className="font-bold text-lg mb-2">🚀 GRAINZ Shop Avantajları</h3>
            <ul className="text-sm space-y-1">
              <li>• %0 komisyon - Geleneksel ödemelerden tasarruf</li>
              <li>• Anında onay - Blockchain hızında işlem</li>
              <li>• Global erişim - Dünya çapında ödeme</li>
              <li>• Güvenli altyapı - Coinbase teknolojisi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
