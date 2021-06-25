import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillComponent} from './skill/skill.component';
import { BackendService } from './backend.service';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor (private backendService: BackendService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
