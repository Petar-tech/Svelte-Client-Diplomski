<script>
    import { isOpen,title } from '../stores/store';
    import Menu32 from "carbon-icons-svelte/lib/Menu32";

    let headline;
    title.subscribe(val => headline = val);
    const openDrawer = () => {
      isOpen.set(true);
    }
</script>

<nav>
  <button on:click={openDrawer}>
    <Menu32/>
  </button> 

  <h2>{headline}</h2>
</nav>

<style>    
  h2{
    align-items: center;
    justify-content: center;
    color:initial;
    margin:auto; 
    padding-bottom:0.5em;
  }
  button{
    border: none;
    background-color: transparent;
  }
  nav{
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>