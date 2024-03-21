export function isMobile() {
    return isMobileIOS() || /(mobi|tablet|android)/i.test(navigator.userAgent);
}

export function isMobileIOS() {
    return /^(iPhone|iPad|iPod)/.test(navigator.userAgent) || (/(Mac)/i.test(navigator.userAgent) && isTouchDevice());
}

export function isTouchDevice() {
    return !!("ontouchstart" in window || navigator.maxTouchPoints);
}