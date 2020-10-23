<script lang="ts">
  import page from "page";
  import { title } from "./stores/store";

  import Main from "./components/Main.svelte";
  import Form from "./components/Form.svelte";
  import Layout from "./components/Layout.svelte";

  import HumidChart from "./components/charts/HumidChart.svelte";
  import PressChart from "./components/charts/PressChart.svelte";
  import TempChart from "./components/charts/TempChart.svelte";

  import Log from "./components/Log.svelte";

  let comp = Main;

  function setState(route: any, headline: string) {
    comp = route;
    title.set(headline);
  }

  page("/", () => setState(Main, "Home"));
  page("/config", () => setState(Form, "Configuration"));
  page("/temp", () => setState(TempChart, "Temperature"));
  page("/press", () => setState(PressChart, "Pressure"));
  page("/humid", () => setState(HumidChart, "Humidity"));
  page("/logs", () => setState(Log, "Logs"));
  page.start();
</script>

<Layout>
  <svelte:component this={comp} />
</Layout>
