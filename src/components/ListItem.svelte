<script>
    import { afterUpdate } from "svelte";

    export let sort;
    export let collection;

    let sorted;
    collection.subscribe(values => 
        sorted = values.sort((a,b) => a.value - b.value));

    afterUpdate(() => sorted.reverse())
</script>


{#key sort}
    {#each sorted as item}
        <p>value: <strong>{item.value}</strong> time: <strong>{item.createdAt}</strong></p>
    {/each}
{/key}

<style>
    p{
        border: 1px solid #dfdfdf;
        padding: 0.5em;
        display:flex;
        word-spacing: 25px;
        letter-spacing: 2px;
        align-items: center;
        justify-content: center;
    }
    strong{
        margin-left: auto;
        margin-right:auto;
    }
</style>
