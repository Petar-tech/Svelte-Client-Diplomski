<script>
  export let data;
  export let unit;

  const getMean = (data) => {
    return data.reduce((a, b) => Number(a) + Number(b)) / data.length;
  };

  const getSD = (data) =>
    Math.sqrt(
      data.reduce((sq, n) => sq + Math.pow(n - getMean(data), 2), 0) /
        (data.length - 1)
    );

  $: std = () => parseFloat(getSD(data).toPrecision(4));
</script>

<style>
  p {
    display: block;
    background-color: black;
    padding: 1em;
    color: white;
    margin-top: 1em;
    box-sizing:content-box;
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

{#if std() !== 0 && !isNaN(std()) }
  <p>The standard deviation value is: <strong>{std()} {unit}</strong></p>
{:else}
  <h3>Loading...</h3>
{/if}
