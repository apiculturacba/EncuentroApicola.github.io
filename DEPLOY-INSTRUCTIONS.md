# Instrucciones de Despliegue en GitHub Pages

## Pasos para activar GitHub Pages

1. **Ve a tu repositorio en GitHub**: https://github.com/apiculturacba/EncuentroApicola

2. **Configurar GitHub Pages**:
   - Ve a Settings > Pages
   - En "Source" selecciona "GitHub Actions"
   - Esto activará el workflow automático

3. **Subir los archivos de configuración**:
   - Asegúrate de subir estos archivos a tu repositorio:
     - `.github/workflows/deploy.yml`
     - `vite.config.github.ts`
     - `client/index-github.html`
     - `client/src/main-static.tsx`
     - `client/src/data/staticData.ts`
     - `client/src/pages/static-home.tsx`

4. **El workflow se ejecutará automáticamente** cuando hagas push a la rama main.

5. **Tu sitio estará disponible en**:
   `https://apiculturacba.github.io/EncuentroApicola/`

## Archivos importantes creados:

- **GitHub Actions workflow**: Automatiza el build y deploy
- **Versión estática**: No requiere servidor backend
- **Datos estáticos**: Incluye todos los ponentes y actividades
- **Configuración optimizada**: Para GitHub Pages

## Si necesitas cambios futuros:

1. Modifica los archivos necesarios
2. Haz commit y push a GitHub
3. El sitio se actualizará automáticamente

¡Tu sitio web del 3er Encuentro Federal Apícola estará disponible 24/7 de forma gratuita!