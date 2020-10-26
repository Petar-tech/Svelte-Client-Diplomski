<script lang="ts">
    import NextOutline32 from "carbon-icons-svelte/lib/NextOutline32";

    import { fade } from "svelte/transition";

    import { isOpen, optionsDrawer as options } from '../stores/store';

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
        margin-bottom: 0.5em;
        display:flex;
        align-items: center;
        justify-content: flex-start;
    }
    p{
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 400;
        color:white;
    }
    h2{
        margin:0px;
        padding:0px;
        padding-bottom: 0.5em;
        color:white;
        font-weight: 400;
        font-size: 30px;
    }
    a{
        text-decoration: none;
        margin-left:auto;
        margin-right: auto;
    }
    button{
        background-color: black;
        border:none;
        box-sizing: border-box;
        position:relative;
        top:2px;
        padding-left: 10px;
        margin-left:auto;
    }
    div{
        display:flex;
        align-items: center;
        justify-content: baseline;
    }
</style>