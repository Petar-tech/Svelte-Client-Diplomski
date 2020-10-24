<script>
  import { onMount } from "svelte";

  import Chart from "./Chart.svelte";

  import { temperature, socket } from "../../stores/store";

  let label = "Temperature [Celsius]";
  let data = [];
  let labels = [];
  let unit = 'C';

  onMount(() => {
    socket.on("temp-data", data => {
      temperature.update(old => [...old,data.fullDocument])
    })

    temperature.subscribe(next => {
      next.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
      })
    })
  });
</script>

<Chart {label} {data} {labels} {unit}/>
