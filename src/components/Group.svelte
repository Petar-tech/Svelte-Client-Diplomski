<script>
    import { onDestroy } from 'svelte'
    import { showSaved, YesOrNo } from '../stores/store'

    onDestroy(() => {
        showSaved.set(true)
    })
</script>

<div class="group-container">
    <div class="group-saved">
        <p>Show saved:</p>
        {#each YesOrNo as ans}
            <label><input type="radio" bind:group={$showSaved} value={ans.value} /> {ans.answer}</label> 
        {/each}
    </div>
    <h3>Readings don't start until you enter a chart!</h3>
</div>

<style>
    .group-container{
        display:grid;
        grid-template-columns: 1fr 2fr;
        border: solid 1px lightgray;
    }
    .group-saved{
        margin: 0px auto;
        padding:0.5em;
    }
    h3{
        padding:1em;
    }
</style>