import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http" 

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  timeline = {"statuses":[]};
  constructor(private http:HttpClient) {}
  public anyList:any
  ngOnInit(){
    this.http.get("assets/timeline.json")
    .subscribe(res=>{ this.timeline = res })
  }
}
