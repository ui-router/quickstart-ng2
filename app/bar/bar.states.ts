import {Http} from "@angular/http";
import {BarListComponent} from "./barList.component";
import {BarDetailsComponent} from "./barDetail.component";
import {BarFooterComponent} from "./barFooter.component";

/** Resolves for bar states */
// Note: see bootstrap/router.config.ts for notes on temporary string-based resolve injection (Angular 1 style)

const reject = (message) => new Promise((resolve, reject) => reject(message));

// Inject 'http' and fetch all the bar data
const barList = (http: Http) =>
    http.get('/data/barData.json').map(res => res.json()).toPromise() || reject("Couldn't fetch barData");


// Inject the barList (from the parent) and find the correct
const barDetail = (barList, $transition$) =>
    barList.find(item => item.id == $transition$.params().barId) || reject(`Unable to find bar #${$transition$.params().barId}`);


/** The 'bar' submodule's states. */
export let BAR_STATES = [
    // A state for the 'app.bar' submodule.
    // Fills in the unnamed <ui-view> ($default) from `app` state with `BarListComponent`
    // Fills in the footer <ui-view name="footer"> from `app` state with `BarFooterComponent`
    // Fetches barList data using a resolve, then the component displays the data
    { 
        name: 'app.bar', 
        url: '/bar', 
        views: {
            $default: { component: BarListComponent },
            footer: { component: BarFooterComponent }
        },
        resolve: { barList }
    },

    // A child state of app.bar
    // This state fills the unnnamed <ui-view> (in `BarListComponent` from  `app.foo` state) with `BarDetailsComponent`
    // Has a parameter :barId which appears in the URL
    // Resolves barDetail, then the component displays the data
    { name: 'app.bar.details', url: '/:barId', component: BarDetailsComponent, resolve: { barDetail } },
];


