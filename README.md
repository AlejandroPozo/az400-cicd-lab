# Laboratorio colaborativo de CI/CD

Sitio web estático para practicar un flujo de trabajo colaborativo de
CI/CD. El sitio muestra siete tarjetas, una por estudiante.

## Objetivo del laboratorio

Cada estudiante personaliza **únicamente su propia tarjeta** trabajando en
una rama independiente y enviando un pull request. De esta forma se practica
el ciclo completo: **rama → pull request → validación → integración →
despliegue**.

## Estructura del proyecto

```
az400-cicd-lab/
├── index.html              Página principal
├── css/
│   └── styles.css          Estilos del sitio
├── js/
│   └── app.js              Carga las tarjetas con fetch
├── components/
│   ├── student-01.html     Tarjeta del estudiante 1
│   ├── student-02.html     Tarjeta del estudiante 2
│   ├── student-03.html     Tarjeta del estudiante 3
│   ├── student-04.html     Tarjeta del estudiante 4
│   ├── student-05.html     Tarjeta del estudiante 5
│   ├── student-06.html     Tarjeta del estudiante 6
│   └── student-07.html     Tarjeta del estudiante 7
└── README.md
```

## Reglas para los estudiantes

- Cada estudiante debe modificar **solo su componente** (`student-XX.html`).
- No modifiques las tarjetas de otros compañeros.
- Trabaja en tu propia rama y envía un pull request para integrar tus cambios.

## Cómo abrir el sitio

El sitio debe abrirse mediante **Live Server**, porque los componentes se
cargan dinámicamente con `fetch`. Si abres el archivo `index.html`
directamente desde el explorador de archivos (con el protocolo `file://`),
el navegador bloqueará la carga de los componentes.

Pasos recomendados en VS Code:

1. Instala la extensión **Live Server**.
2. Haz clic derecho sobre `index.html`.
3. Selecciona **Open with Live Server**.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript nativo

Este proyecto **no utiliza Node.js, npm ni frameworks**, y no requiere
procesos de compilación.
