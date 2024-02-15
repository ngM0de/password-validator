import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {StateService} from "../../state.service";
import {InputType, PasswordStatusEnum, PasswordStatusConfigs} from "../../state.model";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class InputComponent implements OnInit {
    public readonly input = new FormControl<string>('', Validators.minLength(8))
    public validationCounter: PasswordStatusEnum = 0

    constructor(
        private readonly stateService: StateService) {
    }

    ngOnInit() {
        this.input.valueChanges.subscribe(this.validateInput.bind(this))
    }

    public focus(event: Event): void {
        (event.target as HTMLInputElement).focus()
    };

    public replaceSpace(event: Event): void {
        if (event instanceof InputEvent) {
            if (event.data && this.stateService.space.test(event.data)) {
                const input = event.target as HTMLInputElement;
                input.value = input.value.replace(this.stateService.space, '')
                if (input.value === '') {
                    this.updatePasswordState(PasswordStatusEnum.Empty)
                }
            }
        }
    };

    private validateInput(value: string | null): void {
        if (!value?.length) {
            this.updatePasswordState(PasswordStatusEnum.Empty)
            return
        }
        if (this.input.status === 'INVALID') {
            this.updatePasswordState(PasswordStatusEnum.Error)
            return;
        }
        this.checkUserInput(value)
    };

    private updatePasswordState(counter: PasswordStatusEnum): void {
        this.stateService.passwordStatus$.next(PasswordStatusConfigs[counter])
    };

    private checkValueByType(value: string, type: InputType): void {
        if (this.stateService[type].test(value)) {
            this.validationCounter++
        }
    };

    private checkUserInput(value: string) {
        this.checkValueByType(value, 'string')
        this.checkValueByType(value, 'number')
        this.checkValueByType(value, 'symbol')
        this.updatePasswordState(this.validationCounter)
        this.validationCounter = 0
    }


}

