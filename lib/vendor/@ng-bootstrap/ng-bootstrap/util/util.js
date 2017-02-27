/**
 * @param {?} value
 * @return {?}
 */
export function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * @param {?} value
 * @return {?}
 */
export function toString(value) {
    return (value !== undefined && value !== null) ? `${value}` : '';
}
/**
 * @param {?} value
 * @param {?} max
 * @param {?=} min
 * @return {?}
 */
export function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
/**
 * @param {?} value
 * @return {?}
 */
export function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
export function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} text
 * @return {?}
 */
export function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map