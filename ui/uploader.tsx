import styled from 'styled-components';
import { ReactElement } from 'react';
import Colors from '../style-guide/colors';

const DividerContainer = styled.div<{ width?: number }>`
    width: ${({ width }) => (width ? width : 800)}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
`;

const DividingLine = styled.hr`
    height: 1px;
    width: 370px;
    background-color: ${Colors.termsText};
    opacity: 0.3;
`;

const OrText = styled.div`
    color: ${Colors.termsText};
    font-size: 14px;
    margin: 0 15px;
`;

export const Divider = ({ width }: { width?: number }): ReactElement => (
    <DividerContainer width={width}>
        <DividingLine/>
        <OrText>or</OrText>
        <DividingLine/>
    </DividerContainer>
);
