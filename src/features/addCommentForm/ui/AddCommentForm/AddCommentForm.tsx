import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    
    const onCommentTextChange = (value: string) => {
        dispatch(addCommentFormActions.setText(value));
    };

    const onSendHandler = () => {
        onSendComment(text);
        onCommentTextChange('');
    };

    return (
        <DynamicModuleLoader reducers={ reducers }>
            { error && <div>{ error }</div> }
            <div className={ classNames(cls.AddCommentForm, {}, [ className ]) }>
                <Input
                    placeholder={ t('enter_your_comment') }
                    className={ cls.input }
                    onChange={ onCommentTextChange }
                    value={ text }
                />
                <Button theme={ ButtonTheme.OUTLINE } onClick={ onSendHandler }>{ t('send') }</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
