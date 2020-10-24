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
        font-weight: 400;
        font-size: 30px;
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