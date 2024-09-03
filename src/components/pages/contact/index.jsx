import { SectionTitle } from "../../section-title";
import { Button } from "../../button";

export const Contact = () => {
  return (
    <section className="py-16 px-6 md:py-34 flex items justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato."
        />

        <form className="mt-12 w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            type="text"
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
          />
          <Button className="mt-6">Enviar mensagem</Button>
        </form>
      </div>
    </section>
  );
};
