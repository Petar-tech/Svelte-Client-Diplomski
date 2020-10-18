<script lang="ts">
    import {isOpen} from '../stores/store';
    import {onMount} from 'svelte';

    let open;
    onMount(() => isOpen.subscribe(o => open=o));

    const close = () => isOpen.set(false);
</script>

<button on:click={close}>
    <slot></slot>
</button>

<style>
    button{
        border-radius: 50%;
        display:flex;
        padding: 1em;
        border-color: lightgrey;
        background-color: white;
        position: relative;
        top: 70vh;
        left: 70vw;
        z-index:1;
    }
</style>