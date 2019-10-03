import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule,MatSidenavModule,MatToolbarModule ,MatIconModule,MatButtonModule,MatListModule,MatMenuModule } from  '@angular/material';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
  exports :[MatTabsModule,HomeComponent,MatMenuModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatButtonModule,MatListModule]
})
export class MaterialModule { }
