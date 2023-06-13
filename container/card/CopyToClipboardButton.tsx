import {useState} from 'react'
import {IconButton, Snackbar} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyToClipboardButton = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
            <CopyToClipboard onCopy={handleClick} text={'경기 용인시 처인구 이동읍 어진로 780'}>
                <IconButton onClick={handleClick} color="primary">
                    <ShareIcon/>
                </IconButton>
            </CopyToClipboard>
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