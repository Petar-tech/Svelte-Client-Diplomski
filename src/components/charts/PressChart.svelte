<script>
  import { onMount } from "svelte";
  
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { pressure, socket } from "../../stores/store";

  let label = "Pressure [mbar]";
  let data = [];
  let labels = [];

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

<Chart {label} {data} {labels} />
<Max {data} unit={'mbar'} />
<Std {data} unit={'mbar'} />
