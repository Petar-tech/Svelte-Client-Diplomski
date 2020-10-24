<script lang="ts">
  import { Chart } from "chart.js";
  import { afterUpdate } from "svelte";

  import HomeButton from "../buttons/HomeButton.svelte";

  export let labels;
  export let label;
  export let data;

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
    top: 0.5em;
  }
</style>

<canvas id="myChart" width="100" height="100" bind:this={ctx} />
<HomeButton />
