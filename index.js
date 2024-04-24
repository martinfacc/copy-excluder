import fs from "fs-extra";
import path from "path";

// Obtener argumentos de línea de comando
const args = process.argv.slice(2);
const srcDir = args[0];
const destDir = args[1];

// Función para leer el archivo de exclusión y devolver un array con los nombres de los archivos y carpetas a excluir
async function readExclusionFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (error) {
    console.error("Error al leer el archivo de exclusión:", error);
    return [];
  }
}

// Función para copiar directorios excluyendo ciertos archivos o carpetas
async function copyDirExcluding(src, dest, exclude) {
  // Crear el directorio de destino si no existe
  await fs.ensureDir(dest);

  // Leer los elementos en el directorio de origen
  const entries = await fs.readdir(src);

  for (let entry of entries) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    // Verificar si el elemento actual está en la lista de exclusión
    if (!exclude.includes(entry)) {
      // Obtener información sobre el elemento
      const stat = await fs.stat(srcPath);

      if (stat.isDirectory()) {
        // Recursivamente copiar subdirectorios
        await copyDirExcluding(srcPath, destPath, exclude);
      } else {
        // Copiar archivos
        await fs.copy(srcPath, destPath);
      }
    }
  }
}

// Verificar que se hayan proporcionado suficientes argumentos
if (srcDir && destDir) {
  // Leer el archivo .exclude
  readExclusionFile(".exclude").then((exclude) => {
    // Ejecutar la función de copia
    copyDirExcluding(srcDir, destDir, exclude)
      .then(() => console.log("Copia completada."))
      .catch((err) => console.error("Error durante la copia:", err));
  });
} else {
  console.log(
    "Por favor, especifique las rutas de origen y destino como argumentos."
  );
}
