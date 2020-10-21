<script lang="ts">
  import { Chart } from "chart.js";
  import HomeButton from "../buttons/HomeButton.svelte";
  import { afterUpdate } from "svelte";

  export let labels;
  export let label;
  export let data;
  export let bgColor;

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
</script>

<style>
  canvas {
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 1em;
  }
</style>

<canvas id="myChart" width="100" height="100" bind:this={ctx} />
<HomeButton />
