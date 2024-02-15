import {Component} from '@angular/core';
import {InputComponent} from "./components/input/input.component";
import {PasswordItemComponent} from "./components/password-item/password-item.component";
import {count} from "rxjs";
import {PasswordStatusBarComponent} from "./components/password-status-bar/password-status-bar.component";
import {StateService} from "./state.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [
        InputComponent,
        PasswordItemComponent,
        PasswordStatusBarComponent,
        AsyncPipe,
    ]
})
export class AppComponent {
    constructor(public stateService: StateService) {
    }
}
