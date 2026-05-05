import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Vārds ir obligāts (min. 2 rakstzīmes)"),
  phone: z.string().min(8, "Ievadiet derīgu tālruņa numuru"),
  service: z.string().min(1, "Izvēlieties pakalpojumu"),
  description: z.string().min(10, "Aprakstiet uzdevumu (min. 10 rakstzīmes)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({ title = "Iesniegt pieprasījumu" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setError(null);
    try {
      // TODO: pievienot Resend/Edge Function integrāciju pēc deployment
      await new Promise((r) => setTimeout(r, 800));
      console.log("Form submission:", data);
      setSubmitted(true);
      reset();
    } catch {
      setError("Kļūda nosūtot pieprasījumu. Lūdzu, mēģiniet vēlreiz vai zvaniet.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center" role="alert" aria-live="polite">
        <CheckCircle className="w-12 h-12 text-primary" aria-hidden="true" />
        <h3 className="font-heading font-bold text-xl">Pieprasījums nosūtīts!</h3>
        <p className="text-muted-foreground">Atsauksimies 1 stundas laikā darba laikā.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary text-sm underline hover:no-underline"
        >
          Iesniegt vēl vienu pieprasījumu
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
      aria-label={title}
    >
      {error && (
        <div role="alert" className="bg-red-900/20 border border-red-500/30 rounded p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Vārds, uzvārds <span aria-hidden="true" className="text-primary">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full bg-muted border rounded px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.name ? "border-red-500" : "border-border"
          }`}
          placeholder="Piem. Jānis Bērziņš"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
          Tālrunis <span aria-hidden="true" className="text-primary">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`w-full bg-muted border rounded px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.phone ? "border-red-500" : "border-border"
          }`}
          placeholder="+371 12345678"
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">
          Pakalpojums <span aria-hidden="true" className="text-primary">*</span>
        </label>
        <select
          id="service"
          aria-required="true"
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`w-full bg-muted border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition appearance-none ${
            errors.service ? "border-red-500" : "border-border"
          }`}
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>
            Izvēlieties pakalpojumu...
          </option>
          <option value="montaza">Mēbeļu montāža</option>
          <option value="parvaksanas">Pārvākšanas serviss</option>
          <option value="koka-majinas">Bērnu koka mājiņa / šķūnis</option>
          <option value="cits">Cits</option>
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1.5">
          Uzdevuma apraksts <span aria-hidden="true" className="text-primary">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          aria-required="true"
          aria-describedby={errors.description ? "desc-error" : undefined}
          className={`w-full bg-muted border rounded px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${
            errors.description ? "border-red-500" : "border-border"
          }`}
          placeholder="Cik un kādas mēbeles jāsaliek? Kur atrodas dzīvoklis? Kāds stāvs?"
          {...register("description")}
        />
        {errors.description && (
          <p id="desc-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3.5 rounded hover:bg-primary/90 disabled:opacity-60 transition-colors"
        aria-busy={isSubmitting}
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        {isSubmitting ? "Sūta..." : "Iesniegt pieprasījumu"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Iesniedzot pieprasījumu, jūs piekrītat mūsu{" "}
        <a href="/privatuma-politika" className="text-primary hover:underline">
          privātuma politikai
        </a>
        .
      </p>
    </form>
  );
}
