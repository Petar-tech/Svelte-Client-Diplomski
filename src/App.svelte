<script lang="ts">
  import page from "page";
  import { title } from './stores/store';

  import Main from "./components/Main.svelte";
  import Layout from "./components/Layout.svelte";

  import HumidChart from "./components/charts/HumidChart.svelte";
  import PressChart from "./components/charts/PressChart.svelte";
  import TempChart from "./components/charts/TempChart.svelte";

  let comp = Main;

  function setTitle(route: any, headline: string) {
    comp = route;
    title.set(headline);
  }

  page("/", () => setTitle(Main, "Home"));
  page("/temp", () => setTitle(TempChart, "Temperature"));
  page("/press", () => setTitle(PressChart, "Pressure"));
  page("/humid", () => setTitle(HumidChart, "Humidity"));
  page.start();
</script>

<Layout>
  <svelte:component this={comp} />
</Layout>
