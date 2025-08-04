export type Mods = Record<string, undefined | boolean | string >;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([ , value ]) => Boolean(value))
            .map(([ className ]) => className),
    ].join(' ');
}
