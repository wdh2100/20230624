import Image from "next/image";
import {prefix} from "./TopHeaderImageBox";
import Flicking, {MoveEvent, ViewportSlot, WillChangeEvent} from "@egjs/react-flicking";
import {AutoPlay, Pagination} from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

export default function PhotoList() {
    const plugins = [new AutoPlay({
        duration: 2000,
        direction: "NEXT",
        stopOnHover: true
    }), new Pagination({type: 'scroll'})];

    return (
        <div style={{width: '100%', overflow: 'hidden'}}>
            <Flicking
                viewportTag="div"
                align="center"
                onMove={(e: MoveEvent) => {
                }}
                onWillChange={(e: WillChangeEvent) => {
                }}
                horizontal={true}
                circular={true}
                plugins={plugins}
            >
                {itemData.map((item) => {
                    return (
                        <div className="panel" key={item.src}>
                            <Image
                                src={item.src}
                                key={item.src}
                                alt={item.title}
                                priority={false}
                                width={370}
                                height={250}
                                quality={100}
                            />
                        </div>
                    );
                })}
                <ViewportSlot>
                    <div className="flicking-pagination"></div>
                </ViewportSlot>
            </Flicking>
        </div>

    );
}

const itemData = [
    {
        src: `${prefix}/photo/medium/230526우윤슬-029.jpg`,
        title: '1',
        featured: true,
    },
    {
        src: `${prefix}/photo/medium/230526우윤슬-061.jpg`,
        title: '2',
    },
    {
        src: `${prefix}/photo/medium/230526우윤슬-071.jpg`,
        title: '3',
    },
    {
        src: `${prefix}/photo/medium/230526우윤슬-040.jpg`,
        title: '4',
        featured: true,
    },
];