export declare type TimeZone = number | string;
export declare type TimeInput = [TimeZone, TimeZone, TimeZone, TimeZone, TimeZone, TimeZone, TimeZone] | Date | number;
export declare class FormatTime {
    private time;
    readonly Years: number;
    readonly Months: number;
    readonly Days: number;
    readonly Hours: number;
    readonly Minutes: number;
    readonly Seconds: number;
    readonly Milliseconds: number;
    readonly FormatDate: string;
    readonly FormatTime: string;
    readonly FormatDateTime: string;
    readonly UnixTime: number;
    static Create: (param: TimeInput, zone?: number) => FormatTime;
    static Parse: (pattern: string | RegExp, target: string, zone?: number, keys?: string[]) => FormatTime;
    constructor(param: TimeInput, zone?: number);
}
