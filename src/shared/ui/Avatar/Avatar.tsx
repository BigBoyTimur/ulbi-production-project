import { classNames } from '../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        size,
        alt,
        ...otherProps
    } = props;

    const styles = { width: size, height: size }; 

    return (
        <img
            className={ classNames(cls.Avatar, {}, [ className ]) }
            style={ styles }
            alt= { alt }
            { ...otherProps }
        />
    );
};
