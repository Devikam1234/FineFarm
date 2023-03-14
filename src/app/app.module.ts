import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { vegetablesComponent } from './pages/vegetables/vegetables.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { FlowerComponent } from './pages/flower/flower.component';
import { HerbsComponent } from './pages/herbs/herbs.component';
import { SingleComponent } from './pages/single/single.component';
import { SinglefruitComponent } from './pages/singlefruit/singlefruit.component';
import { SingleflowersComponent } from './pages/singleflowers/singleflowers.component';
import { SingleherbssComponent } from './pages/singleherbss/singleherbss.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    vegetablesComponent,
    FruitsComponent,
    FlowerComponent,
    HerbsComponent,
    SingleComponent,
    SinglefruitComponent,
    SingleflowersComponent,
    SingleherbssComponent,
    PaymentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
