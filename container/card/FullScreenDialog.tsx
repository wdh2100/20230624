import * as React from 'react';
import {useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import Image from "next/image";
import {useUrlHashState} from "../../hooks/useUrlHashState";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({src, callbackClose}: { src: string, callbackClose: any }) {
    const [open] = useUrlHashState('#image');

    useEffect(() => {
        if (!open) {
            callbackClose(false);
        }
    }, [open, callbackClose]);

    const handleClose = () => {
        window.history.back();
        callbackClose(false);
    }

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
                       onClick={handleClose}
                       quality={100} style={{objectFit: 'contain'}}/>
            </Dialog>
        </div>
    );
}