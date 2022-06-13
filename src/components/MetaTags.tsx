import * as React from "react"
import { Helmet } from "react-helmet"
import defaultImage from '../assets/images/meta/index.jpg';

export default function MetaTags({
  metaTitle,
  metaDescription,
  metaPreviewImage,
  metaPath
}: any) {
    const domainUrl = process.env.ATM_URL_DOMAIN;
    const defaultTitle = 'Lightning ATM (Mainan)';
    const defaultDescription = 'Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri';

    return (
        <>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{metaTitle || defaultTitle}</title>

            <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
            <meta property="og:locale" content="id_ID" />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={defaultTitle} />

            <link rel="canonical" href={domainUrl + (metaPath != undefined ? metaPath : '/')} />
            <meta name="description" content={metaDescription || defaultDescription}/>
            <meta property="og:url" content={domainUrl + (metaPath != undefined ? metaPath : '/')}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={metaTitle || defaultTitle}/>
            <meta property="og:description" content={metaDescription || defaultDescription}/>
            <meta property="og:image" content={domainUrl + (metaPreviewImage != undefined ? metaPreviewImage : defaultImage)}/>
            <meta property="og:image:secure_url" content={domainUrl + (metaPreviewImage != undefined ? metaPreviewImage : defaultImage)}/>
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:description" content={metaDescription || defaultDescription}/>
            <meta name="twitter:image" content={domainUrl + (metaPreviewImage != undefined ? metaPreviewImage : defaultImage)}/>
            <meta name="twitter:title" content={metaTitle || defaultTitle}/>
            <meta name="twitter:site" content="@roaringstars"/>
            <meta name="twitter:creator" content="@roaringstars"/>
            <meta property="twitter:domain" content={domainUrl}/>
            <meta property="twitter:url" content={domainUrl + (metaPath != undefined ? metaPath : '/')}/>
          </Helmet>
        </>
    )
}
