# Svelte Rectangle Picker

[![npm version](https://img.shields.io/npm/v/%40emrahes%2Fsvelte-rectangle-selector)](https://www.npmjs.com/package/@emrahes/svelte-rectangle-selector)

Check out the live demo here: [Svelte Rectangle Selector Demo](https://emrahes.github.io/svelte-rectangle-selector/)

A Svelte component for drawing rectangles on a container. This component allows users to click and drag to create rectangles, with configurable styles for the rectangles.

## Features

- **Draw Rectangles**: Click and drag to draw rectangles on the container.
- **Customizable Styles**: Configure the border and background color of the rectangles.
- **Event Handling**: Receive updates on rectangle creation through a callback.

## Installation

To use the RectangleSelector component in your Svelte project, follow these steps:
`npm i @emrahes/svelte-rectangle-selector`

## Usage

### Basic Setup

1. **Import the Component**

   Import the `RectangleSelector` component into your Svelte file:

   ```typescript
   <script lang="ts">
    import { RectangleSelector, type Rectangle, type RectangleStyle } from "@emrahes/svelte-rectangle-selector";

    let rectangle: Rectangle | undefined;
     const rectangleStyle: RectangleStyle = {
       border: '2px solid red',
       backgroundColor: 'rgba(255, 0, 0, 0.5)',
     };

    function updateRectangle(newRectangle: Rectangle) {
       rectangle = newRectangle;
    }
   </script>
   ```

   Include the `RectangleSelector` in your Svelte template:

   ```typescript
   <RectangleSelector
    onUpdateRectangle={updateRectangle}
    rectangleStyle={rectangleStyle}
   >
      <div class="rectangle-display" />
   </RectangleSelector>

   <section>
   <h3>Rectangle Data:</h3>
   {#if rectangle}
       <ul>
       <li>Position X: {rectangle.x}px</li>
       <li>Position Y: {rectangle.y}px</li>
       <li>Width: {rectangle.width}px</li>
       <li>Height: {rectangle.height}px</li>
       </ul>
   {/if}
   </section>
   ```

### Props

- `onUpdateRectangle: (rectangle: Rectangle) => void`  
  Callback function that is called with the newly drawn rectangle whenever the drawing ends.

- `rectangleStyle: RectangleStyle`  
  An object to customize the style of the drawn rectangle:
  - `border`: CSS border property for the rectangle.
  - `backgroundColor`: CSS background color for the rectangle.

## Acknowledgements

- [Svelte](https://svelte.dev/) - The framework used to build this component.
