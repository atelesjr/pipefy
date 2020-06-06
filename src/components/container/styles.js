import styled from 'styled-components';
import { color, device } from 'styles/theme';

export const Container = styled.div`
    display: flex;
    flex-flow: column;

    width: 100%;
    min-width: 32rem;
    max-width: 144rem;
    height: 100vh;
    box-sizing: content-box;
    margin: 0 auto;
    z-index: 0;

    @media ${device.mobile} {
        overflow: scroll;
    }
`


;
// @media ${device.wide}{
//     border-left: 1px solid ${color.gray100};
//     border-right: 1px solid ${color.gray100};
// };