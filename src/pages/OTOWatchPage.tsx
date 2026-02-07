import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Gift,
  TrendingUp,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { useFacebookPixel } from "@/hooks/usePIxelWatch";
const books = [
  { title: 'Money Flow Mastery', desc: 'Paisa stable karne ke liye', image: '/3.png' },
  { title: 'Name Numerology Blueprint', desc: 'Naam ka power samajhne ke liye', image: '/4.png' },
  { title: 'Attract The Right Clients', desc: 'Sahi clients attract karne ke liye', image: '/2.png' },
  { title: '10X Your Business', desc: 'Business growth ke liye', image: '/1.png' },
  { title: 'Numerology Success Diary', desc: '30 din ka guided routine', image: '/5.png' },
];

export const OTOWatchPage = () => {

  useFacebookPixel({
       eventName: "Lead_Watch",
     });
  const [choice, setChoice] = useState<'yes' | 'no' | null>(null);

  const params = new URLSearchParams(window.location.search);

const fullName = params.get('full_name') || '';
const email = params.get('email') || '';
const phone = params.get('phone') || '';
const city = params.get('city') || 'NA';


  const handleContinue = () => {
  if (choice === 'yes') {
    const razorpayBase =
      'https://pages.razorpay.com/pl_S6a2oIr2Ld8yo0/view';

    const queryParams = new URLSearchParams({
      full_name: fullName,
      email: email,
      phone: phone,
      city: city,
      course_name: 'Wrist Watch Workshop - FB',
    }).toString();

    window.location.href = `${razorpayBase}?${queryParams}`;
  }

  if (choice === 'no') {
    window.location.href =
      '/watch-fb-ty';
  }
};

  return (
    <section className="min-h-screen bg-[#0b0b0b] py-10 md:py-20 text-white">
      <div className="container max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-full px-4 py-1 text-sm font-semibold text-[#d4af37] mb-5">
              <Sparkles className="h-4 w-4" />
              Upgrade Option · Only ₹99 Today
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Ab paisa + success ko{' '}
              <span className="text-[#d4af37]">fast-track</span> kijiye
            </h1>

            {/* Sub headline */}
            <p className="text-lg text-white/80 mt-4 max-w-2xl leading-relaxed">
              Aapka <span className="font-semibold text-white">Wristwatch Analysis unlock</span> ho gaya hai.
              <br />
              Ab next step hai{' '}
              <span className="font-semibold text-white">
                paisa + clients + growth
              </span>{' '}
              ko boost karna — sirf{' '}
              <span className="font-semibold text-[#d4af37]">₹99</span> mein.
            </p>

            <p className="text-white/70 mt-3 max-w-2xl">
              Agar aap chahte hain ki aapka lucky system sirf activate nahi,
              balki consistent results de, toh ye{' '}
              <span className="font-semibold text-[#d4af37]">
                Success Upgrade Bundle
              </span>{' '}
              aapke liye design kiya gaya hai.
            </p>

            {/* Bundle */}
            <div className="mt-10 bg-[#121212] rounded-2xl border border-white/10 p-4 sm:p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Gift className="h-5 w-5 text-[#d4af37]" />
                Aapko kya milega (5 Ebooks Bundle)
              </h3>

              {/* MOBILE: 3 + 2 centered */}
              <div className="grid grid-cols-3 gap-3 sm:hidden">
                {books.slice(0, 3).map((book, i) => (
                  <div
                    key={i}
                    className="bg-[#0b0b0b] border border-white/10 rounded-xl p-2 text-center"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-24 object-contain mb-2"
                    />
                    <h4 className="font-semibold text-white text-xs">
                      {book.title}
                    </h4>
                    <p className="text-[10px] text-white/60 mt-1">
                      {book.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-3 sm:hidden">
                {books.slice(3).map((book, i) => (
                  <div
                    key={i}
                    className="bg-[#0b0b0b] border border-white/10 rounded-xl p-2 text-center w-[30%]"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-24 object-contain mb-2"
                    />
                    <h4 className="font-semibold text-white text-xs">
                      {book.title}
                    </h4>
                    <p className="text-[10px] text-white/60 mt-1">
                      {book.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, i) => (
                  <div
                    key={i}
                    className="bg-[#0b0b0b] border border-white/10 rounded-xl p-4 text-center"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-40 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-white text-sm">
                      {book.title}
                    </h4>
                    <p className="text-xs text-white/60 mt-1">
                      {book.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#d4af37]" />
                Ye upgrade kyu lena chahiye?
              </h3>

              <ul className="grid md:grid-cols-2 gap-3 text-white/80">
                {[
                  'Money blocks clear karne mein',
                  'Income flow stable karne mein',
                  'Right clients attract karne mein',
                  'Business growth plan set karne mein',
                  'Daily success routine follow karne mein',
                ].map((point, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <ShieldCheck className="h-4 w-4 text-green-400 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Value */}
            <div className="mt-10 bg-[#121212] border border-[#d4af37]/30 rounded-2xl p-6 text-center">
              <p className="text-lg font-bold">
                Worth <span className="line-through text-white/40">₹5,000+</span>
              </p>
              <p className="text-[#d4af37] font-semibold mt-1">
                Aaj sirf <span className="text-white">₹99</span> mein upgrade available hai
              </p>
            </div>
          </div>

          {/* RIGHT CHOICE BOX */}
          <div className="bg-white text-[#0b0b0b] rounded-3xl shadow-2xl p-6 md:p-8 sticky top-6">

            <p className="text-sm text-gray-500 text-center mb-1">
              One last step
            </p>

            <h3 className="text-xl font-bold text-center mb-5">
              Confirm Your Upgrade (₹99)
            </h3>

            <div className="space-y-4">
              <label className={`flex gap-3 items-start border rounded-xl p-4 cursor-pointer transition
                ${choice === 'yes' ? 'border-[#d4af37] bg-[#fff9e6]' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="oto"
                  checked={choice === 'yes'}
                  onChange={() => setChoice('yes')}
                />
                <span className="font-medium">
                  Haan, mujhe ₹99 mein upgrade chahiye
                </span>
              </label>

              <label className={`flex gap-3 items-start border rounded-xl p-4 cursor-pointer transition
                ${choice === 'no' ? 'border-gray-400 bg-gray-50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="oto"
                  checked={choice === 'no'}
                  onChange={() => setChoice('no')}
                />
                <span className="font-medium">
                  Nahi, abhi skip karna hai
                </span>
              </label>
            </div>

            <button
              disabled={!choice}
              onClick={handleContinue}
              className="
                mt-6 w-full flex items-center justify-center gap-2
                bg-[#d4af37] hover:bg-[#c9a634]
                text-black font-bold text-lg
                py-4 rounded-full
                transition disabled:opacity-50
              "
            >
              Confirm & Continue
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="text-xs text-gray-600 text-center mt-4 flex items-center justify-center gap-1">
              <Clock className="h-3 w-3" />
              Payment ke baad ebooks WhatsApp / Email par share ki jaayengi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
