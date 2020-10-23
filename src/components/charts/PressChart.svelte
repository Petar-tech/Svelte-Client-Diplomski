<script>
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { onDestroy, onMount } from "svelte";
  import { url,press } from "../../stores/store";

  let label = "Pressure [mbar]";
  let data = [];
  let labels = [];

  onMount(async () => {
    const resp = await fetch(url + "press");
    const d = await resp.json();

    d.forEach((el) => {
      data = [...data, el.value];
      labels = [...labels, el.createdAt];
    });
  });

  onDestroy(() => press.set({data,labels}))
</script>

<Chart {label} {data} {labels} />
<Max {data} unit={'mbar'} />
<Std {data} unit={'mbar'} />
