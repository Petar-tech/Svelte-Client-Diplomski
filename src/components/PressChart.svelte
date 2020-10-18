<script lang="ts" >
    import Chart from './Chart.svelte';

    let label = '# of Votes';
    let data = [12, 19, 3, 5, 2, 3];
    let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  </script>
  

<Chart {label} {data} {labels}/>