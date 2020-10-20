<script>
    import HomeButton from "./buttons/HomeButton.svelte";
    import { onMount,afterUpdate } from "svelte";
    import { optionsForm,slider_value } from "../stores/store";

    let val;
    let min;
    let max;
    let unit;
    let select;

    onMount(() => {
        val = 0;
        unit = optionsForm[0].unit
        optionsForm[0].min.subscribe(val => min = val)
        optionsForm[0].max.subscribe(val => max = val)
    })

    afterUpdate(() => {
        optionsForm.forEach(el =>{
            if(el.name === select){
                unit = el.unit;
            }
        })
    })

    const reset = (e) => {
        e.preventDefault();
        val=0;
        optionsForm.forEach(el =>{
            if(el.name === select){
                el.max.set(el.default_max);
                el.min.set(el.default_min);
            }
        })
    }

    const save = (e) => {
        e.preventDefault();
        optionsForm.forEach(el =>{
            if(el.name === select){
                slider_value.set(val);
                el.max.set(max);
                el.min.set(min);
            }
        })
    }

    const resetVal = (e) => {
        val=0;
        optionsForm.forEach(el =>{
            if(el.name === select){
               el.max.subscribe(e => max = e);
               el.min.subscribe(e => min = e);
            }
        })
    };
</script>

<form>
<!-- svelte-ignore a11y-no-onchange -->
<select bind:value={select} on:change={resetVal}>
    {#each optionsForm as option}
    <option value={option.name}>{option.name}</option>
    {/each}
</select>
<label for="val">{select}: <strong>{val} {unit} </strong> </label>
<input type="range" {min} {max} bind:value={val} id="val"/>

<label for="min">Minimum:</label>
<input type="text" bind:value={min} id="min"/>

<label for="max">Maximum:</label>
<input type="text" bind:value={max} id="max"/>

<div>
    <button id="save" on:click={save}>Save</button>
    <button id="reset" on:click={reset}>Reset</button>
</div>
</form>

<HomeButton/>

<style>
    form{
        display:flex;
        width:75%;
        flex-direction: column;
        padding:2em;
        border:solid;
        border-color: slategray;
        border-width: 0.5px;
        margin:auto;
    }
    div{
        width: 100%;
        margin-top:0.5em;
    }
    select{
        appearance: none;
        background-color:white;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        margin-bottom:1em;
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 5px;
    }
    option{
        color:black;
    }
    label{
        margin-bottom:5px;
    }
    button{
        padding:0.7em;
        padding-left:1em;
        padding-right:1em;
        border-radius: 1em;
        margin-right: 0.5em;
    }
    #reset{
        color:white;
        background-color: red;
        border:none;
        font-size: 16px;
    }
    #save{
        color:black;
        background-color: orange;
        border:none;
    }
</style>