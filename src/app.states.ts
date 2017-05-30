import {AppComponent} from "./app.component";
import {Ng2StateDeclaration, loadNgModule} from "@uirouter/angular";

/** The top level state(s) */
export let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', component: AppComponent },

    // This is the Future State for lazy loading the BazModule
    { name: 'app.baz.**', url: '/baz', lazyLoad: loadNgModule('src/baz/baz.module') }
];
