import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent {
  constructor(private router:Router, private hero:HeroService){}
  finefarm=this.hero.giveData();
gotohere(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singleherbss']);
}
  
}

