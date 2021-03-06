import { UserDetailComponent } from './remote/user-detail-component/user-detail-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { ConsumeRemoteDataComponent } from './remote/consume-remote-data/consume-remote-data.component';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { AutoSearchPipePipe } from './myPipes/auto-search-pipe.pipe';
import { TemplateFormComponent } from './from/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { AnimationComponent } from './animation/animation.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BootsnipComponent } from './bootsnip/bootsnip.component';


@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    ConsumeRemoteDataComponent,
    UsersAPIComponentComponent,
    AutoSearchPipePipe,
   UserDetailComponent,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationComponent,
    LandingpageComponent,
    BootsnipComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
                      {
                        path:'',
                        redirectTo:'task',
                        pathMatch:'full'
                      },
                      {
                        path:'family',
                        component:GrandParentComponent,
                        children:[
                          {
                            path:'',
                            redirectTo:'father',
                            pathMatch:'full'
                          },
                          {
                            path:'father',
                            component:FatherComponent
                          },
                          {
                            path:'mother',
                            component:MotherComponent
                          }
                        ]
                      },
                      {
                        path:'task',
                        component:TaskManagerComponent
                      },
                      {
                        path:'consumeLocal1',
                        component:ConsumeLocalService1Component
                      },
                      {
                        path:'consumeLocal2',
                        component:ConsumeLocalService2Component
                      },
                      {
                        path:'remoteData',
                        component:ConsumeRemoteDataComponent
                      },
                      {
                        path:'remoteuser',
                        component:UsersAPIComponentComponent
                      },
                      {
                        path:'remoteData/:userid',
                        component:UserDetailComponent
                      },
                       {
                        path:'templateform',
                        component:TemplateFormComponent
                      },
                      {
                        path:'modelform',
                        component:ModelFormComponent
                      },
                      {
                        path:'animate',
                        component:AnimationComponent
                      },
                      {
                        path:'landingpage',
                        component:LandingpageComponent
                      },
                      {
                        path:'bootsnip',
                        component:BootsnipComponent
                      },
                      {
                        path:'**',
                        component:NotFoundComponent
                      },
                     
                    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
