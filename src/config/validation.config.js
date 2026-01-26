export const VALIDATION_CONFIG = {
    AUTH: {
        EMAIL: {
            MIN_LENGTH: 1,
            MAX_LENGTH: 255,
        },
        USERNAME: {
            MIN_LENGTH: 3,
            MAX_LENGTH: 150,
            REGEX: /^[a-zA-Z0-9][a-zA-Z0-9._]*[a-zA-Z0-9]$/,
        },
        PASSWORD: {
            MIN_LENGTH: 8,
            MAX_LENGTH: 64,
            REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
        },
        EMAIL_OR_USERNAME: {
            MIN_LENGTH: 1,
            MAX_LENGTH: 254,
        },
    }
}