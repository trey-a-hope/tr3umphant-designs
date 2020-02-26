import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { NgIf } from '@angular/common';

export interface Feature {
  icon: string;
  name: string;
  description: string;
  cost: number;
  active: boolean;
}

@Component({
  selector: 'pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})

export class PricingPageComponent implements OnInit {

  displayedColumns: string[] = ['icon','name', 'description', 'cost', 'active'];

  features: Feature[] = [
    {icon: 'fa-dollar', name: 'Base Development Fee', description: 'This includes outlining functionality, designing the mockups, and general development fee for the app.', cost: 1000, active: true},
    {icon: 'fa-sign-in-alt', name: 'Registration/Login', description: 'Register/login with email & password, social media, or phone number.', cost: 750, active: false},
    {icon: 'fa-users', name: 'Social Integration', description: 'Share text or images on social networks like Facebook or Twitter. Alternative social medias can be used as well.', cost: 500, active: false},
    {icon: 'fa-user-circle', name: 'User Profile', description: 'Manage personal profile with name, gender, age, bio, etc.', cost: 500, active: false},
    {icon: 'fa-money-check-alt', name: 'Payments', description: 'Make payments via the app using credit card information.', cost: 2000, active: false},
    {icon: 'fa-search', name: 'Search', description: 'Search for a single entity based on the criteria they so choose.', cost: 1000, active: false},
    {icon: 'fa-comments', name: 'Chat', description: 'Communicate with other users inside the app, (requires Push Notifications).', cost: 1500, active: false},
    {icon: 'fa-envelope', name: 'Push Notifications', description: 'Notify users of an event inside the app.', cost: 500, active: false},
    {icon: 'fa-user-shield', name: 'Admin Functionality', description: 'Edit rules, permissions, or data. Authorized only for a select group.', cost: 750, active: false},
    {icon: 'fa-bluetooth', name: 'Bluetooth', description: 'Users can connect to other devices via blue tooth.', cost: 500, active: false},
    {icon: 'fa-street-view', name: 'Geolocation', description: 'View locations of other users, share their locations, etc.', cost: 1500, active: false},
    {icon: 'fa-calendar-alt', name: 'Calendar', description: 'Save events to their calendar.', cost: 500, active: false},
    {icon: 'fa-camera', name: 'Camera', description: 'Take photos or choose photos from gallery.', cost: 750, active: false},
    {icon: 'fa-chart-bar', name: 'Analytics', description: 'Track users’ behavior and monitor the app’s stability.', cost: 500, active: false}
  ];

  constructor(public urlService: UrlService) { }

  ngOnInit() {
  }

  //Select all checkboxes.
  selectAll = (): void => {
    this.features.forEach((feature) => {
      feature.active = true;
    });
  }

    //Deselect all checkboxes.
  deselectAll = (): void => {
    this.features.forEach((feature) => {
      if(feature.name != 'Base Development Fee'){
        feature.active = false;
      }
    });  }

    /** Gets the total cost of all transactions. */
    getTotalCost = (): number => {
      return this.features.filter((feature) => feature.active).map(feature => feature.cost).reduce((acc, value) => acc + value, 0);
    }

}
