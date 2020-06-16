import "./index.scss";
import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@telefonica/react-hook",
  app: () => System.import("@telefonica/react-hook"),
  activeWhen: (location) => isActive.react(location),
});



registerApplication({
  name: "@telefonica/angular-nueve",
  app: () => System.import("@telefonica/angular-nueve"),
  activeWhen: (location) => isActive.angular9(location),
});


registerApplication({
  name: "@telefonica/vue",
  app: () => System.import("@telefonica/vue"),
  activeWhen: (location) => isActive.vue(location),
});

registerApplication({
  name: "@telefonica/root-page",
  app: () => import("./apps/root-page"),
  activeWhen: (location) => isActive.navbar(location),
});

registerApplication({
  name: "@telefonica/navigation-bar",
  app: () => System.import("@telefonica/navigation-bar"),
  activeWhen: () => true,
});


start();
