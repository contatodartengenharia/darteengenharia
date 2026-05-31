import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description: string
  ogImage?: string
  canonical?: string
}

export function SEO({ title, description, ogImage, canonical }: Props) {
  const fullTitle = `${title} | D'ARTE Engenharia`
  const baseUrl = 'https://darte.eng.br'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical ?? baseUrl} />

      {/* OpenGraph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content="website" />
      <meta property="og:locale"      content="pt_BR" />
      <meta property="og:url"         content={canonical ?? baseUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  )
}
