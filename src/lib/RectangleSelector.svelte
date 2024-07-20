<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import type { Rectangle } from '../types/Rectangles.js';
  
    export let onUpdateRectangle: (rectangle: Rectangle) => void;
  
    let drawing = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let container: HTMLElement;
  
    const startDrawing = (event: MouseEvent): void => {
      drawing = true;
      const rect = container.getBoundingClientRect();
      startX = event.clientX - rect.left;
      startY = event.clientY - rect.top;
      currentX = startX;
      currentY = startY;
    };
  
    const drawRectangle = (event: MouseEvent): void => {
      if (!drawing) return;
      const rect = container.getBoundingClientRect();
      currentX = event.clientX - rect.left;
      currentY = event.clientY - rect.top;
    };
  
    const endDrawing = (event: MouseEvent): void => {
      if (!drawing) return;
      drawing = false;
      const rectangle: Rectangle = {
        x: Math.min(startX, currentX),
        y: Math.min(startY, currentY),
        width: Math.abs(currentX - startX),
        height: Math.abs(currentY - startY),
      };
      console.log('New Rectangle:', rectangle);
      onUpdateRectangle(rectangle);
    };
  
    onMount(() => {
      if (container) {
        container.addEventListener('mousedown', startDrawing);
        container.addEventListener('mousemove', drawRectangle);
        container.addEventListener('mouseup', endDrawing);
      }
    });
  
    onDestroy(() => {
      if (container) {
        container.removeEventListener('mousedown', startDrawing);
        container.removeEventListener('mousemove', drawRectangle);
        container.removeEventListener('mouseup', endDrawing);
      }
    });
  </script>
  
  <div bind:this={container} style="position: relative;">
    <slot></slot>
    {#if drawing}
      <div
        class="rectangle"
        style="left: {Math.min(startX, currentX)}px; top: {Math.min(startY, currentY)}px; width: {Math.abs(currentX - startX)}px; height: {Math.abs(currentY - startY)}px;">
      </div>
    {/if}
  </div>
  
  <style>
    .rectangle {
      position: absolute;
      border: 2px solid blue;
      background-color: rgba(0, 0, 255, 0.2);
      pointer-events: none
    }
  </style>
  