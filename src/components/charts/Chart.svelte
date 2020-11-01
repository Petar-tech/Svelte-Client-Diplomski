<script lang="ts">
  import { Chart } from "chart.js";
  import { afterUpdate, onMount } from "svelte";

  import HomeButton from "../buttons/HomeButton.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  export let labels;
  export let label;
  export let data;
  export let unit;


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
        responsive: window.innerHeight > 500 ? true:false,
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
  
  onMount(createChart)
  afterUpdate(createChart);
</script>

<style>
  canvas {
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 0.5em;
  }
  @media only screen and (max-height: 500px) {
    .container{
    display:grid;
    box-sizing: border-box;
    grid-template-columns: repeat(2,1fr);
  }
}
</style>

  <div class="container">
    <canvas id="myChart" width="350" height="350" bind:this={ctx} />
    
    <div>
      <Max {data} {unit} />
      <Std {data} {unit} />
    </div>
    <HomeButton />
  </div>
