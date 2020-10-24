<script>
  import { onMount } from "svelte";

  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { temperature, socket } from "../../stores/store";

  let label = "Temperature [Celsius]";
  let data = [];
  let labels = [];

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

<Chart {label} {data} {labels} />
<Max {data} unit={'C'} />
<Std {data} unit={'C'} />
