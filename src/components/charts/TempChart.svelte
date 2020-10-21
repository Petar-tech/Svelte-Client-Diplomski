<script>
  import Chart from "./Chart.svelte";
  import Max from "../Max.svelte";
  import Std from "../Std.svelte";
  import { onMount } from "svelte";

  let label = "Temperature [Celsius]";
  let data = [];
  let labels = [];
  let bgColor = "rgba(255, 99, 132, 0.2)";

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

<Max {data} unit={'C'} />
<Std {data} unit={'C'} />
