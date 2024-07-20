<script lang="ts">
    import RectangleSelector from '$lib/RectangleSelector.svelte';
    import type { Rectangle, RectangleStyle } from '../types/Rectangles.js';
  
    let rectangle: Rectangle | undefined;
    const rectangleStyle: RectangleStyle = {
      border: '2px solid red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    };
  
    function updateRectangle(newRectangle: Rectangle) {
      rectangle = newRectangle;
    }
  </script>
  
  <style>
    .rectangle-display {
      height: 500px;
      width: 500px;
      background: green;
      position: relative;
    }
  </style>
  
  <div>
    <RectangleSelector
      onUpdateRectangle={updateRectangle}
      rectangleStyle={rectangleStyle}
    >
      <div class="rectangle-display"></div>
    </RectangleSelector>
  </div>
  
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
  