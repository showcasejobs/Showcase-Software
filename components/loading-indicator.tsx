import { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const PulsatingKeyframe = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(119, 83, 234, 0.3);
        transform: rotate(0deg);
    }
    100% {
        box-shadow: 0 0 0 100px rgba(119, 83, 234, 0);
        transform: rotate(360deg);
    }
`;

interface ILoadingContainerProps {
    height?: string;
    width?: string;
    logoSize?: number;
}

const LoadingContainer = styled.div<ILoadingContainerProps>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background-color: transparent;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row;
`;

const LogoImg = styled.img.attrs<{ logoSize?: number }>({
    alt: 'Logo image',
})<{ logoSize?: number }>`
    border-radius: 50%;
    height: ${({ logoSize }) => logoSize ?? 50}px;
    width: ${({ logoSize }) => logoSize ?? 50}px;
    align-self: center;
    animation: ${PulsatingKeyframe} 1s infinite;
`;

const LoadingIndicator = ({
    height,
    width,
    logoSize,
}: ILoadingContainerProps): ReactElement => (
    <LoadingContainer height={height} width={width}>
        <LogoImg
            logoSize={logoSize}
            src='https://static.showcasejobs.com/web/app-icon.png'
        />
    </LoadingContainer>
);

export default LoadingIndicator;
