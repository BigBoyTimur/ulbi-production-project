import { RefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement>;
    wrapperRef: RefObject<HTMLElement>;
}
export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (callback && triggerElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observerRef.current = new IntersectionObserver(([ entry ]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observerRef.current.observe(triggerElement);
        }
        return () => {
            if (observerRef.current && triggerElement) {
                observerRef.current.unobserve(triggerElement);
            }
        };
    }, [ triggerElement, callback, wrapperElement ]);
}
