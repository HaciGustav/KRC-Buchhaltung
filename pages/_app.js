import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import tr from "@/i18n/tr.json";
import de from "@/i18n/de.json";
import Layout from "@/components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const messages = { tr, de };

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  const getDirection = (locale) => "ltr";

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} dir={getDirection(locale)} />
      </Layout>
      <ToastContainer />
    </IntlProvider>
  );
}
