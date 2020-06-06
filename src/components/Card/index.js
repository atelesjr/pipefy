import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import { Container, Label } from './styles'

export default function Card({ data, index, listIndex }) {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef ] = useDrag( {
        item: { type: 'CARD', index, listIndex }, //id:data.id, content: data.content
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, dropRef ] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            //check if draggedcard is over itself
            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) { 
                return;
            };

            //get the size of elemente (Card)
            const targetSize = ref.current.getBoundingClientRect();

            // to calculate elements's center
            const targetCenter = (targetSize.bottom - targetSize.top ) / 2 ;
 
            // to get card's position while dragged
            const draggedOffset = monitor.getClientOffset();
 
            //get dragged target disantance from top - distance of card to be replaced.
            const draggedTop = draggedOffset.y - targetSize.top;
            //console.log(draggedTop, targetCenter);

            /* Check if drraged card is moving over the first half 
            of next card in the queue card don't change its position  */
            if(draggedIndex < targetIndex && draggedTop < targetCenter ){
                return;
            }
            
            //move cards posisitons
            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            //tells card its new position
            item.index= targetIndex;
            item.listIndex = targetListIndex;

            
        }
    });

    dragRef(dropRef(ref))

    return (
        <Container ref={ref} isDragging={ isDragging }>
            <header>
                {
                    data.labels.map( label => <Label key={ label } color={ label } /> )
                }
            </header>
            <p>{ data.content }</p>
            { data.user && <img src={ data.user } alt="avatar" />}
        </Container>
    );
};