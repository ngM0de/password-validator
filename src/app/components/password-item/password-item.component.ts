import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
    selector: 'app-password-item',
    templateUrl: './password-item.component.html',
    styleUrl: './password-item.component.scss',
    standalone: true,
    imports: [
        NgStyle
    ],
})
export class PasswordItemComponent {
    @Input() color: string;
}
