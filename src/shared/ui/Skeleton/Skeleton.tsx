import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties } from 'react';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div className={ classNames(cls.Skeleton, {}, [ className ]) } style={ styles } />
    );
};
