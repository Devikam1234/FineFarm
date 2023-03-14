import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent {
  constructor(private router:Router, private hero:HeroService){}
  finefarm=this.hero.giveData();
gotohere(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singleflowers']);
}
  
}
