import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {trace, Category} from "ui-router-ng2";
import {AppModule} from "./app.module";

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

platformBrowserDynamic().bootstrapModule(AppModule);
