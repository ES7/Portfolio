import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/20">
        <div className="mb-10 flex flex-col gap-4">
          <p className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300 shadow-sm shadow-orange-500/10">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            HabiVox: Habit & Money Tracker
          </h1>
          <p className="max-w-3xl text-slate-400 sm:text-lg">
            Your privacy matters. This page explains what data HabiVox collects, how it is used, and how we protect it.
          </p>
        </div>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <p className="mt-4 text-slate-400">
              HabiVox collects the minimum information required to operate your account and deliver habit and expense tracking features.
            </p>
            <ul className="mt-4 space-y-3 pl-5 text-slate-300 list-disc">
              <li>
                <strong>Google login information:</strong> We use Firebase Auth for Google sign-in. Your Google password is never stored by HabiVox.
              </li>
              <li>
                <strong>Habit data:</strong> Personal habit entries, progress, reminders, and completion status.
              </li>
              <li>
                <strong>Expense data:</strong> Personal expense records, categories, amounts, and notes.
              </li>
              <li>
                <strong>Notification preferences:</strong> Push notification settings used only for reminders and alerts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">How We Store Your Data</h2>
            <p className="mt-4 text-slate-400">
              All user data is securely stored in Google Firestore. Firestore is a managed cloud database service with industry-standard protections.
            </p>
            <p className="mt-3 text-slate-400">
              We do not store payment card data or highly sensitive personal identifiers. Your tracked habits and expenses remain in your HabiVox account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Authentication</h2>
            <p className="mt-4 text-slate-400">
              HabiVox uses Firebase Authentication to sign users in with Google. Only the information needed to establish and manage your account is used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Notifications</h2>
            <p className="mt-4 text-slate-400">
              Push notifications are used only for app-related reminders, habit alerts, and important updates. Notification data is not shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Data Sharing & Third Parties</h2>
            <p className="mt-4 text-slate-400">
              We do not sell your data. Your information is used only to provide the HabiVox service and improve your experience.
            </p>
            <p className="mt-3 text-slate-400">
              The app uses Firebase Auth and Google Firestore to process authentication and storage, each governed by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Security</h2>
            <p className="mt-4 text-slate-400">
              We follow standard practices to protect your data. Access is limited to necessary services and secured under Google’s platform security.
            </p>
            <p className="mt-3 text-slate-400">
              Keep your Google account credentials secure to ensure your HabiVox account remains protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 text-slate-400">
              For questions about this privacy policy, contact us at <a href="mailto:[TERA EMAIL YAHAN]" className="text-orange-400 hover:text-orange-300">[TERA EMAIL YAHAN]</a>.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Last updated: May 21, 2026</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
