import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Header";

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
      <Header />
      <main style={{ padding: "1.5rem" }}>
        <h1>
          <FormattedMessage id="page.home.header" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          commodo varius urna. Cras dictum eget augue porttitor tincidunt.
          Curabitur ullamcorper condimentum sagittis. Donec risus tellus,
          lobortis ac congue sed, porttitor sed mi. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
          laoreet mauris eget egestas pretium. Integer pharetra ipsum ipsum,
          aliquet lacinia urna semper nec. Nulla facilisi. Aliquam eget mi ac
          nibh congue vehicula. Ut ut turpis id libero sodales pulvinar vitae in
          lacus. Aliquam placerat, lorem et efficitur lacinia, lacus lacus
          tincidunt est, id finibus neque ante in risus. Suspendisse libero
          magna, vestibulum at bibendum vitae, eleifend in neque. Nullam
          imperdiet rutrum odio. Nunc massa tellus, rhoncus et aliquet id,
          tempus ut dui. Sed eget vulputate leo. Fusce mollis imperdiet lectus,
          at luctus est dapibus non. Proin dui massa, ornare vel libero a,
          placerat tristique lacus. Nulla eu placerat nulla. In hac habitasse
          platea dictumst. Mauris vestibulum elit quis mauris finibus tempor.
          Sed eu rhoncus elit, eu vehicula mi. Curabitur finibus ullamcorper
          viverra. Pellentesque mi tellus, iaculis vitae odio vitae, ultrices
          blandit justo. Duis cursus augue neque, id suscipit tellus hendrerit
          sed. In hac habitasse platea dictumst. Integer faucibus dui justo, non
          ultricies ligula auctor in. Etiam eleifend purus ac lorem posuere
          fringilla eget vel lectus. Sed interdum ligula sit amet eros viverra
          faucibus ac vitae justo. Curabitur convallis porttitor varius. Aliquam
          maximus rutrum est non euismod. Aenean rutrum consequat massa at
          iaculis. Nulla facilisi. In hac habitasse platea dictumst. Maecenas
          accumsan, nisl sed interdum dignissim, turpis odio luctus ante, ac
          viverra est ante in diam. Maecenas posuere vestibulum mauris sit amet
          malesuada. Nam gravida pharetra lacus vel dictum. Phasellus tempor,
          eros sed sodales eleifend, magna nisl cursus dolor, ac volutpat mi
          nibh non purus. Morbi viverra, metus quis commodo laoreet, ipsum dui
          auctor leo, eget ultricies ligula libero ac magna. Maecenas quis magna
          quam. Donec quis arcu ullamcorper, luctus sapien eu, bibendum nibh.
          Etiam pulvinar iaculis massa. Proin vehicula quam vel justo consequat,
          sit amet bibendum ex faucibus. Suspendisse nec fermentum justo.
          Aliquam vel massa ac orci faucibus pretium. Fusce a commodo ligula.
          Vivamus ut consequat felis, et placerat tortor. Ut libero neque,
          malesuada sed interdum eget, faucibus ut dui.
        </p>
      </main>
    </>
  );
}
