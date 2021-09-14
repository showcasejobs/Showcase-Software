import styled from 'styled-components';

import { getImageUrl } from '../lib/utils';

const PrimaryLogo = styled.img.attrs<{ logoClickable?: boolean }>({
    src: getImageUrl('showcase-word-mark-nobounds.svg', { oldPrefix: true }),
})<{ logoClickable?: boolean }>`
    width: 149px;
    height: 41px;
    position: relative;
    z-index: 3;
    ${({ logoClickable }) =>
        logoClickable &&
        `:hover {
        cursor: pointer;
    }`}
`;

export default PrimaryLogo;
