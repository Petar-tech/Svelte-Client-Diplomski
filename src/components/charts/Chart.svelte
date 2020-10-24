<script lang="ts">
  import { Chart } from "chart.js";
  import { afterUpdate, onDestroy } from "svelte";

  import HomeButton from "../buttons/HomeButton.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  export let labels;
  export let label;
  export let data;
  export let unit;

  let isMounted = true;

  let bgColor = "rgba(255, 165, 0,0.4)";
  let ctx;
  let myChart;

  const createChart = () => {
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: [bgColor],
          },
        ],
      },
      options: {
        responsive:false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return myChart;
  };
  
  afterUpdate(createChart);
  onDestroy(() => isMounted = false);
</script>

<style>
  canvas {
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 0.5em;
  }
</style>

{#if isMounted}
  <canvas id="myChart" width="350" height="350" bind:this={ctx} />
  <Max {data} {unit} />
  <Std {data} {unit} />
  <HomeButton />
{/if}
