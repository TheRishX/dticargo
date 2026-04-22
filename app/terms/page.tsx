import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl w-full px-6">
          <h1 className="text-4xl font-display font-bold text-[#1A2E20] mb-8">Terms of Service</h1>
          <div className="prose prose-sm md:prose-base text-gray-600">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">1. Agreement to Terms</h2>
            <p className="mb-4">By accessing or using DTICargo.com, you agree to be legally bound by these Terms of Service. If you do not agree to any of these terms, please do not use our services.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">2. Service Usage</h2>
            <p className="mb-4">Our logistics services are subject to additional carrier agreements and standard Bill of Lading protocols upon finalizing a shipment.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">3. Liability</h2>
            <p className="mb-4">While we execute with exact precision, DTI Cargo acts seamlessly as a broker and logistics facilitator. Liability of freight transit damage falls upon the designated carrier operating under DOT regulations.</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">4. Disclaimer</h2>
            <p className="mb-4">Website functionality, quotes, and tracking metrics are provided &quot;as-is&quot;. Quotes provided are estimates until officially verified and dispatched.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
