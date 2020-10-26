<script>
    import { 
        optionsDrawer as options,
        temperature,
        humidity,
        pressure
     } from "../stores/store";
    import ListItem from './ListItem.svelte'
    import { onMount,afterUpdate } from 'svelte'
    import { getData } from "../stores/fileSys";

    export let unit;
    export let sort;

    let temp;
    let press;
    let humid;

    onMount(async () => {
        temp = await getData(options[0].name)
        humid = await getData(options[1].name)
        press = await getData(options[2].name)
    })

    afterUpdate(() => {
        
    })

</script>

<ul>
    {#if unit === options[0].name}
        <ListItem collection={temperature} {sort} saved={temp} />
    {/if}

    {#if unit === options[1].name}
        <ListItem collection={humidity} {sort} saved={humid} />
    {/if}

    {#if unit === options[2].name}
        <ListItem collection={pressure} {sort} saved={press} />
    {/if}
</ul>