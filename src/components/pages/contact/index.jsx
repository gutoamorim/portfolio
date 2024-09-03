import { SectionTitle } from "../../section-title";
import { Button } from "../../button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section className="py-16 px-6 md:py-34 flex items justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato."
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
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
            <span className="text-sm text-red-400">{errors.name.message}</span>
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
            <span className="text-sm text-red-400">{errors.email.message}</span>
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
        </form>
      </div>
    </section>
  );
};
