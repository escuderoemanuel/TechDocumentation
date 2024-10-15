# Testing

## Qué es el Testing?
El testing es el proceso de **evaluar** una aplicación o sistema para asegurarse de que funcione correctamente, cumpla con los requisitos y no contenga errores. En el desarrollo de software, el testing se utiliza para detectar y corregir errores en el código antes de que una aplicación sea puesta en producción. Existen diferentes tipos de pruebas, dependiendo del nivel y enfoque.

## Para qué sirve?
- Garantizar la calidad del software, asegurando que cumpla con los requisitos funcionales y no funcionales.
- Detectar errores en el código antes de que lleguen a los usuarios finales.
- Prevenir futuros problemas al identificar problemas potenciales temprano en el desarrollo.
- Aumentar la confianza en la estabilidad y el rendimiento de la aplicación.
- Facilitar el mantenimiento de la aplicación a largo plazo, ya que el código probado tiende a ser más fiable.

## Tipos de Test

- **Unitarios:** Los test unitarios son pruebas que se centran en verificar el comportamiento de una unidad aislada del código, como una función, un método o un componente. El objetivo de los test unitarios es asegurarse de que cada parte del código funcione como se espera de manera independiente. Por ejemplo, en una aplicación React, podrías realizar un test unitario para verificar que un componente individual renderiza correctamente con diferentes props.
- **De Integración:** Los test de integración son pruebas que verifican cómo interactúan varias partes del sistema entre sí. A diferencia de los test unitarios, que se enfocan en partes individuales del código, los test de integración prueban el funcionamiento conjunto de varios componentes o módulos. Su objetivo es asegurar que las diferentes partes del sistema trabajen bien juntas. Por ejemplo, puedes hacer un test de integración para verificar que la galería de fotos y el carrito de compras funcionan correctamente cuando interactúan entre sí.

> Con estos dos tipos de pruebas (unitarias e integrales), puedes verificar tanto el correcto funcionamiento de las piezas individuales de tu aplicación como su interacción en conjunto.

## Opciones de Herramientas para Testing
- **Jest:** Para realizar tests unitarios y de integración.
- **React Testing Library:** Para hacer tests de interacción y renderizado de componentes.
- **Cypress o Playwright**: Para realizar pruebas de integración y E2E (end-to-end) que simulen cómo un usuario interactúa con la aplicación.

## Posible Prioridad
1. Autenticación y manejo de sesión.
2. Carrito de compras y lógica.
3. Galería de productos y renderización.
4. Navegación y rutas protegidas.
5. Validación de formularios y manejo de errores.