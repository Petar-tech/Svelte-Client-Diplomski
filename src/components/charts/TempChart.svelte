<script>
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { onDestroy, onMount } from "svelte";
  import { url,temp } from "../../stores/store";

  let label = "Temperature [Celsius]";
  let data = [];
  let labels = [];

  onMount(async () => {
    const resp = await fetch(url + "temp");
    const d = await resp.json();

    d.forEach((el) => {
      data = [...data, el.value];
      labels = [...labels, el.createdAt];
    });
  });

  onDestroy(() => temp.set({data,labels}))
</script>

<Chart {label} {data} {labels} />

<Max {data} unit={'C'} />
<Std {data} unit={'C'} />
