
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-shark-darkBlue mb-6">Privacy Policy</h1>
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: May 5, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Introduction</h2>
              <p className="mb-4">Shark Duct Cleaning ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Information We Collect</h2>
              <p className="mb-4">We collect several types of information from and about users of our website, including information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                <li>That is about you but individually does not identify you, such as your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">How We Collect Your Information</h2>
              <p className="mb-4">We collect this information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Directly from you when you provide it to us, such as when you fill out contact forms or request services.</li>
                <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To present our website and its contents to you;</li>
                <li>To provide you with information, products, or services that you request from us;</li>
                <li>To fulfill any other purpose for which you provide it;</li>
                <li>To provide you with notices about your account;</li>
                <li>To carry out our obligations and enforce our rights;</li>
                <li>To notify you about changes to our website or any products or services we offer;</li>
                <li>In any other way we may describe when you provide the information;</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Disclosure of Your Information</h2>
              <p className="mb-4">We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To contractors, service providers, and other third parties we use to support our business;</li>
                <li>To fulfill the purpose for which you provide it;</li>
                <li>For any other purpose disclosed by us when you provide the information;</li>
                <li>With your consent;</li>
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request;</li>
                <li>To enforce or apply our terms of use and other agreements;</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Shark Duct Cleaning, our customers, or others.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Your Choices About Information</h2>
              <p className="mb-4">You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Changes to Our Privacy Policy</h2>
              <p className="mb-4">It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Contact Information</h2>
              <p className="mb-4">To ask questions or comment about this privacy policy and our privacy practices, contact us at: (877) 652-4343</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
