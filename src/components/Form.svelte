<script>
    import { optionsDrawer as units, temperature, pressure, humidity } from '../stores/store'
    import List from './List.svelte'

    let unit;
    let sort;

    let sortValue = ["Ascending","Descending"]

    const clearStore = () => {
        temperature.set([])
        humidity.set([])
        pressure.set([])
    }
</script>

<form id="main">
    <select name="unit" id="unit" form="main" bind:value={unit}>
        {#each units as unit}
            <option value={unit.name}>{unit.name}</option>
        {/each}
    </select>
    <select name="sort" id="sort" form="main" bind:value={sort}>
        {#each sortValue as value}
            <option value={value}>{value}</option>
        {/each}
    </select>

    <button id="clear" on:click|preventDefault={clearStore}>Clear</button>
</form>
<List {unit} {sort} />

<style>
    select{
        -webkit-appearance: none;
        flex:2;
        margin-right:0.5em;
        background-color: transparent;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 5px; 
        border-radius:15px;
        border: 1px solid #dfdfdf;
        font-size:14px;
        /* text-align-last:center; */
    }
    form{
        display:flex;
        margin-top:0.5em;
    }
    button{
        flex:1;
        background-color:red;
        color:white;
        border-radius:15px;
        border:none;
        font-size:14px;
    }
    option{
        background-color: white;
        color:black;
        border-radius: 15px;
        border:none;
    }
</style>