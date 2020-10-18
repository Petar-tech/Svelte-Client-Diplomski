<script>
  import { onMount } from "svelte";
  import DrawerItems from "./DrawerItems.svelte";
  import { fade } from "svelte/transition";

  export let open;
  let ref;

  onMount(() => {
    if (open) ref.style.width = "50%";
  });

</script>

<style>
  nav {
    background-color: black;
    height: 100%;
    width: 0%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
  }
</style>

<nav bind:this={ref} transition:fade>
  <DrawerItems/>
</nav>

