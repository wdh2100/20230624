import Image from "next/image";
import {prefix} from "./TopHeaderImageBox";
import Flicking, {ViewportSlot} from "@egjs/react-flicking";
import {AutoPlay, Pagination} from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import React, {useState} from "react";
import FullScreenDialog from "./FullScreenDialog";

const imageFiles = ['29', '40', '61', '71', '82', '85', '91', '94', '95', '103', '110', '120', '177', '179', '181', '186', '205', '247', '257', '305', '320', '321'];

const getImagePath = (photoIndex: string) => {
    return `${prefix}/photo/medium/230526우윤슬-${photoIndex.padStart(3, '0')}.jpg`
}


const imageList = imageFiles.map(item => {
    return {
        src: getImagePath(item)
    };
});


export default function PhotoList() {
    const [open, setOpen] = useState(false);
    const [bigSizeImageSrc, setBigSizeImageSrc] = useState('');
    const [defaultIndex, setDefaultIndex] = useState(0);

    const plugins = [new AutoPlay({
        duration: 2000,
        direction: "NEXT",
        stopOnHover: true
    }), new Pagination({type: 'fraction'})];

    return (
        <>
            <div>
                <h1 id='photo' style={{display: 'inline-block'}}>🖼️갤러리</h1>
                <p style={{display: 'inline-block', margin: '0 1rem'}}>누르면 확대됩니다.</p>
            </div>

            <div style={{width: '100%', overflow: 'hidden'}}>
                {!open &&
                    <Flicking
                        align={'center'}
                        autoResize
                        circular={true}
                        plugins={plugins}
                        defaultIndex={defaultIndex}
                    >
                        {imageList.map((item, index) => {
                            return (
                                <div key={item.src} className="panel"
                                     style={{width: '100%', height: '500px', position: 'relative'}}>
                                    <Image src={item.src} fill priority
                                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                           alt={'image'}
                                           onClick={() => {
                                               setDefaultIndex(index);
                                               setBigSizeImageSrc(item.src)
                                               setOpen(true);
                                               window.location.hash = "#image";
                                           }}
                                           style={{objectFit: 'contain'}}
                                           quality={100}/>
                                </div>
                            );
                        })}
                        <ViewportSlot>
                            <div className="flicking-pagination"></div>
                        </ViewportSlot>
                    </Flicking>
                }
                {open && <div className="panel" style={{width: '100%', height: '500px', position: 'relative'}}/>}
            </div>
            <FullScreenDialog src={bigSizeImageSrc} callbackClose={setOpen}/>
        </>
    );
}

