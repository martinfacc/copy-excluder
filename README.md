# CopyExcluder

CopyExcluder es una herramienta diseñada para copiar directorios mientras excluye archivos y subdirectorios especificados por el usuario. Esta funcionalidad es especialmente útil para proyectos grandes donde ciertos directorios o archivos no necesitan ser duplicados, como `node_modules` o archivos de configuración temporal.

## Características

- Copia de directorios enteros.
- Exclusión de archivos y subdirectorios especificados.
- Configuración simple a través de un archivo `.exclude`.

## Instalación

Antes de utilizar CopyExcluder, asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

1. **Clona o descarga este repositorio** a tu máquina local:

   ```
   git clone https://github.com/martinfacc/copy-excluder.git
   cd copy-excluder
   ```

2. **Instala las dependencias** necesarias ejecutando:

   ```
   npm install
   ```

## Configuración

### Archivo `.exclude`

Para configurar los archivos y directorios que deseas excluir durante la copia, necesitarás crear un archivo llamado `.exclude` en el directorio raíz del proyecto. Este archivo debe contener los nombres de los archivos o directorios que deseas excluir, uno por línea. Aquí tienes un ejemplo de cómo podría verse este archivo:

```
node_modules
build
.next
package-lock.json
```

### Archivo `.exclude.example`

En el repositorio se incluye un archivo `.exclude.example` que puedes utilizar como referencia para crear tu propio archivo `.exclude`. Simplemente copia o renombra este archivo y ajusta su contenido según tus necesidades.

## Uso

Para utilizar CopyExcluder, simplemente ejecuta el script `index.js` con Node.js, especificando el directorio de origen y el directorio de destino como argumentos. Aquí tienes un ejemplo de cómo hacerlo:

```
node index.js /ruta/a/la/carpeta/original /ruta/a/la/carpeta/destino
```

El script leerá automáticamente el archivo `.exclude` para determinar qué archivos y directorios omitir durante el proceso de copia.

## Contribuir

Si deseas contribuir a mejorar CopyExcluder, por favor siente libre de hacer fork del repositorio, realizar cambios y enviar un pull request. Agradecemos cualquier contribución que ayude a mejorar esta herramienta.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo `LICENSE` para más detalles.
