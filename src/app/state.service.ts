import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PasswordStatusItem, PasswordStatusEnum, PasswordStatusConfigs} from "./state.model";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public passwordStatus$ = new BehaviorSubject<PasswordStatusItem[]>(PasswordStatusConfigs[PasswordStatusEnum.Empty])
    public readonly string = /[a-zA-Z]+/
    public readonly number = /[0-9]+/
    public readonly symbol = /(\`)+|(\!)+|(\@)+|(\#)+|(\$)+|(\%)+|(\^)+|(\&)+|(\*)+|(\()+|(\))+|(\_)+|(\-)+|(\+)+|(\=)+|(\[)+|(\])+|(\{)+|(\})+|(\;)+|(\')+|(\:)+|(\|)+|(\,)+|(\.)+|(\<)+|(\>)+|(\/)+|(\?)+|(\~)+/
    public readonly space = /\s/g;
}