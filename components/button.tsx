import { ReactElement } from 'react';
import styled from 'styled-components';

import Colors from '../style-guide/colors';

interface IButtonProps {
    textColor?: string;
    color?: string;
    fontSize?: number;
    isInactive?: boolean;
    borderColor?: string;
    hasBorder?: boolean;
    width?: number;
    marginTop?: number;
    noMarginRight?: boolean;
    height?: number;
    boxShadow?: string;
    iconUrl?: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    label?: string;
    containerStyle?: Record<string, number | string>;
}

const ButtonContainer = styled.div<Partial<IButtonProps>>`
    position: relative;
    background-color: ${({ color }) => (color ? color : Colors.newButton)};
    color: ${({ textColor }) => textColor};
    border-radius: 27px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : 15)}px;
    font-weight: 500;
    opacity: ${({ isInactive }) => (isInactive ? 0.75 : 1)};
    border: ${({ borderColor, hasBorder }) => (hasBorder ?
    `1px solid ${borderColor ?? 'white'}` :
    'none')};
    &:hover {
        cursor: pointer;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        box-shadow: 0px 25px 40px -5px rgba(#000, 0.3),
            inset 0px 0px 0px 0px rgba($red, 0), inset 0px -27px 0px 0px $red2;
    }
    ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
    margin-right: ${({ noMarginRight }) => (noMarginRight ? '0px' : '8px')};
    outline: none;
    user-select: none;
    width: ${({ width }) => (width ? `${width}px` : 'fit-content')};
    height: ${({ height }) => (height ? height : 42)}px;
    line-height: ${({ height }) => (height ? height : 42)}px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    box-shadow: ${({ boxShadow }) =>
        boxShadow ?? '0 2px 3px 0 rgba(0,0,0,0.26)'};
    &:active {
        transform: ${({ isInactive }) => (isInactive ? 'none' : '(1px)')};
    }
    &:hover {
        transform: scale(1.03);
    }
`;

const IconImg = styled.img.attrs({
    alt: 'Icon image',
})`
    margin-right: 11px;
    height: 15px;
    width: 15px;
    border-radius: 10px;
`;

const noop = (): void => {};
const Button = ({
    borderColor,
    boxShadow,
    color,
    fontSize,
    hasBorder,
    height,
    iconUrl,
    isInactive,
    label,
    marginTop,
    noMarginRight,
    onClick,
    onMouseDown,
    textColor,
    width,
    containerStyle,
}: IButtonProps): ReactElement => (
    <ButtonContainer
        borderColor={borderColor}
        boxShadow={boxShadow ?? '0 1px 4px 0 rgba(0, 0, 0, 0.11)'}
        color={color}
        fontSize={fontSize}
        hasBorder={hasBorder}
        height={height}
        isInactive={isInactive}
        marginTop={marginTop}
        noMarginRight={noMarginRight}
        // eslint-disable-next-line react/forbid-component-props
        style={containerStyle}
        textColor={textColor}
        width={width}
        onClick={isInactive ? noop : onClick}
        onMouseDown={isInactive ? noop : onMouseDown}
    >
        {iconUrl && <IconImg src={iconUrl}/>}
        {label}
    </ButtonContainer>
);

export default Button;
