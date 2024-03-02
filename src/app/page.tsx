"use client";
import Button from "@/components/Button/Button";
import InputBox from "@/components/Input/InputBox";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FormEvent, useRef } from "react";

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,

        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("E-mail enviado com sucesso!");
          form.current?.reset();
        },
        (error) => {
          toast.error("Ops... Algo deu errado, tente novamente mais tarde.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <main className="flex w-full h-dvh items-center justify-center">
      <div className="flex flex-col items-center justify-center w-80 sm:w-96 bg-white p-10 rounded-md gap-10 shadow-md">
        <Image src="/logo.png" alt="logo" width={80} height={80} priority />
        <h1 className="text-lg text-center font-medium">
          Entre em contato com nosso time!
        </h1>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col gap-2 w-full"
        >
          <InputBox
            className="bg-white shadow-md"
            type="text"
            placeholder="Nome"
            name="from_name"
            required
          />
          <InputBox
            className="bg-white shadow-md"
            type="email"
            placeholder="E-mail"
            name="from_email"
            required
          />
          <InputBox
            className="bg-white shadow-md"
            type="text"
            placeholder="Assunto"
            name="from_subject"
            required
          />
          <textarea
            name="message"
            id="content"
            cols={30}
            rows={5}
            className="rounded-md p-2 bg-white shadow-md outline-none"
            placeholder="Escreva sua mensagem..."
            required
          ></textarea>
          <Button
            type="submit"
            className="bg-purple-800 hover:bg-purple-700 text-white"
          >
            Enviar
          </Button>
        </form>
      </div>
    </main>
  );
}
