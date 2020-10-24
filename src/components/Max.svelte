<script>
  export let data;
  export let unit;

  const getMax = (data) => Math.max(...data);
  $: max = getMax(data);
</script>

<style>
  p {
    display: block;
    background-color: black;
    padding: 1em;
    margin-top: 2em;
    color: white;
    letter-spacing: 1px;
    text-align: center;
  }
  strong {
    color: orange;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 40px;
  }
</style>

{#if isFinite(max)}
  <p>The maximum value is: <strong>{max} {unit}</strong></p>
{:else}
  <h3>Loading...</h3>
{/if}
