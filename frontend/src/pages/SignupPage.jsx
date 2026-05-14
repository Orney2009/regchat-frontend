import { Link } from "react-router-dom";
import HomeTopNav from "../components/sections/home/HomeTopNav";

const signupBenefits = [
  {
    icon: "verified",
    text: "Accès sécurisé aux services gouvernementaux",
  },
  {
    icon: "notifications_active",
    text: "Notifications sur l'évolution de vos dossiers",
  },
  {
    icon: "account_balance",
    text: "Conformité totale avec le code de l'urbanisme",
  },
];

const countries = [
  ["BJ", "Bénin"],
  ["FR", "France"],
  ["US", "États-Unis"],
  ["CI", "Côte d'Ivoire"],
  ["TG", "Togo"],
  ["NG", "Nigéria"],
  ["SN", "Sénégal"],
  ["CA", "Canada"],
  ["Other", "Autre pays..."],
];

const footerLinks = ["Mentions Légales", "Confidentialité", "Contact"];

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <HomeTopNav />

      <main className="flex-grow pattern-overlay py-xl">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="bg-surface-container-low border border-outline-variant p-xl rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />

              <h1 className="font-h1 text-h1 text-primary mb-md">Créez votre compte citoyen</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                Rejoignez la plateforme officielle de gestion urbaine du Bénin. Accédez aux permis de construire, consultez le cadastre et suivez vos demandes en temps réel.
              </p>

              <div className="space-y-md">
                {signupBenefits.map((benefit) => (
                  <div key={benefit.icon} className="flex items-center gap-md text-on-surface">
                    <span className="material-symbols-outlined text-secondary" data-icon={benefit.icon}>
                      {benefit.icon}
                    </span>
                    <span className="font-body-md">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block rounded-xl overflow-hidden h-64 shadow-sm border border-outline-variant">
              <img
                alt="Modern Benin Urban Landscape"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugRt_VBerkKas79y8P4R00jAYpyO9OvPe23Xx9Vk0M9I_zrh2UfFfXMwLVNaVDXwkPEqSmjctkudxQ4XnRLCtoiUjhNN4Ev_tvZZVEdpH0hNTUgbW89YD0wJmV252S--tpx_ByVXIwMjUlrhLh93JKbcvCB0AZyjU9P44hCi9r6gMa4sVgShBw_9nIFDHGq_FZXJxZJaRjC59uhnYBIAgmRSbP9MPFEQGS05XDeyBUA_xFpa4TxV9v7FiM"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-xl rounded-xl border border-outline-variant shadow-[0_2px_4px_rgba(1,45,29,0.05)]">
            <div className="mb-xl border-b border-outline-variant pb-md flex items-center justify-between">
              <h2 className="font-h2 text-h2 text-primary">Inscription</h2>
              <span className="material-symbols-outlined text-outline" data-icon="person_add">
                person_add
              </span>
            </div>

            <form className="space-y-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Nom</label>
                  <input
                    className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md"
                    placeholder="Ex: AHOUANVOEDO"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Prénom</label>
                  <input
                    className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md"
                    placeholder="Ex: Koffi"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Adresse Email</label>
                <input
                  className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md"
                  placeholder="nom.prenom@exemple.bj"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Pays de résidence</label>
                <select className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md appearance-none">
                  {countries.map(([code, label]) => (
                    <option key={code} value={code}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Mot de passe</label>
                  <input
                    className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Confirmation</label>
                  <input
                    className="w-full p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-surface-bright outline-none font-body-md"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              <div className="flex items-start gap-md pt-sm">
                <input className="mt-1 rounded border-outline-variant accent-primary focus:ring-primary" type="checkbox" />
                <p className="font-caption text-caption text-on-surface-variant">
                  J'accepte les <a className="text-secondary underline" href="#">conditions générales d'utilisation</a> et la politique de protection des données personnelles du Ministère du Cadre de Vie.
                </p>
              </div>

              <button
                className="w-full bg-primary text-white py-md rounded-lg font-label-bold text-label-bold hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_4px_2px_rgba(1,45,29,0.1)]"
                type="submit"
              >
                CRÉER MON COMPTE
              </button>

              <div className="flex items-center gap-md py-md">
                <div className="h-px bg-outline-variant flex-grow" />
                <span className="font-caption text-caption text-outline">OU</span>
                <div className="h-px bg-outline-variant flex-grow" />
              </div>

              <p className="text-center font-body-md text-on-surface-variant">
                Vous avez déjà un compte ? <Link className="text-primary font-bold hover:underline" to="/chat">Se connecter</Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant dark:border-outline mt-xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-xl py-lg w-full max-w-[1200px] mx-auto gap-md">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <span className="font-label-bold text-label-bold text-primary">GOUVERNEMENT DU BÉNIN</span>
            <p className="font-caption text-caption text-on-surface-variant">© 2024 Gouvernement de la République du Bénin - Urbanisme &amp; Habitat</p>
          </div>

          <div className="flex gap-lg">
            {footerLinks.map((label) => (
              <a
                key={label}
                className="font-caption text-caption text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-opacity opacity-80 hover:opacity-100"
                href="#"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;