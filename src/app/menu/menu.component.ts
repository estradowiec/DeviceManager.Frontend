import { Component } from '@angular/core';

@Component({
    selector: 'dm-menu',
    templateUrl: 'menu.template.html'
})
export class MenuComponent {
    deviceTypes: string[] = ["temperature", "lighting", "fan", "motor", "humidity"];
}