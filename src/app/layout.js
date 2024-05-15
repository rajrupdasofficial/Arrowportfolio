import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "./GoogleAdsense";
import ClarityMS from "./Clarity";
import TransitionProvider from "@/components/transitionProvider";
import GoogleAnalytics from "./GoogleAnalytics";
import { websiteMetadata } from "../../util/WebsiteMetaData";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.webstackpros.net"),
  title: "Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
  other: { "p:domain_verify": "7f562b83bb6b61abb8204072b470b756" },
  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    url: websiteMetadata.siteUrl,
    siteName: websiteMetadata.title,
    images: [websiteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: websiteMetadata.title,
    images: [websiteMetadata.socialBanner],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE ? (
          <GoogleAdsense ad_id={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} />
        ) : null}

        <ClarityMS />
        <hr className="border-gray-400 border-1 my-4"/>
        <Footer/>
      </body>
    </html>
  );
}
