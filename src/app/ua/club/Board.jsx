import React, {useEffect, useRef} from 'react';
import field from '@assets/images/field.jpg';
import Image from "next/image";
import styles from './styles/board.module.scss';

const Board = () => {
    const canvasRef = useRef();
    const ctx = useRef();
    const drawing = useRef();
    const rectRef = useRef();

    useEffect(() => {
        ctx.current = canvasRef.current.getContext('2d');
        canvasRef.current.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        })
    }, []);

    const startPosition = (e) => {
        drawing.current = true;
        ctx.current.beginPath();
        rectRef.current = e.target.getBoundingClientRect();
        ctx.current.moveTo(e.pageX - rectRef.current.left - 2, e.pageY - rectRef.current.top - 2);
        draw(e, true);

    }
    const finishedPosition = () => {
        drawing.current = false;
    }
    const draw = (e) => {
        let left, top;
        if (rectRef.current) {
            [left, top] = [rectRef.current.left, rectRef.current.top];
        } else {
            rectRef.current = e.target.getBoundingClientRect();
            [left, top] = [rectRef.current.left, rectRef.current.top];
        }
        if (!drawing.current) {
            return;
        }
        const lineWidth = 5;
        ctx.current.lineWidth = lineWidth;
        ctx.current.lineCap = 'round';
        ctx.current.lineJoin = 'round'
        ctx.current.strokeStyle = '#f123cd';

        ctx.current.lineTo(e.pageX - left - 2, e.pageY - top - 2);
        ctx.current.stroke();
        ctx.current.beginPath();
        ctx.current.moveTo(e.pageX - left - 2, e.pageY - top - 2);
    }

    const startChip = (e) => {
        console.log(e.target.style);

    }

    const finishChip = () => {

    }

    const moveChip = (e) => {
        console.log(e.target.style);
    }


    return (
        <div className={'relative flex justify-center gap-5'}>
            <div className={'flex items-center'}>
                <div className={styles.newBlueChip}>

                </div>
            </div>
            <div>
                <div>
                    <Image src={field} alt={''} width={1000} height={600}
                           className={'absolute'}
                           style={{pointerEvents: 'none', userSelect: 'none', zIndex: -1}}
                           onDrag={() => false}
                           onDragStart={() => false}
                    />
                    <div className={styles.blueChip}
                         onClick={() => console.log(1)}
                         onDragEnd={finishChip}
                         onDragStart={startChip}
                         onDragOver={moveChip}
                         onDragLeave={finishChip}
                         style={{zIndex: 10000}}
                    >

                    </div>
                </div>
                <canvas
                    ref={canvasRef}
                    onMouseUp={finishedPosition}
                    onMouseDown={startPosition}
                    onMouseMove={draw}
                    onMouseLeave={finishedPosition}
                    width={1000}
                    height={600}
                    tabIndex={1000}
                ></canvas>
            </div>
            <div className={'flex items-center'}>
                <div className={styles.newRedChip}>

                </div>
            </div>
        </div>
    );
};

export default Board;