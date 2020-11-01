<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";

  import Chart from "./Chart.svelte";
  import { setData } from "../../stores/fileSys";
  import { temperature, socket, optionsDrawer as options } from "../../stores/store";

  let label = "Temperature [Celsius]";
  let data = [];
  let labels = [];
  let unit = 'C';

  function serialize(){
    $temperature.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
    })
  }

  onMount(() => {
    socket.on("humid-data", data => {
      temperature.update(old => [...old,data.fullDocument])
    })

    serialize()
  });

  afterUpdate(serialize)

  onDestroy(() => setData($temperature, options[0].name))
</script>

<Chart {label} {data} {labels} {unit}/>
