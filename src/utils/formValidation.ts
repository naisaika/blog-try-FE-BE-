import { z } from "zod";

export const formSchema = z.object({
    yourname: z
        .string()
        .min(1, { message: "氏名は、入力必須です。" })
        .max(50, {message: "氏名は、50文字以下で入力してください。"})
        .regex(
            /^[^\x20-\x7E]+$/,
            {message: "氏名は、ひらがな、カタカナ、漢字、または英文字（全角）で入力してください。"})
        .superRefine((val, ctx) => {
            if (val.length > 0 && val.length < 2) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "氏名は、2文字以上の入力が必要です。",
                });
            }
        }),
    email: z
        .string()
        .min(1, { message: "メールアドレスは、入力必須です。" })
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            {message: "正しいメールアドレスの形式で入力をしてください。"}),
    title: z
    .string(),
    message: z
        .string()
        .min(1, { message: "お問い合わせ内容は、入力必須です。" })
        .max(1000, {message: "1000文字以下で入力してください。"})
})

