# first-angular-app
basic app


setup
creating starter kit
ang2 components
child components
data binding
forms and validation
passed data around components

In app.component.html file

*ngFor="let user of users"      <!--structural directive-->
(click)="selectUser(user)"       <!--event binding-->
[class.active]="user===activeUser">     <!-- property binding-->
----------------
go to app.component.ts
 selector:'my-app',   //IS CUSTOM ELEMENT
----------------
shadow dom- means whateever we do in app component it would not reflect out of it.
Angular 2 is primarily a one-way data-binding process. One-way makes our applications very predictable and we can always know that a child component will get updated after its parent components.

() event binding: data flows out of
[] property binding: data flows into
We'll also use these bindings to pass data between components. In addition to inter-component communication, these bindings can also work within a singular component and pass information between class to template.          
-------------------------------
<header>
   <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">My Angular 2 App!</a>
      </div>
    </nav>
</header>
<main>

  <div class="row">
    <div class="col-sm-4">
      <div *ngIf="users">
        <ul class="list-group users-list">
          <li class="list-group-item"
             *ngFor="let user of users"      
              (click)="selectUser(user)"      
              [class.active]="user===activeUser">     
            {{user.name}}({{user.username}})
          </li>
        </ul>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="jumbotron" *ngIf="activeUser">
        <h2>{{activeUser.name}}<small>{{activeUser.username}}</small></h2>

        <input class="form-control" [(ngModel)]="activeUser.name">
      </div>

      <div class="jumbotron gocrazy" *ngIf="!activeUser">
        <span class="glyphicon glyphicon-hand-left"></span>
        <h2>Choose a user</h2>
      </div>
    </div>
  </div>

</main>
<footer class="text-center">
  Copyright &copy; 2016
</footer>
-----------------
        button[type=submit].btn.btn-lg.btn-block.btn-primary
