import singleSpaHtml from "single-spa-html";

const htmlLifecycles = singleSpaHtml({
  template: `<h1 style='text-align: center;'>Single-Spa App</h1>
<h1 style='text-align: center;'>Arquitectura Digital</h1>`,
});
export const { bootstrap, mount, unmount } = htmlLifecycles;
