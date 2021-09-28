import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetallnotesComponent } from './Component/getallnotes/getallnotes.component';
import { TakenoteComponent } from './Component/takenote/takenote.component';
import { DisplayComponent } from './Component/display/display.component';
import { MatCardModule } from '@angular/material/card';
import { IconsComponent } from './Component/icons/icons.component';
import { AuthguradserviceService } from './services/authguradservice/authguradservice.service'
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from './Component/updatenote/updatenote.component';
import {MatMenuModule} from '@angular/material/menu';
import { ArchiveComponent } from './Component/archive/archive.component';
import { TrashComponent } from './Component/trash/trash.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
   
    DashboardComponent,
         GetallnotesComponent,
         TakenoteComponent,
         DisplayComponent,
         IconsComponent,
         UpdatenoteComponent,
         ArchiveComponent,
         TrashComponent,
         

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    ReactiveFormsModule, FormsModule, FlexLayoutModule, HttpClientModule, MatCheckboxModule,MatSnackBarModule,
   MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatCardModule,MatDialogModule,MatMenuModule

  ],
  providers: [
    AuthguradserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }