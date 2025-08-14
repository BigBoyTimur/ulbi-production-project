import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';


interface CodeProps {
    className?: string;
    codeString: string;
}

export const Code = ({ className, codeString }: CodeProps) => {
    const onCopy = () => {
        navigator.clipboard.writeText(codeString);
    };

    return (
        <pre className={ classNames(cls.Code, {}, [ className ]) }>
            <Button onClick={ onCopy } className={ cls.copyBtn } theme={ ButtonTheme.CLEAR }>
                <CopyIcon className={ cls.copyIcon } />
            </Button>
            <code>
                { codeString } 
            </code>
        </pre>
    );
};
