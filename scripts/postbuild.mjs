// GitHub Pages não tem "rewrite": copiar index.html para 404.html faz o app abrir em qualquer rota.
import { copyFileSync, existsSync } from 'node:fs';
if (existsSync('dist/index.html')) copyFileSync('dist/index.html', 'dist/404.html');
