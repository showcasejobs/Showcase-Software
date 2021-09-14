/* eslint-disable no-nested-ternary, react/forbid-component-props, react/jsx-no-bind */
import { ReactElement, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Head from 'next/head';

import {
    LoginPageContainer,
    LeftContainer,
    RightContainer,
    LeftBackground,
    TitleText,
    CornerDecoration,
    CheckItem,
    RightTitleText,
    GoogleButtonContainer,
    TermsText,
    EmailPasswordContainer,
    InputLabelText,
    InputGroupWrapper,
    ToggleText,
    PurpleToggleText,
    InputContainer,
    ActionButtonWrapper,
    WarningText,
} from '../ui/login';
import { Divider } from '../ui/uploader';
import Button from '../components/button';
import Layout from '../components/layout';
import PrimaryLogo from '../components/primary-logo';
import Input from '../components/input';
import { getImageUrl } from '../lib/utils';
import Colors from '../style-guide/colors';
import LoadingIndicator from '../components/loading-indicator';
import { isEmail } from '../lib/validation';
import { NextPageWithLayout } from '../lib/types';

// eslint-disable-next-line complexity
const Login: NextPageWithLayout = (): ReactElement => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isResetPW, setIsResetPW] = useState(false);
    const [showSent, setShowSent] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [error, setError] = useState('');

    const handleButtonAction = useCallback(async () => {
        setError('');

        if (!isEmail(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        if (isResetPW) {
            setShowSent(true);
            setTimeout(() => {
                setIsResetPW(false);
                setShowSent(false);
                setEmail('');
                setIsLoading(false);
            }, 500);
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }

    }, [email, isResetPW]);

    const handleEnterPress = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                void handleButtonAction();
            }
        },
        [handleButtonAction]
    );

    const handleGoogleAuth = useCallback(
        () => {
            toast.error('Google Auth is not setup');
        },
        []
    );

    return (
        <LoginPageContainer>
            <Head>
                <title>Showcase: Your Video, Searchable &amp; Organized</title>
            </Head>
            <CornerDecoration/>
            <LeftContainer>
                <LeftBackground/>
                <PrimaryLogo/>
                <TitleText>Your company&rsquo;s videos, reimagined</TitleText>
                <CheckItem
                    text='via chapters, transcripts, highlights and closed captioning'
                    title='Skimmable'
                />
                <CheckItem
                    text={'so your viewers can find the exact segment that they\'re looking for'}
                    title='Searchable'
                />
                <CheckItem
                    text='to send custom snippets seamlessly'
                    title='Shareable'
                />
            </LeftContainer>
            {isLoading ? (
                <LoadingIndicator
                    width='calc(100vw - 481px)'
                />
            ) : (
                <RightContainer>
                    <PrimaryLogo/>
                    <RightTitleText>
                        {isResetPW ?
                            'Forgot password?' :
                            isLogin ?
                                'Log in' :
                                'Sign up'}
                    </RightTitleText>
                    <ToggleText>
                        {isResetPW ? (
                            <>
                                It&rsquo;s okay. We&rsquo;ve all been there. Enter the email
                                you signed up <br/> with, and we&rsquo;ll send you
                                password recovery instructions.{' '}
                            </>
                        ) : isLogin ?
                            'Don\'t have an account yet?' :
                            'Already have an account?'}{' '}
                        {!isResetPW && (
                            <PurpleToggleText
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                }}
                            >
                                {isLogin ? 'Sign up' : 'Log in'}
                            </PurpleToggleText>
                        )}
                    </ToggleText>
                    {!isResetPW && (
                        <GoogleButtonContainer>
                            <Button
                                boxShadow='2px 2px 6px 0 #ebe7f6'
                                color={Colors.white}
                                height={55}
                                iconUrl={getImageUrl(
                                    'icons-8-google.svg'
                                )}
                                label={`${
                                    isLogin ? 'Continue' : 'Sign up'
                                } with Google`}
                                width={520}
                                onClick={handleGoogleAuth}
                            />
                        </GoogleButtonContainer>
                    )}
                    {!isResetPW && <Divider width={520}/>}
                    <EmailPasswordContainer>
                        {!isLogin && !isResetPW && (
                            <>
                                <InputGroupWrapper>
                                    <InputLabelText>First name</InputLabelText>
                                    <InputContainer
                                        isFocused={firstNameFocused}
                                    >
                                        <Input
                                            fontSize={16}
                                            maxLength={25}
                                            value={firstName}
                                            width={500}
                                            onBlur={() => {
                                                setFirstNameFocused(false);
                                            }}
                                            onChange={({ target: { value } }) => {
                                                setFirstName(value);
                                            }}
                                            onFocus={() => {
                                                setFirstNameFocused(true);
                                            }}
                                        />
                                    </InputContainer>
                                </InputGroupWrapper>
                                <InputGroupWrapper>
                                    <InputLabelText>Last name</InputLabelText>
                                    <InputContainer isFocused={lastNameFocused}>
                                        <Input
                                            fontSize={16}
                                            maxLength={25}
                                            value={lastName}
                                            width={500}
                                            onBlur={() => {
                                                setLastNameFocused(false);
                                            }}
                                            onChange={({ target: { value } }) => {
                                                setLastName(value);
                                            }}
                                            onFocus={() => {
                                                setLastNameFocused(true);
                                            }}
                                        />
                                    </InputContainer>
                                </InputGroupWrapper>
                            </>
                        )}
                        <InputGroupWrapper>
                            <InputLabelText>Email</InputLabelText>
                            <InputContainer isFocused={emailFocused}>
                                <Input
                                    fontSize={16}
                                    value={email}
                                    width={500}
                                    onBlur={() => {
                                        setEmailFocused(false);
                                    }}
                                    onChange={({ target: { value } }) => {
                                        setEmail(value);
                                    }}
                                    onFocus={() => {
                                        setEmailFocused(true);
                                    }}
                                />
                            </InputContainer>
                        </InputGroupWrapper>
                        {showSent && <InputLabelText>Sent!</InputLabelText>}
                        {!isResetPW && (
                            <InputGroupWrapper>
                                <InputLabelText>Password</InputLabelText>
                                <PurpleToggleText
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        top: -3,
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                    onClick={() => {
                                        setIsResetPW(true);
                                    }}
                                >
                                    Forgot password?
                                </PurpleToggleText>
                                <InputContainer isFocused={passwordFocused}>
                                    <Input
                                        fontSize={16}
                                        type='password'
                                        value={password}
                                        width={500}
                                        onBlur={() => {
                                            setPasswordFocused(false);
                                        }}
                                        onChange={({ target: { value } }) => {
                                            setPassword(value);
                                        }}
                                        onFocus={() => {
                                            setPasswordFocused(true);
                                        }}
                                        onKeyPress={handleEnterPress}
                                    />
                                </InputContainer>
                                {!isLogin && password.length > 0 && password.length < 8 ? (
                                    <WarningText>
                                        Password must be at least 8 characters
                                        long.
                                    </WarningText>
                                ) : error ?
                                    <WarningText>{error}</WarningText> :
                                    null}
                            </InputGroupWrapper>
                        )}
                        <ActionButtonWrapper>
                            <Button
                                noMarginRight
                                color={Colors.purple}
                                height={55}
                                isInactive={
                                    !isResetPW &&
                                    !isLogin &&
                                    password.length < 8
                                }
                                label={
                                    isResetPW ?
                                        'Send password reset email' :
                                        isLogin ? 'Log in' : 'Sign up'
                                }
                                textColor={Colors.white}
                                width={520}
                                onClick={handleButtonAction}
                            />
                        </ActionButtonWrapper>
                    </EmailPasswordContainer>
                    {isResetPW ? (
                        <PurpleToggleText
                            style={{
                                marginTop: 20,
                            }}
                            onClick={() => {
                                setIsResetPW(false);
                            }}
                        >
                            Go back
                        </PurpleToggleText>
                    ) : (
                        <TermsText>
                            By continuing, you agree to our{' '}
                            <a
                                href='https://getshowcase.io/terms-of-service'
                                target='__blank'
                            >
                                Terms of Service
                            </a>
                            {' '}and{' '}
                            <a
                                href='https://getshowcase.io/privacy'
                                target='__blank'
                            >
                                Privacy Policy
                            </a>.
                        </TermsText>
                    )}
                </RightContainer>
            )}
        </LoginPageContainer>
    );
};

Login.getLayout = page =>
    <Layout>{page}</Layout>;
export default Login;
