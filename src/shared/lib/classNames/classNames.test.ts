import { classNames } from './classNames';

describe('classNames', () => {
    test('Работает только с первым параметром', () => {
        expect( classNames('someClass') ).toBe('someClass');
    });

    test('Работает с additional классами', () => {
        const result = classNames('someClass', {}, [ 'class1', 'class2' ]);
        const expected = 'someClass class1 class2';
        expect(result).toBe(expected);
    });

    test('Работает с mods', () => {
        const result = classNames(
            'someClass',
            { hovered: true, scrollable: false },
            [ 'class1', 'class2' ],
        );
        const expected = 'someClass class1 class2 hovered';
        expect(result).toBe(expected);
    });

    test('Работает с undefined в mods', () => {
        const result = classNames(
            'someClass',
            { hovered: undefined, scrollable: false },
            [ 'class1', 'class2' ],
        );
        const expected = 'someClass class1 class2';
        expect(result).toBe(expected);
    });
});
