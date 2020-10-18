<script lang="ts">
    import NextOutline32 from "carbon-icons-svelte/lib/NextOutline32";
    import Temperature24 from "carbon-icons-svelte/lib/Temperature24";
    import Smoke24 from "carbon-icons-svelte/lib/Smoke24";
    import Fog24 from "carbon-icons-svelte/lib/Fog24";
    import { fade } from "svelte/transition";

    import { isOpen } from '../stores/store';

    const options = [
        {name:"Temperature",icon: Temperature24, url: "/temp"},
        {name:"Humidity",icon:Smoke24, url: "/humid"},
        {name:"Pressure",icon:Fog24, url:"/press"}
        ];

const closeDrawer = () => {
      isOpen.set(false);
  }
</script>

<ul>
    <div>
    <h2>Options</h2>
    <button on:click ={closeDrawer} transition:fade>
        <NextOutline32 />
    </button>
</div>
{#each options as option}
    {#if option.icon !== null}
        <li on:click={closeDrawer}>
            <svelte:component this={option.icon}/>
            <a href={option.url} >
            <p>{option.name}</p>
            </a>
        </li>
    {/if}
{/each}
</ul>

<style>
    ul{
        list-style:none;
        display:flex;
        flex-direction: column;
        padding:1em;
    }
    li{
        display:flex;
        align-items: center;
        justify-content: flex-start;
    }
    p{
        margin-left:10px;
        color:white;
    }
    h2{
        margin:0px;
        padding:0px;
        padding-bottom: 0.5em;
        color:white;
    }
    a{
        text-decoration: none;
    }
    button{
        background-color: black;
        border:none;
        box-sizing: border-box;
        position:relative;
        top:2px;
        padding-left: 10px;
    }
    div{
        display:flex;
        align-items: center;
        justify-content: baseline;
    }
</style>