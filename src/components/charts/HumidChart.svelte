<script>
  import { onMount } from "svelte";

  import Chart from "./Chart.svelte";

  import { socket,humidity } from "../../stores/store";

  let label = "Humidity [g/kg]";
  let data = [];
  let labels = [];
  let unit = 'g/kg'

  onMount(() => {
    socket.on("humid-data", data => {
      humidity.update(old => [...old,data.fullDocument])
    })

    humidity.subscribe(next => {
      next.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
      })
    })
  });

</script>

<Chart {label} {data} {labels} {unit}/>

