<script lang="ts">
    type Rectangle = {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  
    let rectangles: Rectangle[] = [];
    let drawing = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
  
    function startDrawing(event: MouseEvent): void {
      rectangles = []; // Alte Rechtecke löschen
      drawing = true;
      startX = event.clientX;
      startY = event.clientY;
      currentX = startX; // Zurücksetzen der aktuellen Koordinaten
      currentY = startY;
    }
  
    function drawRectangle(event: MouseEvent): void {
      if (!drawing) return;
      currentX = event.clientX;
      currentY = event.clientY;
    }
  
    function endDrawing(event: MouseEvent): void {
      if (!drawing) return;
      drawing = false;
      rectangles = [
        {
          x: Math.min(startX, currentX),
          y: Math.min(startY, currentY),
          width: Math.abs(currentX - startX),
          height: Math.abs(currentY - startY),
        },
      ];
    }
  </script>
  
  <style>
    .rectangle {
      position: absolute;
      border: 2px solid blue;
    }
  </style>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
  on:mousedown={startDrawing}
  on:mousemove={drawRectangle}
  on:mouseup={endDrawing}
  style="position: relative; width: 100vw; height: 100vh; border: 1px solid black;">
  {#each rectangles as rect}
    <div
      class="rectangle"
      style="left: {rect.x}px; top: {rect.y}px; width: {rect.width}px; height: {rect.height}px;">
    </div>
  {/each}
  {#if drawing}
    <div
      class="rectangle"
      style="left: {Math.min(startX, currentX)}px; top: {Math.min(startY, currentY)}px; width: {Math.abs(currentX - startX)}px; height: {Math.abs(currentY - startY)}px;">
    </div>
  {/if}
</div>