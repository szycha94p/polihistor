import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  public toogler: boolean = true;
  //hermetyzacja
  public handleClick(){
    this.toogler= true;
    
  }

  public tooging() {
    this.toogler = !this.toogler;
  }
}
