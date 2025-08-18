import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputImage = "./public/assets/NilEletrica.PNG"; // logo original
const outputDir = "./public/icons";

// tamanhos que queremos gerar
const sizes = [192, 512];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  try {
    for (const size of sizes) {
      // ícone normal
      await sharp(inputImage)
        .resize(size, size, {
          fit: "contain", // garante proporção
          background: { r: 0, g: 0, b: 0, alpha: 0 } // fundo transparente
        })
        .toFile(path.join(outputDir, `icon-${size}.png`));

      console.log(`✅ Gerado: icon-${size}.png`);

      // ícone maskable
      await sharp(inputImage)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .extend({
          top: Math.round(size * 0.25),
          bottom: Math.round(size * 0.25),
          left: Math.round(size * 0.25),
          right: Math.round(size * 0.25),
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(outputDir, `maskable-${size}.png`));

      console.log(`✅ Gerado: maskable-${size}.png`);
    }

    console.log("\n🎉 Todos os ícones foram gerados em public/icons/");
  } catch (err) {
    console.error("❌ Erro ao gerar ícones:", err);
  }
})();
