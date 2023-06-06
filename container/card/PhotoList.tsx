import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image";
import {prefix} from "./TopHeaderImageBox";

export default function PhotoList() {
    return (
        <ImageList
            sx={{
                height: 500,
                transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={3}
        >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                    <ImageListItem key={item.src} cols={cols} rows={rows}>
                        <Image
                            src={item.src}
                            fill
                            alt={item.title}
                            priority={false}
                            quality={100}
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}

const itemData = [
    {
        src: `${prefix}/photo/medium/230526우윤슬-029.jpg`,
        title: '1',
        featured: true,
    },
    {
        src: '${prefix}/photo/medium/230526우윤슬-061.jpg',
        title: '2',
    },
    {
        src: '${prefix}/photo/medium/230526우윤슬-071.jpg',
        title: '3',
    },
    {
        src: '${prefix}/photo/medium/230526우윤슬-040.jpg',
        title: '4',
        featured: true,
    },
];