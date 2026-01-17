import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { loadMetaPixel } from '@/lib/metaPixel';


export const ThankYouPage = () => {
     useEffect(() => {
    // 1️⃣ Load pixel safely (won’t double-load)
    loadMetaPixel('4315896568733973');

    // 2️⃣ Fire Purchase event AFTER load
    window.fbq?.('trackCustom', 'Purchase NNW', {
      content_name: 'LP2_Product',
      content_category: 'LP2_Offer',
      content_ids: ['LP2_IN_99'],
      content_type: 'product',
      value: 99,
      currency: 'INR',
    });
  }, []);
  
  return (
    <section className="min-h-screen bg-[#04343b] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-philosopher font-bold text-[#04343b] mb-2">
          You’re Successfully Registered 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your seat for the <strong>2-Day Numerology Masterclass</strong> is confirmed.
        </p>

        {/* Important Notice */}
        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            ⚠️ <strong>IMPORTANT:</strong> All workshop links, reminders,
            bonuses & live session access will be shared only on our
            <strong> WhatsApp Group</strong>.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/XXXXXXXXXX?text=Hi%2C%20I%20have%20registered%20for%20the%20Numerology%20Masterclass"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            size="xl"
            className="
              w-full
              bg-green-500 hover:bg-green-600
              text-white
              font-bold
              rounded-xl
              flex items-center justify-center gap-2
              shadow-lg
            "
          >
            Join WhatsApp Group Now
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>

        {/* Trust Line */}
        <p className="text-xs text-gray-500 mt-4">
          ⏰ Please join immediately to avoid missing session links
        </p>

      </div>
    </section>
  );
};
