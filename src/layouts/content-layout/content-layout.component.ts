import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  imports: [HeaderComponent , RouterModule],
  templateUrl: './content-layout.component.html',
})
export class ContentLayoutComponent {

}
