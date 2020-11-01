<script>
    import { afterUpdate } from "svelte";
    import { showSaved } from '../stores/store'

    export let sort;
    export let collection;
    export let saved;

    let sorted;
    const updateCollection = () => {
        if(sorted) sorted = []
        collection.subscribe(values =>{ 
            if(sort === "Ascending") sorted = values.sort((a,b) => a.value - b.value)
            else sorted = values.sort((a,b) => b.value - a.value)
        });
    }

    afterUpdate(updateCollection)
</script>

{#if sorted}
    {#each sorted as item}
        <p>value: <strong>{item.value}</strong> time: <strong>{item.createdAt}</strong></p>
    {/each}
{/if}
    {#if saved && saved.length !== 0 && $showSaved}
        <hr>
        <h3>Saved:</h3>
        {#each saved as item}
            <p>value: <strong>{item.value}</strong> time: <strong>{item.createdAt}</strong></p>
        {/each}
    {/if}

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
    h3{
        margin-left:auto;
        margin-right:auto;
    }
    hr{
        border: 1px solid #dfdfdf;
        width: 100%;
    }
</style>
