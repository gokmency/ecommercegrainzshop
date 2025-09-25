export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* GRAINZ Shop Info */}
          <div>
            <h3 className="font-bold text-lg text-[#0052FF] mb-3">GRAINZ Shop</h3>
            <p className="text-sm text-gray-600 mb-4">
              Web3 teknolojisi ile desteklenen modern e-ticaret deneyimi. 
              Kripto para ile güvenli, hızlı ve düşük komisyonlu alışveriş.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/grainzeth" className="text-gray-400 hover:text-[#0052FF] transition-colors">
                Twitter
              </a>
              <a href="https://github.com/gokmency/ecommercegrainzshop" className="text-gray-400 hover:text-[#0052FF] transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-gray-600 hover:text-[#0052FF] transition-colors">Ürünler</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#0052FF] transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#0052FF] transition-colors">İletişim</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-[#0052FF] transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>

          {/* Web3 Info */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">Web3 Özellikleri</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Coinbase Smart Wallet</li>
              <li>• USDC, ETH ödemeleri</li>
              <li>• Base blockchain</li>
              <li>• %0 komisyon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 GRAINZ Shop. Tüm hakları saklıdır. 
            <span className="ml-2">Powered by Web3 Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
