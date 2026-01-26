import { z } from "zod";
import { VALIDATION_CONFIG } from "../config/validation.config";
import { VALIDATION_MESSAGES } from "../messages/validation.messages";

const emailSchema = z.email({ message: VALIDATION_MESSAGES.AUTH.EMAIL.INVALID })
    .min(VALIDATION_CONFIG.AUTH.EMAIL.MIN_LENGTH, { message: VALIDATION_MESSAGES.AUTH.EMAIL.REQUIRED })
    .max(VALIDATION_CONFIG.AUTH.EMAIL.MAX_LENGTH, { message: VALIDATION_MESSAGES.AUTH.EMAIL.MAX_LENGTH(VALIDATION_CONFIG.AUTH.EMAIL.MAX_LENGTH) });

const usernameSchema = z.string()
    .min(VALIDATION_CONFIG.AUTH.USERNAME.MIN_LENGTH, { message: VALIDATION_MESSAGES.AUTH.USERNAME.MIN_LENGTH(VALIDATION_CONFIG.AUTH.USERNAME.MIN) })
    .max(VALIDATION_CONFIG.AUTH.USERNAME.MAX_LENGTH, { message: VALIDATION_MESSAGES.AUTH.USERNAME.MAX_LENGTH(VALIDATION_CONFIG.AUTH.USERNAME.MAX) })
    .regex(VALIDATION_CONFIG.AUTH.USERNAME.REGEX, { message: VALIDATION_MESSAGES.AUTH.USERNAME.INVALID });

const passwordSchema = z.string()
    .min(VALIDATION_CONFIG.AUTH.PASSWORD.MIN_LENGTH, { message: VALIDATION_MESSAGES.AUTH.PASSWORD.MIN_LENGTH(VALIDATION_CONFIG.AUTH.PASSWORD.MIN_LENGTH) })
    .max(VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH, { message: VALIDATION_MESSAGES.AUTH.PASSWORD.MAX_LENGTH(VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH) })
    .regex(VALIDATION_CONFIG.AUTH.PASSWORD.REGEX, { message: VALIDATION_MESSAGES.AUTH.PASSWORD.INVALID });

const emailOrUsernameSchema = z.string()
    .min(VALIDATION_CONFIG.AUTH.EMAIL_OR_USERNAME.MIN_LENGTH, { message: VALIDATION_MESSAGES.AUTH.EMAIL.REQUIRED })
    .max(VALIDATION_CONFIG.AUTH.EMAIL_OR_USERNAME.MAX_LENGTH, { message: VALIDATION_MESSAGES.AUTH.EMAIL.MAX_LENGTH(VALIDATION_CONFIG.AUTH.EMAIL_OR_USERNAME.MAX_LENGTH) })
    .refine((data) => {
        return emailSchema.safeParse(data).success || usernameSchema.safeParse(data).success;
    }, { message: VALIDATION_MESSAGES.AUTH.EMAIL_OR_USERNAME.INVALID });

export const loginSchema = z.object({
    emailOrUsername: emailOrUsernameSchema,
    password: passwordSchema,
});

export const signupSchema = z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
}).superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
        ctx.addIssue({
            message: VALIDATION_MESSAGES.AUTH.CONFIRM_PASSWORD.PASSWORDS_MISMATCH,
            path: ["confirmPassword"],
        });
    }
});