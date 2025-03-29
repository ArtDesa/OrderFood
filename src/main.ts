//main.ts -> 
/*ensures the Application starts in Dev or Production mode, 
and specifies the module (AppModule) to use to initialize and launch the Application. */

import { enableProdMode } from '@angular/core';
//This function is used to switch Angular into production mode, disabling development-specific checks and features.
/*(In development mode (the default), Angular performs additional checks and validations (e.g., change detection debugging, warnings, etc.) to help developers catch errors.) 
These checks can impact performance, so in a production environment, enableProdMode disables these extra checks to optimize performance. */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//This is the entry point for bootstrapping Angular applications that run in a web browser.
/* platformBrowserDynamic is specifically designed for dynamic browser-based applications.
   It creates the runtime platform in the browser and then bootstraps the root module (AppModule) to start the application. */

import { AppModule } from './app/app.module';
//AppModule class from the app module app.module.ts file
import { environment } from './environments/environment';
//const environment variable from environment.ts. Set to "False" by default

//If the production property of the enviroment object from environment.ts is False -> Nothing
//If production is True -> run the enableProdMode() to start App in Production mode.
if (environment.production) {
  enableProdMode();
}
//Boostrapping process
//platformBrowserDynamic() -> method creates a platform for running Angular applications in a browser environment.
//.bootstrapModule() -> method is used to initialize and launch the Angular application by bootstrapping the specified module as an Argument.
/* .catch(err => console.error(err)) -> makes sure errors are caught and sent to the console for visibility.
   The bootstrapModule() returns a promise that resolves when the application is successfully bootstrapped.
   If an error occurs during the bootstrapping process (e.g., missing dependencies or misconfigured modules), 
   the .catch() block handles it by logging the error to the console using console.error(err). */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
