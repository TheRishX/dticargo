import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-12">
        <div className="max-w-4xl w-full px-6">
          <h1 className="text-4xl font-display font-bold text-[#1A2E20] mb-8">Privacy Policy</h1>
          <div className="prose prose-sm md:prose-base text-gray-600">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you manually provide to us for transportation routing, quoting, and business communication purposes including your name, company info, and shipment details.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">2. How We Use Your Information</h2>
            <p className="mb-4">Your information is strictly used to process quotes, deliver shipments efficiently, handle transportation communication, and improve our website&apos;s user experience.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">3. Data Security</h2>
            <p className="mb-4">We take immense pride in ensuring top-tier digital security protocols are in place to prevent unauthorized access or disclosure of your transportation and financial data.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">4. Contact Us</h2>
            <p className="mb-4">For any privacy-related questions, please use our contact form or call us directly at <strong>+1 (323) 408-0241</strong>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
