<script>
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { onDestroy, onMount } from "svelte";
  import { url,humid } from "../../stores/store";

  let label = "Humidity [g/kg]";
  let data = [];
  let labels = [];
  onMount(async () => {
    const resp = await fetch(url + "humid");
    const d = await resp.json();

    d.forEach((el) => {
      data = [...data, el.value];
      labels = [...labels, el.createdAt];
    });
  });

  onDestroy(() => humid.set({data,labels}))
</script>

<Chart {label} {data} {labels} />
<Max {data} unit={'g/kg'} />
<Std {data} unit={'g/kg'} />
