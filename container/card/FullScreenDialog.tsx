import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({src, open, handleClose}: { src: string, open: boolean, handleClose: any }) {
    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Image src={src.replace('medium', 'large')}
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       priority={false}
                       alt={'image'}
                       onClick={() => handleClose(false)}
                       quality={100} style={{objectFit: 'contain'}}/>
            </Dialog>
        </div>
    );
}