import { maxLength } from "zod";
import { INVALID } from "zod/v3";

export const VALIDATION_MESSAGES = {
    AUTH: {
        EMAIL: {
            REQUIRED: "Email is required.",
            MAX_LENGTH: (maxLength) => `Email must be at most ${maxLength} characters long.`,
            INVALID: "Invalid Email address.",
        },
        USERNAME: {
            REQUIRED: "Username is required.",
            MIN_LENGTH: (min) => `Username must be at least ${min} characters long.`,
            MAX_LENGTH: (max) => `Username must be at most ${max} characters long.`,
            INVALID: "Use letters, digits, dot and underscore. Username must start and end with a letter or digit.",
        },
        PASSWORD: {
            MIN_LENGTH: (min) => `Password must be at least ${min} characters long.`,
            MAX_LENGTH: (max) => `Password must be at most ${max} characters long.`,
            INVALID: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
        EMAIL_OR_USERNAME: {
            REQUIRED: "Email or Username is required.",
            MIN_LENGTH: (min) => `Email or Username must be at least ${min} characters long.`,
            MAX_LENGTH: (max) => `Email or Username must be at most ${max} characters long.`,
            INVALID: "Invalid Email or Username.",
        },
        CONFIRM_PASSWORD: {
            PASSWORDS_MISMATCH: "Passwords do not match.",
        },
    }
};