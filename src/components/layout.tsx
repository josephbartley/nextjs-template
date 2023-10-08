import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/layout.module.scss'

export default function Layout({ children }) {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault()
		event.stopPropagation()
		setShowMenu(!showMenu)
	}

	return (
		<>
			<div className={styles['app']}></div>
			<header className={styles['header']}>
				<div className={styles['header-row']}>
					<div className={styles['logo']}>NextJS Template</div>
					<button
						className={styles['nav-button']}
						onClick={(event) => toggleMenu(event)}
					>
						Menu
					</button>
					<nav className={styles['desktop-nav']}>
						<ul>
							<Link href='/home'>Home</Link>
						</ul>
						<ul>
							<Link href='/about'>About</Link>
						</ul>
						<ul>
							<Link href='/services'>Services</Link>
						</ul>
						<ul>
							<Link href='/contact'>Contact</Link>
						</ul>
					</nav>
				</div>
				<nav
					className={
						!showMenu
							? `${styles['mobile-nav'] ?? ''} ${
									styles['hide'] ?? ''
							  }`
							: styles['mobile-nav']
					}
				>
					<ul>
						<Link href='/home'>Home</Link>
					</ul>
					<ul>
						<Link href='/about'>About</Link>
					</ul>
					<ul>
						<Link href='/services'>Services</Link>
					</ul>
					<ul>
						<Link href='/contact'>Contact</Link>
					</ul>
				</nav>
			</header>
			<main className={styles['main']}>{children}</main>
			<footer className={styles['footer']}>
				&copy; 2023 NextJS Template. All rights reserved.
			</footer>
		</>
	)
}
