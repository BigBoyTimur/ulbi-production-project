import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    return (
        <section className={ classNames(cls.Page, {}, [ className ]) } ref={ wrapperRef }>
            { children }
            <div ref={ triggerRef } />
        </section>
    );
};
