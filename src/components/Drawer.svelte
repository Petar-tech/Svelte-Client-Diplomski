<script>
  import { afterUpdate } from "svelte";
  import DrawerItems from "./DrawerItems.svelte";
  import { fade } from "svelte/transition";

  export let open;
  let ref;
  let height

  afterUpdate(() => {
    if (open && height > 500 ) ref.style.width = "50%";
    if (open && height < 500 ) ref.style.width = "30%";
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

<nav bind:this={ref} transition:fade bind:clientHeight={height}>
  <DrawerItems/>
</nav>

