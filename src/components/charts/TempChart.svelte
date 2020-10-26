<script>
  import { onMount, onDestroy } from "svelte";

  import Chart from "./Chart.svelte";
  import { setData } from "../../stores/fileSys";
  import { temperature, socket, optionsDrawer as options } from "../../stores/store";

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

  onDestroy(() => setData($temperature, options[0].name))
</script>

<Chart {label} {data} {labels} {unit}/>
