import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  constructor(private router:Router, private hero:HeroService){}
  finefarm=this.hero.giveData();
gotohere(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singlefruit']);
}
  
}

