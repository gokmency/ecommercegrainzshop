# 🖼️ GRAINZ Shop Ürün Resimleri Rehberi

## 📁 Resim Dizini

Ürün resimlerinizi `public/images/` klasörüne koyun:

```
public/
├── images/
│   ├── image-1.jpg  → GRAINZ iPhone Kılıfı
│   ├── image-2.jpg  → GRAINZ Wireless Kulaklık  
│   ├── image-3.jpg  → GRAINZ Kripto Kupa
│   └── image-4.jpg  → GRAINZ Su Şişesi
```

## 🔄 Resim Ekleme Adımları

### 1. Resimleri Klasöre Kopyalayın
```bash
# Terminal'de proje klasöründe
cp /path/to/your/image-1.jpg public/images/
cp /path/to/your/image-2.jpg public/images/
cp /path/to/your/image-3.jpg public/images/
cp /path/to/your/image-4.jpg public/images/
```

### 2. Desteklenen Formatlar
- ✅ JPG/JPEG
- ✅ PNG  
- ✅ WebP
- ✅ SVG

### 3. Önerilen Boyutlar
- **Genişlik:** 400-800px
- **Yükseklik:** 400-800px
- **Oran:** 1:1 (kare) veya 4:3
- **Boyut:** < 500KB

## 📝 Ürün Listesi ve Commerce ID'leri

| Ürün | Dosya | Commerce ID | Fiyat |
|------|-------|-------------|-------|
| GRAINZ iPhone Kılıfı | `image-1.jpg` | `961fa502-4c49-47c1-a310-7a6b6dd96edc` | $0.01 |
| GRAINZ Wireless Kulaklık | `image-2.jpg` | `be0f4658-f4c8-4277-b7b3-45cc3b36380b` | $0.02 |
| GRAINZ Kripto Kupa | `image-3.jpg` | `027453a3-3129-4321-95df-03db6122adcd` | $0.03 |
| GRAINZ Su Şişesi | `image-4.jpg` | `70315d15-30c1-4365-b382-de2d2545374a` | $0.04 |

## 🔗 Coinbase Commerce Linkleri

- **iPhone Kılıfı:** [https://commerce.coinbase.com/checkout/961fa502-4c49-47c1-a310-7a6b6dd96edc](https://commerce.coinbase.com/checkout/961fa502-4c49-47c1-a310-7a6b6dd96edc)
- **Wireless Kulaklık:** [https://commerce.coinbase.com/checkout/be0f4658-f4c8-4277-b7b3-45cc3b36380b](https://commerce.coinbase.com/checkout/be0f4658-f4c8-4277-b7b3-45cc3b36380b)
- **Kripto Kupa:** [https://commerce.coinbase.com/checkout/027453a3-3129-4321-95df-03db6122adcd](https://commerce.coinbase.com/checkout/027453a3-3129-4321-95df-03db6122adcd)
- **Su Şişesi:** [https://commerce.coinbase.com/checkout/70315d15-30c1-4365-b382-de2d2545374a](https://commerce.coinbase.com/checkout/70315d15-30c1-4365-b382-de2d2545374a)

## 🚀 Resim Eklendikten Sonra

1. **Development server'ı restart edin:**
   ```bash
   npm run dev
   ```

2. **Kontrol edin:**
   - Resimlerin doğru göründüğünü
   - "💎 Live" badge'inin görünüdüğünü
   - Commerce ID'lerinin çalıştığını

## ⚠️ Önemli Notlar

- Resim dosya adları tam olarak `image-1.jpg`, `image-2.jpg`, vb. olmalı
- Dosya uzantıları küçük harf olmalı (`.jpg`, `.png`)
- Resim dosyaları `public/images/` klasöründe olmalı
- Resimler eklendikten sonra tarayıcı cache'ini temizleyin (Ctrl+F5)

## 🔧 Resim Sorunları

**Resim görünmüyor?**
1. Dosya yolu doğru mu? (`public/images/image-1.jpg`)
2. Dosya adı doğru mu? (büyük/küçük harf duyarlı)
3. Browser cache temizlendi mi?
4. Development server restart edildi mi?

**Resim boyutu çok büyük?**
```bash
# Terminal'de resim optimize etme
# macOS için:
sips -Z 800 public/images/image-1.jpg
```
