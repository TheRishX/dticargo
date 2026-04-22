import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A2E20] border-t border-emerald-900 pt-16 pb-8 flex flex-col items-center w-full">
      <div className="max-w-7xl w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display font-bold text-2xl tracking-tighter text-white mb-4 block">
            DTI<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">CARGO</span>
          </span>
          <p className="text-emerald-100/70 text-sm">
            Fast, reliable, nationwide logistics you can trust.
          </p>
        </div>
        
        <div>
           <h4 className="text-white font-semibold mb-4">Services</h4>
           <ul className="space-y-2 text-sm text-emerald-100/60">
             <li><a href="/#services" className="hover:text-emerald-300 transition-colors">Freight Brokerage</a></li>
             <li><a href="/#services" className="hover:text-emerald-300 transition-colors">FTL & LTL</a></li>
             <li><a href="/#services" className="hover:text-emerald-300 transition-colors">Warehousing</a></li>
             <li><a href="/#services" className="hover:text-emerald-300 transition-colors">Supply Chain Mgt</a></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white font-semibold mb-4">Company</h4>
           <ul className="space-y-2 text-sm text-emerald-100/60">
             <li><Link href="/about" className="hover:text-emerald-300 transition-colors">About Us</Link></li>
             <li><a href="/#faq" className="hover:text-emerald-300 transition-colors">FAQ</a></li>
             <li><a href="/#contact" className="hover:text-emerald-300 transition-colors">Contact</a></li>
           </ul>
        </div>

         <div>
           <h4 className="text-white font-semibold mb-4">Legal</h4>
           <ul className="space-y-2 text-sm text-emerald-100/60">
             <li><Link href="/privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms" className="hover:text-emerald-300 transition-colors">Terms of Service</Link></li>
             <li><Link href="/terms" className="hover:text-emerald-300 transition-colors">Bill of Lading Terms</Link></li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-emerald-800 text-xs text-emerald-100/40">
         <p>&copy; {new Date().getFullYear()} DTI Cargo LLC. All rights reserved.</p>
         <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">Twitter</a>
         </div>
      </div>
    </footer>
  );
}
