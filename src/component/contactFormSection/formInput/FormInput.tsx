"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/utils/formValidation";
import { useState } from "react";
import { FORM_TITLE } from "@/data/data";
import styles from "./FormInput.module.scss"

type FormValues = z.infer<typeof formSchema>;

export const FormInput = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourname: "",
      email: "",
      title: "",
      message: "",
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formvalue: FormValues) => {
    setIsLoading(true);
  
    try {
      const response = await fetch("api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formvalue),
      });
  
      if (!response.ok) {
        throw new Error("通信エラーです。時間をおいて再度お試しください。");
      }
  
      const data = await response.json();
      console.log(data.message); 
      reset();
  
    } catch (error) {
      console.error("送信失敗しました:", error);
      
    } finally {
      setIsLoading(false);  
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {FORM_TITLE.map((title) => (
        <div key={title.id}>
          <label htmlFor={title.id}>{title.label}</label>
          {title.isTextArea? (
            <textarea id={title.id} {...register(title.register)} className={styles.textarea}/>
          ): (
            <input 
              type="text" 
              id={title.id} 
              autoComplete={title.autoComplete} 
              {...register(title.register)} 
              className={styles.input}
            />
          )}
          {errors[title.register] && <p className={styles.errorMsg}>{errors[title.register]?.message}</p>}
        </div>
      ))}
        <button 
          type="submit" 
          className={`${styles.submitBtn} ${isLoading? styles.submitting: ""}`} 
          disabled={isLoading}>
          送信
        </button>
    </form>
  )
}
