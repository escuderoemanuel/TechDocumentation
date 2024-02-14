# General Information

- Create a new module
  ```js
  ng generate module moduleName;
  // or
  ng g m moduleName;
  ``` 

- What does a module look like?
  ```ts
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component'; 

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

