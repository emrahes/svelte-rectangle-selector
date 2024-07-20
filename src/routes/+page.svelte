<script lang="ts">
    import RectangleSelector from "$lib/RectangleSelector.svelte";
    import type { Rectangle } from "../types/Rectangles.js";

    let rectangles: Rectangle;
</script>

<div style="margin-top: 300px;">
    <RectangleSelector {rectangles}>
        <div style="height: 500px; width: 500px; background: green;">
        </div>
    </RectangleSelector>

</div>
