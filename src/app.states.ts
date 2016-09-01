import {AppComponent} from "./app.component";
import {Ng2StateDeclaration, loadNgModule} from "ui-router-ng2";

/** The top level state(s) */
export let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', component: AppComponent },
    { name: 'app.baz', url: '/baz{rest:.*}', params: { rest: null }, lazyLoad: loadNgModule('src/baz/baz.module') }
];
