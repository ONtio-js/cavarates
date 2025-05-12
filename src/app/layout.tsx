import type { Metadata } from 'next';
import './globals.css';
import DynamicStyles from '@/components/DynamicStyles';
import { Toaster } from 'sonner';
import ChatwootWidget from '@/components/chatwootWidget';
export const metadata: Metadata = {
	title: 'Cavarates - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description: 'Cavarates is a regulated broker in copy trading, trade with zero spreads',
	keywords: 'cavarates, broker, copy trading, zero spreads',
	authors: [{ name: 'Cavarates' }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={``}>
				<ChatwootWidget />
				<DynamicStyles />
				{children}
				<Toaster />
			</body>
		</html>
	);
}
