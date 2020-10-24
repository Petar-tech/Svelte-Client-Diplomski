<script>
  import { onMount } from "svelte";
  
  import Chart from "./Chart.svelte";

  import { pressure, socket } from "../../stores/store";

  let label = "Pressure [mbar]";
  let data = [];
  let labels = [];
  let unit = 'mbar';

  onMount(() => {
    socket.on("press-data", data => {
      pressure.update(old => [...old,data.fullDocument])
    })

    pressure.subscribe(next => {
      next.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
      })
    })
  });
</script>

<Chart {label} {data} {labels} {unit}/>
