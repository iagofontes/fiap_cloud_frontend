import { NgModule } from '@angular/core';
import { MatToolbar,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableDataSource,
    MatTableModule} from '@angular/material';
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
      MatExpansionModule,
      MatPaginatorModule,
      MatTableModule
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
      MatExpansionModule,
      MatPaginatorModule,
      MatTableModule
  ]
})
export class MaterialModule {}
