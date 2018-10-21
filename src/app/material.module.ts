import { NgModule } from '@angular/core';
import { MatToolbar, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatExpansionModule,
    MatSnackBarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [

  ],
  imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatDividerModule,
      MatFormFieldModule, 
      MatInputModule,
      MatSnackBarModule,
      MatExpansionModule
  ],
  exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatDividerModule,
      MatFormFieldModule, 
      MatInputModule,
      MatSnackBarModule,
      MatExpansionModule
  ]
})
export class MaterialModule { }