# EsLint && Prettier Config

Luego de crear un proyecto nuevo, en la raíz del mismo:

1. Instalar **eslint** como dependencia de desarrollo
   ```
   npm install --save-dev eslint
   ```
2. Instalar plugin para **typescript**, plugint para **prettier** y el paquete de configuración de **prettier**
   ```
   npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier
   ```
3. Crear el archivo **.eslintrc.json**
   ```
   code eslintrc.json
   ```
4. Configurar el archivo **.eslintrc.json**
5. Agregar el script al **package.json**
   ```
   "lint": "eslint \* *.**/*.{js,jsx,ts,tsx}\* --quiet --fix"
   ```
6. 