/* eslint-disable react/forbid-component-props, react/jsx-no-bind */
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

import {
    InputGroupWrapper,
    InputContainer,
    InputLabelText,
} from '../ui/login';
import Colors from '../style-guide/colors';

const Input = styled.input<{
    fontSize?: number;
    textColor?: string;
    width?: number;
    height?: number;
    highlightColor?: string;
    preventSelect?: boolean;
    lineHeight?: string;
    horizontalPadding?: number;
}>`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
    color: ${({ textColor }) => textColor ?? 'black'};
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: inherit;
    user-select: ${({ preventSelect }) => preventSelect && 'none'};
    line-height: ${({ height }) => (height ? `${height}px` : 'auto')};
    padding: 0 ${({ horizontalPadding }) => horizontalPadding ?? 23}px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    line-height: ${({ lineHeight }) => lineHeight};
    ::selection {
        background: ${({ highlightColor }) => highlightColor ?? 'auto'};
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    }
`;

export const LabeledInput = ({
    value,
    onChange,
    onKeyPress,
    width,
    fontSize,
    label,
    maxLength,
    disabled,
    type,
    noMarginTop,
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    label: string;
    width?: number;
    fontSize?: number;
    maxLength?: number;
    disabled?: boolean;
    type?: string;
    noMarginTop?: boolean;
}): ReactElement => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
        <InputGroupWrapper noMarginTop={noMarginTop}>
            <InputLabelText>{label}</InputLabelText>
            <InputContainer
                isFocused={focused}
                style={{
                    width: width ?? undefined,
                    backgroundColor: disabled ? Colors.modalTop : 'inherit',
                }}
            >
                <Input
                    disabled={disabled}
                    fontSize={fontSize ?? 16}
                    maxLength={maxLength ?? undefined}
                    type={type}
                    value={value}
                    width={width ?? undefined}
                    onBlur={() => {
                        setFocused(false);
                    }}
                    onChange={onChange}
                    onFocus={() => {
                        setFocused(true);
                    }}
                    onKeyPress={onKeyPress}
                />
            </InputContainer>
        </InputGroupWrapper>
    );
};

export default Input;
