import Image from "next/image";
import {prefix} from "./TopHeaderImageBox";
import Flicking, {ViewportSlot} from "@egjs/react-flicking";
import {AutoPlay, Pagination} from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import React, {useState} from "react";
import FullScreenDialog from "./FullScreenDialog";

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

            <div id='photo' style={{width: '100%', overflow: 'hidden'}}>
                {!open &&
                    <Flicking
                        align={'center'}
                        autoResize
                        circular={true}
                        plugins={plugins}
                        defaultIndex={defaultIndex}
                    >
                        {itemData.map((item, index) => {
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
                                           quality={100}/>
                                </div>
                            );
                        })}
                        <ViewportSlot>
                            <div className="flicking-pagination"></div>
                        </ViewportSlot>
                    </Flicking>
                }
            </div>
            <FullScreenDialog src={bigSizeImageSrc} callbackClose={setOpen}/>
        </>
    );
}

const getImagePath = (photoIndex: string) => {
    return `${prefix}/photo/medium/230526우윤슬-${photoIndex.padStart(3, '0')}.jpg`
}

const itemData = [
    {
        src: getImagePath('29'),
    },
    {
        src: getImagePath('40'),
        featured: true,
    },
    {
        src: getImagePath('61'),
    },
    {
        src: getImagePath('71'),
    },
    {
        src: getImagePath('82'),
    },
    {
        src: getImagePath('85'),
    },
    {
        src: getImagePath('91'),
    },
    {
        src: getImagePath('94'),
    },
    {
        src: getImagePath('95'),
    },
    {
        src: getImagePath('103'),
    },
    {
        src: getImagePath('110'),
    },
    {
        src: getImagePath('120'),
    },
    {
        src: getImagePath('177'),
    },
    {
        src: getImagePath('179'),
    },
    {
        src: getImagePath('181'),
    },
    {
        src: getImagePath('186'),
    },
    {
        src: getImagePath('205'),
    },
    {
        src: getImagePath('247'),
    },
    {
        src: getImagePath('257'),
    },
    {
        src: getImagePath('305'),
    },
    {
        src: getImagePath('320'),
    },
    {
        src: getImagePath('321'),
    },
];