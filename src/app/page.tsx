"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Award, CheckCircle, Droplets, HelpCircle, Phone, Scissors, Sparkles, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="grid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="King Mostafa's Clips"
          bottomLeftText="Bailey's Crossroads, Virginia"
          bottomRightText="حلاق عربي للرجال"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Premium Arabic Barbershop Experience"
          description="Master craftsmen delivering exceptional grooming and styling services. Your destination for precision cuts, traditional shaves, and authentic Arabic barber expertise."
          tag="4.8★ | 628 Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Appointment", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="blur-reveal"
          carouselItems={[
            {
              id: "carousel-1",              imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186471.jpg",              imageAlt: "King Mostafa's Clips barbershop interior"
            },
            {
              id: "carousel-2",              imageSrc: "http://img.b2bpic.net/free-photo/male-hairdresser-combing-hair-elderly-client-barbershop_23-2148181912.jpg",              imageAlt: "Professional haircut service"
            },
            {
              id: "carousel-3",              imageSrc: "http://img.b2bpic.net/free-photo/man-cuts-his-beard-barbershop_1157-15979.jpg",              imageAlt: "Expert beard grooming"
            },
            {
              id: "carousel-4",              imageSrc: "http://img.b2bpic.net/free-photo/hairstylist-looking-client-mirror_23-2148242870.jpg",              imageAlt: "Traditional wet shave"
            },
            {
              id: "carousel-5",              imageSrc: "http://img.b2bpic.net/free-photo/various-trimmers-dressing-table_107420-94767.jpg",              imageAlt: "Premium waiting area"
            },
            {
              id: "carousel-6",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-using-face-roller-with-copy-space_23-2148696658.jpg",              imageAlt: "Professional grooming products"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          background={{ variant: "rotated-rays-animated" }}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Preserving Tradition, Mastering Craft" }
          ]}
          buttons={[
            { text: "View Services", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Premium Grooming Services"
          description="Each service is a testament to our commitment to excellence. From classic cuts to contemporary styles, we deliver precision grooming tailored to your preferences."
          tag="Expert Services"
          tagIcon={Scissors}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "haircut",              title: "Precision Haircuts",              description: "Expert scissor work and fade techniques. Whether you prefer classic styles or modern cuts, our master barbers deliver flawless results with attention to detail.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/customer-getting-new-haircut-from_23-2148257021.jpg",                imageAlt: "Professional haircut service"
              },
              items: [
                { icon: Scissors, text: "Fade & Taper Cuts" },
                { icon: Zap, text: "Quick Service" }
              ],
              reverse: false
            },
            {
              id: "beard",              title: "Beard Grooming",              description: "Professional beard trimming, shaping, and conditioning. We use premium products to keep your beard looking sharp and feeling soft.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-styling-mustache-client-salon_23-2148181984.jpg",                imageAlt: "Expert beard grooming"
              },
              items: [
                { icon: Sparkles, text: "Premium Conditioning" },
                { icon: CheckCircle, text: "Expert Shaping" }
              ],
              reverse: true
            },
            {
              id: "shave",              title: "Traditional Wet Shave",              description: "Authentic straight razor shave with hot towel treatment. A luxurious experience honoring traditional barber techniques passed down through generations.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/attentive-barber-shaving-beard-client-barber-shop_23-2148181974.jpg",                imageAlt: "Traditional wet shave"
              },
              items: [
                { icon: Droplets, text: "Hot Towel Service" },
                { icon: Award, text: "Straight Razor" }
              ],
              reverse: false
            }
          ]}
          buttons={[
            { text: "Book Your Appointment", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Trusted by Our Community"
          description="Join hundreds of satisfied customers who trust King Mostafa's Clips for their grooming needs."
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Ahmad Hassan",              handle: "@ahmad.h",              testimonial: "Exceptional service! King Mostafa's precision and attention to detail are unmatched. My haircuts have never looked better.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-office-with-digital-tablet_1301-6633.jpg",              imageAlt: "Ahmad Hassan"
            },
            {
              id: "2",              name: "Muhammad Rashid",              handle: "@m.rashid",              testimonial: "The best traditional wet shave I've experienced. Authentic technique with premium care. Highly recommended!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-good-looking-young-man_1262-3489.jpg",              imageAlt: "Muhammad Rashid"
            },
            {
              id: "3",              name: "David Anderson",              handle: "@david.a",              testimonial: "Five stars for customer service and craftsmanship. King Mostafa listens to what you want and delivers perfectly.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/hey-check-this-out-happy-businessman-suit-pointing-fingers-down-smiling-inviting-event-sho_1258-173560.jpg",              imageAlt: "David Anderson"
            },
            {
              id: "4",              name: "James Wilson",              handle: "@james.w",              testimonial: "I've been coming here for years. The consistency and quality are outstanding. This is where real barbers work.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing-studio_176474-70576.jpg",              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="By the Numbers"
          tag="King Mostafa's Clips"
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "628", description: "5-Star Reviews" },
            { id: "2", value: "15+", description: "Years of Excellence" },
            { id: "3", value: "4.8", description: "Average Rating" },
            { id: "4", value: "1000+", description: "Happy Customers" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, booking, and experience."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="smooth"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How do I book an appointment?",              content: "You can book directly through our contact section, call us, or visit us in person at our Bailey's Crossroads location. We accept walk-ins and appointments. For busy periods, we recommend booking in advance."
            },
            {
              id: "2",              title: "What is your average wait time?",              content: "Our average wait time is 10-15 minutes during off-peak hours. During peak times (evenings and weekends), it may be 30-45 minutes. Walk-ins are always welcome, but appointments guarantee minimal wait time."
            },
            {
              id: "3",              title: "Do you offer services for children?",              content: "Absolutely! We're experienced with haircuts for children of all ages. Our barbers are patient and skilled at working with young customers. We recommend calling ahead if you have a first-time appointment."
            },
            {
              id: "4",              title: "What payment methods do you accept?",              content: "We accept cash, all major credit cards, and digital payment methods. Payment is typically made at the end of service. Please ask about current promotions and loyalty programs."
            },
            {
              id: "5",              title: "Is the traditional wet shave worth the extra cost?",              content: "Absolutely! Our traditional wet shave service is a premium experience featuring hot towel treatment, premium lather, and expert straight razor technique. It's therapeutic, authentic, and leaves your skin feeling refreshed."
            },
            {
              id: "6",              title: "What's your cancellation policy?",              content: "We ask for at least 24-hour notice for cancellations. Last-minute cancellations may incur a fee. We understand emergencies happen—just give us a call as soon as possible."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Ready for a Fresh Look?"
          description="Book your appointment today. Visit us or contact us to schedule your session with our master barbers."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "downward-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get in Touch"
          termsText="By submitting, you agree to be contacted about your appointment request."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Services",              items: [
                { label: "Haircuts", href: "#services" },
                { label: "Beard Grooming", href: "#services" },
                { label: "Traditional Shave", href: "#services" },
                { label: "Book Appointment", href: "#contact" }
              ]
            },
            {
              title: "About",              items: [
                { label: "Our Story", href: "#about" },
                { label: "Reviews", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Location",              items: [
                { label: "Bailey's Crossroads, Virginia", href: "#" },
                { label: "Phone", href: "#" },
                { label: "Hours", href: "#" },
                { label: "Directions", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Google Reviews", href: "#" },
                { label: "WhatsApp", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 King Mostafa's Clips. حلاق عربي للرجال"
          bottomRightText="Premium Arabic Barbershop | Bailey's Crossroads, Virginia"
        />
      </div>
    </ThemeProvider>
  );
}