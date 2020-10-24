<script>
    import { 
        optionsDrawer as options,
        temperature,
        humidity,
        pressure
     } from "../stores/store";
     import ListItem from './ListItem.svelte'

    export let unit;
    export let sort;
</script>

<ul>
    {#if unit === options[0].name}
        <ListItem collection={temperature} {sort} />
    {/if}

    {#if unit === options[1].name}
        <ListItem collection={humidity} {sort} />
    {/if}

    {#if unit === options[2].name}
        <ListItem collection={pressure} {sort} />
    {/if}
</ul>