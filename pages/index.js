import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <FormattedMessage id="page.home.header" />
        </h1>
      </main>
    </>
  );
}
