import {Dispatch, SetStateAction, useEffect, useState} from 'react';

/**
 * use a boolean state that binds to a url hash
 * @param hash a string starts with '#'
 * @returns current state, and a function to update it
 */
export function useUrlHashState(
    hash: string
): [state: boolean, setState: Dispatch<SetStateAction<boolean>>] {
    const [state, setState] = useState<boolean>(window.location.hash === hash);

    useEffect(() => {
        const onHashChange = () => setState(window.location.hash === hash);
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, [hash]);

    return [
        state,
        setStateAction => {
            if (
                (typeof setStateAction === 'boolean' && setStateAction) ||
                (typeof setStateAction === 'function' && setStateAction(state))
            ) {
                window.location.hash = hash;
            } else {
                window.history.back();
            }
        },
    ];
}