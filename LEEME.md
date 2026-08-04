# Proyecto de Aforo — Festival Petronio Álvarez

## Qué hay en esta carpeta

```
app_aforo_yolo.html          <- La app de campo (zonas, rondas, encuestas, resumen)
probar_modelo.html           <- Herramienta para probar/calibrar el modelo y practicar la cuadrícula
manifest.webmanifest         <- Necesario para que la app funcione como PWA instalable
sw.js                        <- Service Worker, permite que la app funcione offline
yolov8n_best_web_model/      <- El modelo de IA (YOLOv8 entrenado en CrowdHuman). Ambas apps lo usan.
metodologia_aforo_final.docx <- El documento completo de la metodología
```

## Cómo subir esto a GitHub Pages

1. Entra a tu repositorio en GitHub (`cotelvalledrive/Aforo` o el que estés usando).
2. **Add file → Upload files**.
3. Arrastra **todo el contenido de esta carpeta** (los 5 archivos sueltos + la carpeta
   `yolov8n_best_web_model` completa con sus 4 archivos adentro).
4. Confirma con "Commit changes".
5. Si es la primera vez, activa GitHub Pages en Settings → Pages → Source: main / (root).

## Las dos direcciones que vas a usar

```
https://cotelvalledrive.github.io/Aforo/app_aforo_yolo.html      <- la app real, para el evento
https://cotelvalledrive.github.io/Aforo/probar_modelo.html       <- para probar el modelo y practicar antes
```

## Antes del evento — checklist

- [ ] Abrir ambas páginas una vez con internet, para que el modelo quede cacheado en el celular.
- [ ] Probar en modo avión que sigan funcionando sin señal.
- [ ] Hacer varias pruebas de calibración en `probar_modelo.html` con fotos reales, para tener
      el rango de sesgo del modelo.
- [ ] Meter ese rango de sesgo en `app_aforo_yolo.html`, pestaña Zonas.
- [ ] Definir las zonas reales del festival (Artesanías, Alimentos, Bebidas, Zona de Conciertos,
      Quilombo), midiendo pasos u objetos repetidos en cada una.
- [ ] Practicar el flujo completo (foto → cuadrícula → muestras → guardar ronda) con una zona
      de prueba, y borrarla después.

## Si más adelante quieres re-entrenar o mejorar el modelo

Los scripts de entrenamiento y exportación del modelo (usados para llegar hasta acá) no están
en esta carpeta porque ya cumplieron su función, pero puedo dártelos de nuevo si los necesitas.
