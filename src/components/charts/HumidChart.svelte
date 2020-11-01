<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";

  import Chart from "./Chart.svelte";
  import { setData } from "../../stores/fileSys";
  import { socket,humidity, optionsDrawer as options } from "../../stores/store";

  let label = "Humidity [g/kg]";
  let data = [];
  let labels = [];
  let unit = 'g/kg'

  function serialize(){
    $humidity.forEach((el,i) => {
        data[i] = el.value
        labels[i] = el.createdAt
    })
  }

  onMount(() => {
    socket.on("humid-data", data => {
      humidity.update(old => [...old,data.fullDocument])
    })

    serialize()
  });

  afterUpdate(serialize)

  onDestroy(() => {
    setData($humidity,options[1].name)
  })
</script>

<Chart {label} {data} {labels} {unit}/>

