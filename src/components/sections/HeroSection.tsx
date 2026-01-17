import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Calendar, Clock, Globe, Video, Award, Star } from 'lucide-react';
import { ScrollZodiac } from '@/components/sections/ScrollZodiac';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#04343b] overflow-hidden">
      <div
    className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
    style={{ backgroundImage: "url('/bg3.jpg')" }}
    aria-hidden="true"
  />

      <ScrollZodiac />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">✧</div>
        <div className="absolute top-40 right-20 text-4xl">☆</div>
        <div className="absolute bottom-40 left-20 text-5xl">⚝</div>
        <div className="absolute top-60 right-40 text-3xl">✦</div>
        <div className="absolute bottom-20 right-10 text-6xl">✧</div>
      </div>

      <div className="container relative pt-8 pb-20 md:pt-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>Live 2-Day Masterclass</span>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-philosopher font-bold leading-tight">
              Aapka Naam Aapka{' '}
              <span className="text-yellow-400">Future Bana Raha</span> Hai Ya{' '}
              <span className="text-yellow-400">Bigaad Raha Hai ?</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl font-semibold text-white/90">
              You are doing everything right, but still feel stuck?
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
             Learn if your name's frequency is helping or blocking your financial and love life success
            </p>

            {/* Webinar Details */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Date</p>
                  <p className="font-semibold text-sm">16th & 17th Jan</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Time</p>
                  <p className="font-semibold text-sm">8 PM - 10 PM</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <Globe className="h-5 w-5 text-yellow-400" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Language</p>
                  <p className="font-semibold text-sm">Hindi</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <Video className="h-5 w-5 text-yellow-400" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Venue</p>
                  <p className="font-semibold text-sm">Online (Zoom)</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            {/* Trust Badges */}
<div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
  
  {/* TEDx Logo */}
  <div className="flex items-center  px-3 py-2 rounded-lg">
    <img
      src="/ted.png"
      alt="TEDx Speaker"
      className="h-6 md:h-7 w-auto object-contain"
      loading="lazy"
    />
  </div>

  {/* ISO Logo */}
  <div className="flex items-center  px-3 py-2 rounded-lg">
    <img
      src="/iso.png"
      alt="ISO 9001 Certified"
      className="h-12 md:h-7 w-auto object-contain"
      loading="lazy"
    />
  </div>

</div>

          </div>

          {/* Right - Form Card */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-md mx-auto">
              <div className="text-center mb-4">
                

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Reserve Your Spot Now
                </h2>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-lg">₹999</span>
                  <span className="text-3xl font-extrabold text-[#04343B]">₹99</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-semibold">
                    90% OFF
                  </span>
                </div>

               <div className="flex justify-center">
  <CountdownTimer />
</div>
              </div>

              <LeadCaptureForm />

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
