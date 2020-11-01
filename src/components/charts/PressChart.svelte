<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  
  import Chart from "./Chart.svelte";
  import { setData } from "../../stores/fileSys";
  import { pressure, socket, optionsDrawer as options } from "../../stores/store";

  let label = "Pressure [mbar]";
  let data = [];
  let labels = [];
  let unit = 'mbar';

  function serialize(){
    $pressure.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
    })
  }

  onMount(() => {
    socket.on("press-data", data => {
      humidity.update(old => [...old,data.fullDocument])
    })

    serialize()
  });

  afterUpdate(serialize)

  onDestroy(() => setData($pressure,options[2].name))
</script>

<Chart {label} {data} {labels} {unit}/>
