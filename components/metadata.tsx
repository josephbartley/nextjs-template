import Head from 'next/head'
import { FunctionComponent } from 'react'

export interface Metadata {
	title: string
	canonical: string
	description: string
	author: string
	openGraph: OpenGraphMetadata
	twitter: TwitterMetadata
}

export interface OpenGraphMetadata {
	title: string
	description: string
	type: string
	url: string
	locale: string

	imageUrl: string
	imageSecureUrl: string
	imageAlt: string
	imageType: string
}

export interface TwitterMetadata {
	card: 'summary' | 'summary_large_image' | 'app' | 'player'
	title: string
	description?: string
	image?: string
	imageAlt?: string
	site?: string
	creator?: string
	player?: string
	playerWidth?: number
	playerHeight?: number
}

const MetadataElement: FunctionComponent<{ metadata: Metadata }> = ({
	metadata,
}) => {
	const { openGraph, twitter } = metadata
	return (
		<Head>
			<title>{metadata.title}</title>
			<link rel='canonical' href={metadata.canonical} />
			<meta name='description' content={metadata.description} />
			<meta name='author' content={metadata.author} />
			<meta name='apple-mobile-web-app-title' content={metadata.title} />

			<meta property='og:site_name' content={openGraph.title} />
			<meta property='og:locale' content={openGraph.locale} />
			<meta property='og:type' content={openGraph.type} />
			<meta property='og:url' content={openGraph.url} />
			<meta property='og:title' content={openGraph.title} />
			<meta property='og:description' content={openGraph.description} />

			<meta property='og:image:url' content={openGraph.imageUrl} />
			<meta
				property='og:image:secure_url'
				content={openGraph.imageSecureUrl}
			/>
			<meta property='og:image:alt' content={openGraph.imageAlt} />
			<meta property='og:image:type' content={openGraph.imageType} />

			<meta name='twitter:card' content={twitter.card} />
			<meta name='twitter:title' content={twitter.title} />
			{twitter.site && (
				<meta name='twitter:site' content={twitter.site} />
			)}
			{twitter.creator && (
				<meta name='twitter:creator' content={twitter.creator} />
			)}
			{twitter.description && (
				<meta
					name='twitter:description'
					content={twitter.description}
				/>
			)}
			{twitter.image && (
				<meta name='twitter:image' content={twitter.image} />
			)}
			{twitter.imageAlt && (
				<meta name='twitter:image:alt' content={twitter.imageAlt} />
			)}
		</Head>
	)
}

export default MetadataElement
