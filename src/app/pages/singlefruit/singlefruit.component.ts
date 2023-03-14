import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './singlefruit.component.html',
  styleUrls: ['./singlefruit.component.css']
})
export class SinglefruitComponent {
  constructor(private hero:HeroService){}
    data=this.hero.giveData()
    
    singlefruit:any
    ngOnInit(){
      let id=Number(localStorage.getItem('id'))
      this.singlefruit=this.data.filter(e=> e.id==id)
      console.log("name",this.singlefruit)
    }
  }
