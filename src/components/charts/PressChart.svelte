<script>
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";

  import { onMount } from "svelte";

  let label = "Pressure [mbar]";
  let data = [];
  let labels = [];
  let bgColor = "rgba(255, 201, 73, 0.2)";

  onMount(async () => {
    const resp = await fetch("http://localhost:5000/data/temp");
    const d = await resp.json();

    d.forEach((el) => {
      data = [...data, el.value];
      labels = [...labels, el.createdAt];
    });
  });
</script>

<Chart {label} {data} {labels} {bgColor} />
<Max {data} unit={'mbar'} />
<Std {data} unit={'mbar'} />
