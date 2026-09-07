# 🎨 Rediseño Brutalista - Prueba en Línea (Test/Quiz)

## Resumen de Cambios Implementados

Se ha rediseñado completamente la sección de "Prueba en Línea" con una **estética brutalista digital** coherente con tu academia. El diseño incluye bordes negros gruesos, sombras duras desplazadas, colores de alto contraste y efectos dinámicos interactivos.

---

## 📋 Componentes Rediseñados

### 1. **Header del Test** (`.brutal-header`)
- **Fondo:** Negro profundo (color inverso)
- **Borde inferior:** 6px sólido en negro
- **Sombra:** 8px 8px desplazada en negro
- **Tipografía:** Montserrat 2.5rem, peso 900, UPPERCASE
- **Botón "Volver":** Amarillo neón con hover interactivo (desplazamiento -4px -4px + sombra aumentada)

**CSS:**
```css
.brutal-header {
  background-color: var(--color-on-background);
  box-shadow: 0px 8px 0px 0px var(--color-on-background);
  border-bottom: 6px solid var(--color-on-background);
}
```

---

### 2. **Tarjetas Brutalistas** (`.brutal-card`)
- **Borde:** 4px sólido negro
- **Sombra:** 8px 8px 0px 0px desplazada (efecto plano duro)
- **Fondo:** Blanco o superficie clara
- **Padding:** 2.5rem
- **Tipografía:** Montserrat para títulos (h2, h3), Inter para contenido

**CSS:**
```css
.brutal-card {
  border: 4px solid var(--ink);
  box-shadow: 8px 8px 0px 0px var(--ink);
  padding: 2.5rem;
}
```

---

