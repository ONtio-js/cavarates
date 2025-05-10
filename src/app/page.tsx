import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Feature';
import CopyTrading from '@/components/CopyTrading';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testmonials';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer'; 

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Features />
			<CopyTrading />
			<Pricing />
			<Testimonials />
			<Brands />
			<Footer />
		</main>
	);
}
