<script>
  import { onMount, onDestroy } from "svelte";
  
  import Chart from "./Chart.svelte";
  import { setData } from "../../stores/fileSys";
  import { pressure, socket, optionsDrawer as options } from "../../stores/store";

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

  onDestroy(() => setData($pressure,options[2].name))
</script>

<Chart {label} {data} {labels} {unit}/>
