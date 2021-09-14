/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react';
import styled from 'styled-components';

import Colors from '../style-guide/colors';
import { getImageUrl } from '../lib/utils';

export const LeftContainer = styled.div`
    width: 481px;
    padding-top: 244px;
    padding-left: 39px;
    padding-right: 70px;
    position: relative;
    border-right: solid 1px ${Colors.menuBorder};
`;

export const LeftBackground = styled.div`
    filter: blur(50px);
    background-color: rgba(248, 249, 255, 0);
    background-position: top -100px left -400px;
    background-image: url(${getImageUrl('signup-background.svg')});
    position: absolute;
    width: 481px;
    top: 0;
    left: 0;
    z-index: -1;
    height: 99vh;
`;

export const CornerDecoration = styled.img.attrs({
    src: getImageUrl('group-5.svg'),
})`
    position: absolute;
    bottom: -20px;
    left: -20px;
`;

export const LoginPageContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    height: 99vh;
    overflow-y: hidden;
`;

export const TitleText = styled.div`
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const RightContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 481px);
    padding-top: 200px;
    overflow-y: auto;
    @media only screen and (max-device-width: 480px) {
        width: 100vw;
        padding-top: 70px;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    font-size: 14.5px;
    font-weight: normal;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.52;
    letter-spacing: normal;
    align-items: flex-start;
    margin-top: 20px;
    &:not(:first-of-type) {
        margin-top: 12px;
    }
`;

const ItemText = styled.div`
    margin-left: 10px;
`;

export const CheckItem = ({
    title,
    text,
}: { title: string; text: string }): ReactElement => (
    <ItemContainer>
        <img
            alt='Check'
            src={getImageUrl('check-2.svg')}
            style={{ marginTop: 6 }}
        />
        <ItemText>
            <b>{title}</b>&nbsp;{text}
        </ItemText>
    </ItemContainer>
);

export const RightTitleText = styled.div`
    font-size: 40px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: -0.68px;
    @media only screen and (max-device-width: 480px) {
        font-size: 30px;
        margin-top: 50px;
    }
`;

export const GoogleButtonContainer = styled.div`
    margin-top: 26px;
`;

export const TermsText = styled.div`
    a {
        color: ${Colors.purple};
        text-decoration: none;
    }
    font-size: 13px;
    margin-top: 15px;
    color: ${Colors.termsText};
    @media only screen and (max-device-width: 480px) {
        width: 90vw;
        text-align: center;
    }
`;

export const EmailPasswordContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const InputLabelText = styled.div`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
`;

export const InputContainer = styled.div<{
    isFocused: boolean;
    bgColor?: string;
}>`
    width: 520px;
    border: ${({ isFocused }) =>
        (isFocused ?
            `solid 2px ${Colors.purple}` :
            `solid 1px ${Colors.menuBorder}`)};
    height: 55px;
    border-radius: 27.5px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px 0 #ebe7f6;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : Colors.white)};
    position: relative;
    justify-content: space-between;
    padding: ${({ isFocused }) => isFocused && '-1px'};
    svg {
        :hover {
            cursor: pointer;
        }
    }
    input {
        ::placeholder {
            color: ${Colors.queuedGray};
        }
    }
    @media only screen and (max-device-width: 480px) {
        width: 300px;
        height: 40px;
    }
`;

export const InputGroupWrapper = styled.div<{ noMarginTop?: boolean }>`
    position: relative;
    :not(:first-of-type) {
        margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : 14)}px;
    }
`;

export const ToggleText = styled.div`
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    @media only screen and (max-device-width: 480px) {
        margin-top: 20px;
    }
`;

export const PurpleToggleText = styled(ToggleText)`
    color: ${Colors.purple};
    display: inline-block;
    font-weight: 500;
    :hover {
        cursor: pointer;
    }
`;

export const ActionButtonWrapper = styled.div`
    margin-top: 23px;
    display: flex;
    justify-content: center;
`;

export const WarningText = styled.div`
    margin-top: 20px;
    color: ${Colors.deleteRed};
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;
