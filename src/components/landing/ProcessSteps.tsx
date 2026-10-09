const steps = [
  {
    title: "Kies je pakket",
    body: "Bepaal je rijbewijscategorie en kies een pakket dat bij je past.",
  },
  {
    title: "Volg je lessen",
    body: "Praktijklessen bij een instructeur, fysiek, op jouw tempo.",
  },
  {
    title: "Doe examen bij het CBR",
    body: "Wij bereiden je voor; het examen zelf loopt via het CBR.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-frost-gray py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-2xl font-bold">Zo werkt het</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title}>
              <p className="text-sm font-bold text-vivid-indigo">{i + 1}</p>
              <p className="mt-2 font-bold">{step.title}</p>
              <p className="mt-1 text-sm text-slate">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
