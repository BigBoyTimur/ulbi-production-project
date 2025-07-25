type Mods = Record<string, string | boolean >;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([ , value ]) => Boolean(value))
            .map(([ className ]) => className),
    ].join(' ');
}
