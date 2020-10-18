<script lang="ts">
  import { onMount } from 'svelte';
  import { isOpen } from '../stores/store';
  import Header from "./Header.svelte";
  import Drawer from "./Drawer.svelte";
  

  let open=false;

  onMount(() => {
    isOpen.subscribe(o => open = o);
  })

</script>

<Header/>

<main>
<slot></slot>
</main>

{#if open}
  <Drawer {open} />
{/if}
