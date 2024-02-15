enum PasswordStatusEnum {
    Error = -1,
    Empty = 0,
    Low = 1,
    Mid = 2,
    High = 3
}

const PasswordStatusConfigs: Record<PasswordStatusEnum, PasswordStatusItem[]> = {
    [PasswordStatusEnum.Error]: new Array(3).fill({color: 'red'}),
    [PasswordStatusEnum.Empty]: new Array(3).fill({color: 'gray'}),
    [PasswordStatusEnum.Low]: [{color: 'red'}, ...new Array(2).fill({color: 'gray'})],
    [PasswordStatusEnum.Mid]: [...new Array(2).fill({color: 'yellow'}), {color: 'gray'}],
    [PasswordStatusEnum.High]: new Array(3).fill({color: 'green'}),
}

const PasswordStateMap = new Map<number, PasswordStatusItem[]>
PasswordStateMap.set(PasswordStatusEnum.Error, PasswordStatusConfigs[PasswordStatusEnum.Error])
PasswordStateMap.set(PasswordStatusEnum.Empty, PasswordStatusConfigs[PasswordStatusEnum.Empty])
PasswordStateMap.set(PasswordStatusEnum.Low, PasswordStatusConfigs[PasswordStatusEnum.Low])
PasswordStateMap.set(PasswordStatusEnum.Mid, PasswordStatusConfigs[PasswordStatusEnum.Mid]);
PasswordStateMap.set(PasswordStatusEnum.High, PasswordStatusConfigs[PasswordStatusEnum.High])


interface PasswordStatusItem {
    color: string;
}

type InputType = 'string' | 'number' | 'symbol'


export {PasswordStatusEnum, PasswordStatusConfigs, PasswordStateMap, PasswordStatusItem, InputType}
