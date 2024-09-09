import { SectionTitle } from "../../section-title";
import { Button } from "../../button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../lib/animations";

import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";

import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .email("Digite um email válido")
    .min(1, "O campo email é obrigatório"),
  message: z
    .string()
    .min(1, "O campo mensagem é obrigatório")
    .min(3, "O campo mensagem deve ter pelomenos 3 caracteres")
    .max(500, "O campo mensagem deve ter no máximo 500 caracteres."),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function sendEmail(data) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs
      .send(
        "service_7a8xky2",
        "template_t9eleko",
        templateParams,
        "PYxjNKizKo2tPBKuV"
      )
      .then(
        (response) => {
          console.log("E-mail enviado");
          reset();
          toast.success("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <section
      className="py-20 px-6 md:py-34 flex items justify-center bg-gray-950"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato."
        />

        <div className="flex flex-col-reverse lg:flex-row lg:items-start items-center gap-3">
          <motion.form
            className="mt-12 w-full flex flex-col gap-4"
            onSubmit={handleSubmit(sendEmail)}
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Nome"
              className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              name="name"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-sm text-red-400">
                {errors.name.message}
              </span>
            )}

            <input
              type="text"
              placeholder="Email"
              className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              name="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}

            <textarea
              placeholder="Mensagem"
              className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              maxLength={500}
              name="message"
              id="message"
              {...register("message")}
            />
            {errors.message && (
              <span className="text-sm text-red-400">
                {errors.message.message}
              </span>
            )}
            <Button className="mt-6" type="submit">
              Enviar mensagem
            </Button>
            <Toaster />
          </motion.form>

          <div className="mt-12 text-3xl flex lg:flex-col gap-4">
            <a
              href="mailto:gutoamorim@outlook.com"
              target="_blank"
              className="hover:text-emerald-400 transition-colors"
            >
              <TbMail />
            </a>
            <a
              href="https://www.linkedin.com/in/gutoamorim87/"
              target="_blank"
              className="hover:text-emerald-400 transition-colors"
            >
              <TbBrandLinkedin />
            </a>
            <a
              href="https://wa.me/5527997489072?text=Ol%C3%A1,%20estou%20vindo%20atrav%C3%A9s%20do%20link%20do%20seu%20portfolio."
              target="_blank"
              className="hover:text-emerald-400 transition-colors"
            >
              <TbBrandWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
