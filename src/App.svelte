<script lang="ts">
  import page from "page";
  
  import Main from "./components/Main.svelte";
  import Form from "./components/Form.svelte";
  import Layout from "./components/Layout.svelte";

  import HumidChart from "./components/HumidChart.svelte";
  import PressChart from "./components/PressChart.svelte";
  import TempChart from "./components/TempChart.svelte";

  let comp = Main;

  page("/", () => (comp = Main));
  page("/config", () => (comp = Form));
  page("/temp", () => (comp = TempChart));
  page("/press", () => (comp = PressChart));
  page("/humid", () => (comp = HumidChart));
  page.start();
</script>

<Layout>
<svelte:component this={comp} />
</Layout>
