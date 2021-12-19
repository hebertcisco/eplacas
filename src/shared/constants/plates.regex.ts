/**
 * The accepted format: AAA0000, AAA0AA0, AAA00A0
 *
 * @constant
 *
 * @type {RegExp}
 */
export const PLATES_FORMATS: RegExp[] = [
    /^[a-zA-Z]{3}[0-9]{4}$/im,
    /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/im,
    /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/im
];
