import { GITHUB_LINK, ONCHAINKIT_LINK } from 'src/links';
import { ExternalLinkSvg } from 'src/svg/ExternalLinkSvg';

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
          <p className="pt-2 pb-2 font-bold text-sm leading-relaxed">
            BUILD YOUR ONCHAIN STORE
          </p>
          <a
            href={GITHUB_LINK}
            className="flex cursor-pointer items-center"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm leading-relaxed">FORK THIS TEMPLATE</p>
            <span className="pl-1">
              <ExternalLinkSvg />
            </span>
          </a>
          <a
            href={ONCHAINKIT_LINK}
            className="flex cursor-pointer items-center pt-1"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm leading-relaxed">VIEW DOCS</p>
            <span className="pl-1">
              <ExternalLinkSvg />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
