import {Component, Input} from '@angular/core';
import {PasswordItemComponent} from "../password-item/password-item.component";
import {PasswordStatusItem} from "../../state.model";

@Component({
    selector: 'app-password-status-bar',
    templateUrl: './password-status-bar.component.html',
    styleUrl: './password-status-bar.component.scss',
    standalone: true,
    imports: [PasswordItemComponent]
})
export class PasswordStatusBarComponent {
    @Input() passwordStatus: PasswordStatusItem[];

}
