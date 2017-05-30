import {UIRouter} from "@uirouter/angular";
import {Injectable} from "@angular/core";
declare var SystemJS;

/**
 * This function configures the router
 */
export function routerConfig(uiRouter: UIRouter) {
  // Show the ui-router visualizer
  let vis = window['ui-router-visualizer'];
  vis.visualizer(uiRouter);
}