### 3. **Barra de Progreso / Contador** (`#question-title`)
- **Fondo:** Amarillo neón (#ffff00)
- **Color texto:** Negro (#000000)
- **Borde inferior:** 4px sólido negro
- **Tipografía:** Montserrat, peso 900, UPPERCASE, letter-spacing 0.1em
- **Posición:** Se estira sobre toda la tarjeta (margen negativo)

**Ejemplo visual:**
```
┌─────────────────────────────────┐
│  PREGUNTA 3 DE 10  (Amarillo)   │
├─────────────────────────────────┤
│  Contenido...
```

**CSS:**
```css
#question-title {
  background-color: var(--accent);
  border-bottom: 4px solid var(--ink);
  padding: 1rem;
  margin: -2.5rem -2.5rem 1.5rem -2.5rem;
}
```

---

### 4. **Texto de la Pregunta** (`#question-text`)
- **Tamaño:** 1.25rem
- **Peso:** 600
- **Borde izquierdo:** 5px sólido amarillo neón
- **Padding-left:** 1.5rem
- **Alto contraste y legibilidad**

**CSS:**
```css
#question-text {
  font-size: 1.25rem;
  border-left: 5px solid var(--accent);
  padding-left: 1.5rem;
}
```

---

### 5. **Botones de Opciones** (`.option-btn`) - ⭐ ELEMENTO CLAVE
#### Estados Normales:
- **Borde:** 4px sólido negro
- **Sombra:** 6px 6px 0px 0px negro
- **Padding:** 1.5rem
- **Font-size:** 1.05rem, peso 600

#### **Hover (Efecto Brutalista Dinámico):**
- **Cambio de color:** Fondo amarillo neón
- **Transformación:** translate(-3px, -3px) - Se mueve hacia arriba/izquierda
- **Sombra aumentada:** 9px 9px 0px 0px negro
- **Transición:** 0.15s ease

```css
.option-btn:hover {
  background-color: var(--accent);
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px 0px var(--ink);
}
```

#### **Active (Click Inmediato):**
- **Transformación:** translate(2px, 2px) - Se aprieta contra el elemento
- **Sombra reducida:** 4px 4px 0px 0px negro
- **Efecto:** Simulación de presión física

```css
.option-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 0px var(--ink);
}
```

#### **Respuesta Correcta** (`.correct`):
- **Fondo:** Verde brillante (#00aa00)
- **Color texto:** Blanco
- **Borde:** 4px sólido negro

#### **Respuesta Incorrecta** (`.incorrect`):
- **Fondo:** Rojo brillante (#cc0000)
- **Color texto:** Blanco
- **Borde:** 4px sólido negro

---

### 6. **Botón "Siguiente"** (`#next-btn`)
- **Color base:** Amarillo neón (#ffff00)
- **Borde:** 4px sólido negro
- **Sombra:** 8px 8px 0px 0px negro
- **Hover:** Desplazamiento -4px -4px + sombra 12px 12px
- **Tipografía:** Montserrat, peso 800, UPPERCASE

**CSS:**
```css
#next-btn {
  background-color: var(--accent);
  border: 4px solid var(--ink);
  box-shadow: 8px 8px 0px 0px var(--ink);
}

#next-btn:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px 0px var(--ink);
}
```

---

### 7. **Botones de Selección de Tecnología** (`.tech-buttons`)
- **Layout:** Grid 3 columnas (responsive a 1 columna en móvil)
- **Colores individuales:**
  - HTML: Naranja (#FF9800)
  - CSS: Azul (#2196F3)
  - JavaScript: Rojo (#FF5722)
- **Tamaño mínimo:** 100px alto
- **Efectos:** Mismos que botones principales (hover + active)

---

### 8. **Certificado Final** (`.certificate`)
#### Diseño:
- **Borde:** 6px sólido negro
- **Padding:** 3rem
- **Sombra:** 12px 12px 0px 0px negro
- **Fondo:** Degradado (blanco → amarillo neón)
- **Decoración:** Borde punteado externo (efecto de marco)

#### Elementos internos:
- **Título:** 2.5rem, peso 900, azul neón (#0000FF)
- **Nombre:** 2rem, peso 900, UPPERCASE, con borde inferior 3px
- **Tecnología:** Dentro de un cuadro amarillo con borde negro

**CSS:**
```css
.certificate {
  background: linear-gradient(135deg, var(--color-surface-container-lowest) 0%, var(--accent) 100%);
  border: 6px solid var(--ink);
  box-shadow: 12px 12px 0px 0px var(--ink);
}

.certificate::before {
  content: '';
  border: 2px dashed var(--ink);
  /* Marco punteado externo */
}
```

---

## 🎯 Mejoras en JavaScript (quiz.js)

### Características Nuevas:

1. **10 preguntas completas** por cada categoría (HTML, CSS, JavaScript)
2. **Visual Feedback:** 
   - Opción correcta: Fondo verde + clase `.correct`
   - Opción incorrecta: Fondo rojo + clase `.incorrect`
   - Botones deshabilitados después de responder

3. **Botón "Siguiente" dinámico:**
   - Oculto hasta responder
   - Texto cambia a "🏁 Ver Certificado" en la última pregunta

4. **Certificado mejorado:**
   - Muestra puntuación y porcentaje
   - Solicita nombre del estudiante
   - Descarga como archivo HTML

5. **Función de Descarga:**
   - Genera un archivo HTML descargable
   - Formato de certificado profesional
   - Nombre de archivo personalizado con nombre y tecnología

---

## 📱 Responsividad

### Tablet (≤768px):
- Bordes y sombras ligeramente reducidas
- Grid de tecnologías: 1 columna
- Paddings adaptados

### Móvil (≤480px):
- Bordes: 3px (reducido de 4px)
- Sombras: 4px 4px (reducidas)
- Padding tarjetas: 1rem
- Certificado: Diseño compacto

---

## 🎨 Paleta de Colores Utilizada

| Elemento | Color | Código |
|----------|-------|--------|
| Primario (Amarillo Neón) | Amarillo | `#ffff00` |
| Secundario (Azul Neón) | Azul | `#0000ff` |
| Tinta/Borde | Negro | `#000000` |
| Fondo Claro | Blanco | `#ffffff` |
| Respuesta Correcta | Verde | `#00aa00` |
| Respuesta Incorrecta | Rojo | `#cc0000` |
| HTML | Naranja | `#FF9800` |
| CSS | Azul Claro | `#2196F3` |
| JavaScript | Rojo Fuerte | `#FF5722` |

---

## 🚀 Cómo Probar

1. **Abre `index.html`** en el navegador
2. **Haz clic en "REALIZAR PRUEBA EN LÍNEA"**
3. **Selecciona una tecnología** (HTML, CSS o JavaScript)
4. **Responde las 10 preguntas** e interactúa con los efectos hover
5. **Completa el formulario del certificado**
6. **Descarga tu certificado** como archivo HTML

---

## ✅ Checklist de Requisitos Cumplidos

- ✅ Bordes negros sólidos y gruesos (3-6px)
- ✅ Sombras duras desplazadas planas (6px 6px, 8px 8px, 12px 12px)
- ✅ Fondos con colores de alto contraste (blanco, amarillo, azul)
- ✅ Botones con efectos dinámicos de desplazamiento brutalista
- ✅ Barra de progreso/contador con tipografía industrial
- ✅ Indicador visual claro de preguntas (Pregunta X de 10)
- ✅ Certificado diseñado como diploma moderno/brutalista
- ✅ Nombre del estudiante destacado y área evaluada
- ✅ Listo para descargar visualmente atractivo

---

## 📝 Notas Técnicas

- Todos los estilos usan **variables CSS** (`--color-*`, `--accent`, `--ink`, `--shadow`)
- Soporta modo **claro** (light) y **oscuro** (dark) via `html[data-mode]`
- Utiliza **Flexbox** para el header y **Grid** para botones
- **Transiciones suaves:** 0.15s ease en interacciones
- **Mobile-first responsive** con breakpoints en 768px y 480px
- **Tipografías:** Montserrat (titulares) + Inter (contenido)

---

**Diseño completado por: Frontend Designer UI/UX Senior**  
**Fecha: 2026-08-31**
