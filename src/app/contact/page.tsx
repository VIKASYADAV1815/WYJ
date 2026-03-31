import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | WYJ Logistics LLC",
  description: "Get in touch with WYJ Logistics LLC for a free residential remodeling estimate in Atlanta.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 overflow-x-hidden">
      <PageHeader 
        title="Start Your Project" 
        description="Ready to elevate your home? We're here to bring your vision to life with uncompromising quality."
        bgImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <FadeIn direction="right" className="flex flex-col justify-center">
              <h2 className="font-sans uppercase text-xs tracking-[0.3em] font-light text-amber-600 mb-4">Get In Touch</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium uppercase tracking-widest text-zinc-900 mb-12 leading-tight">Let&apos;s Discuss Your Vision</h3>
              
              <div className="space-y-10 mb-16">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-none flex items-center justify-center shrink-0 mr-6 group-hover:bg-amber-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-amber-500 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-2">Office Location</h4>
                    <p className="text-zinc-600 leading-relaxed font-light">
                      WYJ Logistics LLC<br />
                      1205 Shoreham Dr<br />
                      Atlanta, GA 30349
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-none flex items-center justify-center shrink-0 mr-6 group-hover:bg-amber-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-2">Phone</h4>
                    <p className="text-zinc-600 font-light">
                      <a href="tel:4043889408" className="hover:text-amber-600 transition-colors">
                        404-388-9408
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-none flex items-center justify-center shrink-0 mr-6 group-hover:bg-amber-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-amber-500 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-2">Email</h4>
                    <p className="text-zinc-600 font-light">
                      <a href="mailto:wiljent9@aol.com" className="hover:text-amber-600 transition-colors">
                        wiljent9@aol.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-none flex items-center justify-center shrink-0 mr-6 group-hover:bg-amber-500 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-amber-500 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-2">Business Hours</h4>
                    <p className="text-zinc-600 leading-relaxed font-light">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="bg-zinc-900 p-10 border-l-4 border-amber-500">
                <p className="font-bold tracking-widest text-zinc-400 uppercase text-sm mb-2">Owned & Operated by</p>
                <p className="text-3xl font-black text-white">Wiley Jones</p>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-white p-10 md:p-12 shadow-2xl border border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -z-10" />
                <h3 className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-widest text-zinc-900 mb-8 leading-tight">Send a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="h-[600px] w-full bg-zinc-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.027732877964!2d-84.49883502353142!3d33.63050184000355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4e2c0e86b2bb1%3A0x6442cfd65abf4705!2s1205%20Shoreham%20Dr%2C%20Atlanta%2C%20GA%2030349!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}