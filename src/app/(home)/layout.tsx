import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Trustochain - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description: 'Modern AI Landing HTML Template',
	keywords: 'bootstrap 5, saas, landing page',
	authors: [{ name: 'Themetags' }],
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
            <Header />
			<div className='home-page'>{children}</div>
            <Footer />
		</>
	);
}