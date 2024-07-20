<script lang="ts">
    import { onMount, getContext, setContext } from 'svelte';
	import type { Rectangle } from '../types/Rectangles.js';


    export let rectangles: Rectangle = { x: 0, y: 0, width: 0, height: 0 };
    let drawing = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let container: HTMLElement;
  
    function startDrawing(event: MouseEvent): void {
      drawing = true;
      const rect = container.getBoundingClientRect();
      startX = event.clientX - rect.left;
      startY = event.clientY - rect.top;
      currentX = startX;
      currentY = startY;
    }
  
    function drawRectangle(event: MouseEvent): void {
      if (!drawing) return;
      const rect = container.getBoundingClientRect();
      currentX = event.clientX - rect.left;
      currentY = event.clientY - rect.top;
    }
  
    function endDrawing(event: MouseEvent): void {
      if (!drawing) return;
      drawing = false;
      const rectangle: Rectangle = {
        x: Math.min(startX, currentX),
        y: Math.min(startY, currentY),
        width: Math.abs(currentX - startX),
        height: Math.abs(currentY - startY),
      };
      console.log('New Rectangle:', rectangle);
    }
  
    function addEventListeners() {
      if (container) {
        container.addEventListener('mousedown', startDrawing);
        container.addEventListener('mousemove', drawRectangle);
        container.addEventListener('mouseup', endDrawing);
        console.log('Event listeners added');
      } else {
        console.log('Container is not defined');
      }
    }
  
    function removeEventListeners() {
      if (container) {
        container.removeEventListener('mousedown', startDrawing);
        container.removeEventListener('mousemove', drawRectangle);
        container.removeEventListener('mouseup', endDrawing);
        console.log('Event listeners removed');
      } else {
        console.log('Container is not defined');
      }
    }
  
    onMount(() => {
      addEventListeners();
      return () => removeEventListeners();
    });
  </script>
  
  <div bind:this={container} class="rectangle-selector">
    <slot></slot>
    <div
      class="rectangle"
      style="left: {rectangles.x}px; top: {rectangles.x}px; width: {rectangles.width}px; height: {rectangles.height}px;">
    </div>
  {#if drawing}
    <div
      class="rectangle"
      style="left: {Math.min(startX, currentX)}px; top: {Math.min(startY, currentY)}px; width: {Math.abs(currentX - startX)}px; height: {Math.abs(currentY - startY)}px;">
    </div>
  {/if}
  </div>
  
  <style>
    .rectangle-selector {
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid black;
    }
    .rectangle {
      position: absolute;
      border: 2px solid blue;
      background-color: rgba(0, 0, 255, 0.2);
    }
  </style>
  