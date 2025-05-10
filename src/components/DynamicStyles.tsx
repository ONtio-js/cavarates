'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function DynamicStyles() {
	const pathname = usePathname();

	useEffect(() => {
		// Check if we're not in admin or dashboard routes
		if (
			!pathname.startsWith('/admin') &&
			!pathname.startsWith('/dashboard') &&
			!pathname.startsWith('/auth')
		) {
			// Load the home styles
			const styleLinks = [
				'/resources/landing/assets/css/fonts/ff-1.css',
				'/resources/landing/assets/css/fonts/ff-3.css',
				'/resources/landing/assets/css/fonts/bootstrap-icons.css',
				'/resources/landing/assets/css/plugins.min.css',
				'/resources/landing/assets/css/style.min.css',
			];

			styleLinks.forEach((href) => {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = href;
				document.head.appendChild(link);
			});

			// Add black background style
			const blackBackgroundStyle = document.createElement('style');
			blackBackgroundStyle.textContent = `
				body {
					background-color: #000000;
				}
			`;
			document.head.appendChild(blackBackgroundStyle);

			// Cleanup function to remove styles when component unmounts
			return () => {
				styleLinks.forEach((href) => {
					const links = document.querySelectorAll(
						`link[href="${href}"]`
					);
					links.forEach((link) => link.remove());
				});
				// Remove the black background style
				blackBackgroundStyle.remove();
			};
		}
	}, [pathname]);

	return null;
}
