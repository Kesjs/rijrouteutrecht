export const inputClass =
  "w-full rounded-[7.6px] border border-slate bg-pure-white px-3 py-[10px] text-[15px] placeholder:text-fog aria-[invalid=true]:border-error";

export function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-[14px] font-bold">
        {label}
        {required ? (
          <span className="text-error" aria-hidden>
            {" "}
            *
          </span>
        ) : (
          <span className="font-medium text-slate"> (optioneel)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-[13px] text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export function Consent({
  checked,
  onChange,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="flex items-start gap-3 text-[14px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          aria-describedby={error ? "toestemming-error" : undefined}
          className="mt-1 h-4 w-4 accent-vivid-indigo"
        />
        <span>
          Ik geef toestemming om mijn gegevens te verwerken voor deze aanvraag,
          zoals beschreven in het{" "}
          <a href="/privacy" className="font-bold text-vivid-indigo underline">
            privacybeleid
          </a>
          .
        </span>
      </label>
      {error && (
        <p id="toestemming-error" className="mt-1 text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}
