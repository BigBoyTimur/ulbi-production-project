import { classNames } from '../../lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        disabled,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = options?.map((opt) => {
        return (
            <option
                className={ cls.option }
                key={ opt.value }
                value={ opt.value }
            >
                { opt.content }
            </option>
        );
    });

    return (
        <div className={ classNames(cls.Wrapper, { [cls.disabled]: disabled }, [ className ]) }>
            { label && (
                <span className={ cls.label }>
                    { `${label} >` }
                </span>
            ) }
            <select
                className={ cls.select }
                value={ value }
                onChange={ onChangeHandler }
                disabled={ disabled }
            >
                { optionList }
            </select>
        </div>
    );
};
