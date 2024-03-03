import styled from 'styled-components';
export const Container_Friend = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: .5vw;
    overflow: hidden;
    padding: .5vw 0;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;