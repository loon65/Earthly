import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earthly-text/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-earthly-bg">
          <h2 className="text-2xl font-bold text-earthly-text">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-earthly-text hover:bg-stone-200/50 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto prose prose-stone max-w-none text-stone-600">
          <p className="text-sm text-stone-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">1. Introduction</h3>
          <p>
            Welcome to Earthly. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, and operating system.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and products.</li>
          </ul>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>To process and deliver your order.</li>
            <li>To manage our relationship with you (including notifying you about changes to our terms or privacy policy).</li>
            <li>To improve our website, products/services, marketing, customer relationships and experiences.</li>
          </ul>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. 
            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">5. Third-Party Links</h3>
          <p>
            This website may include links to third-party websites, plug-ins and applications (such as WhatsApp). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. 
            We do not control these third-party websites and are not responsible for their privacy statements.
          </p>

          <h3 className="text-earthly-text font-bold text-lg mt-6 mb-2">6. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us via our WhatsApp support channel.
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-100 bg-earthly-bg flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-earthly-green text-white rounded-lg hover:bg-earthly-text transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};