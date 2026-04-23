import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BOLTerms() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl w-full px-6">
          <h1 className="text-4xl font-display font-bold text-[#1A2E20] mb-8">Bill of Lading Terms & Conditions</h1>
          <div className="prose prose-sm md:prose-base text-gray-600">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">1. Carrier Liability</h2>
            <p className="mb-4">
              Liability for loss, damage, or delay to any shipment is limited to the actual value of the goods, not to exceed any specific limits defined in the applicable tariff or carrier agreement, subject to the provisions of the Carmack Amendment.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">2. Description of Goods</h2>
            <p className="mb-4">
              The shipper is responsible for accurately describing the contents, weight, and dimensions of the shipment. Any discrepancies may result in rate adjustments or handling fees.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">3. Claim Procedures</h2>
            <p className="mb-4">
              Any claims for loss or damage must be filed in writing within nine (9) months of the delivery date, or in the case of non-delivery, within nine (9) months after a reasonable time for delivery has elapsed.
            </p>
            
            <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">4. Payment of Charges</h2>
            <p className="mb-4">
              All transportation charges are due and payable as specified in the service agreement. The shipper, consignee, and owner of the goods are jointly and severally liable for all charges.
            </p>

             <h2 className="text-xl font-semibold text-[#1A2E20] mt-6 mb-3">5. Delivery and Receipt</h2>
            <p className="mb-4">
              Unless otherwise agreed, delivery will be made to the specified consignee at the address indicated on the face of the Bill of Lading. A signature on the delivery receipt constitutes prima facie evidence of delivery in good condition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
