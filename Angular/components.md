# Components

- Create a component
  ```powershell
  ng generate component componentName
  <# or #>
  ng g c componentName
  ```
- Parts
  - component.ts file (componentName.component.ts)
  - html file (componentName.component.html)
  - css file (componentName.component.css)
  - test file (componentName.component.specs.ts)
- Example component.ts
  ```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  export class AppComponent {
    title = 'angular-app';
  }

  // Properties
  title: string = 'Component'

  // Constructor
  constructor() {}

  // Initialize method
  ngOnInit(): void {

  }

  // Others...
  ```


