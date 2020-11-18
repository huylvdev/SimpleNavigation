

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const APP_MODAL_ID_MAIN = 'APP_MODAL_ID_MAIN';

export function showModal(header, body, footer, id = APP_MODAL_ID_MAIN, visible = true) {
    console.log('header', header)
    return {
        type: MODAL_OPEN,
        id,
        payload: {
            header,
            body,
            footer,
            visible,
        },
    };
}

export function hideModal(id = APP_MODAL_ID_MAIN, visible = false) {
    return {
        id,
        type: MODAL_CLOSE,
        payload: {
            visible,
        },
    };
}

