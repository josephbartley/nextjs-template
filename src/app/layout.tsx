export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='description'
					content='Next.js + TypeScript Example'
				/>
				<link rel='icon' href='/favicon.ico' />
				<title>Next.js + TypeScript Example</title>
			</head>
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
