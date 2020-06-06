import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;

    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(182, 208, 230, .8);
    border-top: 20px solid rgba(230, 236, 245, .4);
    cursor: grab;


    header{
        position: absolute;
        top: -22px;
        left: 15px;
    }

    p{
        font-weight: 500;
        line-height: 20px;
    }

    img{
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
    }

    ${
        props => props.isDragging && css`
            border: 2px dashed rgba(0, 0, 0, .2);
            padding-top: 31px;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            cursor: grabbing;

            p, img, header {
                opacity: 0;
            }
        `
    }


`
export const Label = styled.span`
    display: inline-block;

    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${ props => props.color}
    
  
`