<script lang="ts">
    import {Chart} from 'chart.js';
    import HomeButton from "../buttons/HomeButton.svelte";
    import {afterUpdate} from 'svelte';

    export let labels;
    export let label;
    export let data;

    let ctx;

    const createChart = () => {
        let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label,
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    return myChart;
}

    afterUpdate(createChart);
</script>

<canvas id="myChart" width="100" height="100" bind:this={ctx}></canvas>
<HomeButton/>

<style>
    canvas{
        margin:0px;
        padding:0px;
        float: left;
    }
</style>