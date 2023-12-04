import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Hero from '../../components/Hero.jsx';

export default createBoard({
    name: 'home',
    Board: () => <div>
        <Hero />
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 436,
        windowWidth: 1024
    }
});
