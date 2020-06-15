import singleSpaHtml from 'single-spa-html';
import { NavBar } from "./navbar.component";

customElements.define('telefonica-navbar', NavBar);

const htmlLifecycles = singleSpaHtml({
    template: '<telefonica-navbar></telefonica-navbar> ',
})
export const { bootstrap, mount, unmount } = htmlLifecycles;
