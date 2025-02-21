import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <title>{metadata.title?.toString()}</title>
      <meta name='description' content={metadata.description?.toString()} />

      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content='Eric Do' />
      <meta name='robots' content='index, follow' />

      <meta property='og:title' content={metadata.title?.toString()} />
      <meta
        property='og:description'
        content={metadata.description?.toString()}
      />
      <meta property='og:url' content='https://ericdo.io' />
      <meta property='og:image' content='/thumbnail.png' />

      <link rel='manifest' href='/site.webmanifest' />
    </head>
  )
}
