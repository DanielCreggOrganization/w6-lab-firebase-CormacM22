import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from "@angular/router";
import { IonicRouteStrategy } from "@ionic/angular";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      projectId: "fir-ionic-project-dc52e",
      appId: "1:769063483414:web:0b402d09efd31d324dca57",
      storageBucket: "fir-ionic-project-dc52e.appspot.com",
      apiKey: "AIzaSyDibzo0p2mUnQmjN6RlfXlHjbgkzSIUjFY",
      authDomain: "fir-ionic-project-dc52e.firebaseapp.com",
      messagingSenderId: "769063383314"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});

function provideFirestore(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error("Function not implemented.");
}


function getFirestore() {
  throw new Error("Function not implemented.");
}
