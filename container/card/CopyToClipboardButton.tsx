import {useState} from 'react'
import {IconButton, Snackbar} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const CopyToClipboardButton = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText('경기 용인시 처인구 이동읍 어진로 780').then();
    }

    return (
        <>
            <IconButton onClick={handleClick} color="primary">
                <ShareIcon/>
            </IconButton>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="주소 복사"
            />
        </>
    )
}

export default CopyToClipboardButton