<script lant="ts">
    import { isOpen } from '../stores/store';
    import Menu32 from "carbon-icons-svelte/lib/Menu32";

    const openDrawer = () => {
      isOpen.set(true);
    }
</script>

<nav>
  <button on:click={openDrawer}>
    <Menu32/>
  </button> 

  <h2>Application</h2>
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