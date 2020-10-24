<script lang="ts">
  import { isOpen } from "../../stores/store";
  import { onMount } from "svelte";

  let open;
  onMount(() => isOpen.subscribe((o) => (open = o)));

  const close = () => isOpen.set(false);
</script>

<style>
  button {
    border-radius: 50%;
    display: flex;
    padding: 1em;
    border-color: lightgrey;
    background-color: white;
    margin-top: 1em;
    margin-right: 1em;
    position: absolute;
    right: 10px;
    bottom: 25px;
  }
</style>

<button on:click={close}>
  <slot />
</button>
