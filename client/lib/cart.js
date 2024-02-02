import Cookies from "js-cookie"

export const setCartId = (cartId) => {
    if (typeof window === undefined) {
        return
    }

    Cookies.set('cartId', cartId)

    if (Cookies.get('cartId')) {
        return true
    }
}

export const unsetCartId = () => {
    if (typeof window === undefined) {
        return
    }
    Cookies.remove('cartId')
    return true
}

export const getCartIdFromLocalCookie = () => {
    return Cookies.get('cartId')
}