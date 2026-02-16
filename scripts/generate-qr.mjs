import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

// コマンドライン引数からURLを取得、無ければデフォルト値
const url = process.argv[2] || 'http://localhost:5173/';

// QR コードを SVG として生成
const outputDir = path.resolve(process.cwd(), 'public');
const outputFile = path.join(outputDir, 'qrcode.svg');

// ディレクトリが存在しなければ作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// QRコードをSVGで生成
try {
  const svg = await QRCode.toString(url, {
    type: 'svg',
    width: 1000,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });

  fs.writeFileSync(outputFile, svg, 'utf-8');
  console.log(`✅ QR コード生成完了: ${outputFile}`);
  console.log(`📱 URL: ${url}`);
  console.log(`💡 別のURLでQRを生成: npm run generate-qr -- "https://example.com"`);
} catch (err) {
  console.error('❌ エラー:', err);
  process.exit(1);
}
