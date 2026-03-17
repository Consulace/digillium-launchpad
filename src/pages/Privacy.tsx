import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Helmet } from "react-helmet-async";
 
const Privacy = () => {
  return (
<Layout>
      {/* SEO + SMO */}
<Helmet>
<title>Privacy Policy | Digillium</title>
<meta
          name="description"
          content="Learn how Digillium collects, uses, and protects your personal data."
        />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.Digillium.in/privacy" />
 
        {/* Open Graph */}
<meta property="og:title" content="Privacy Policy | Digillium" />
<meta
          property="og:description"
          content="Understand how your personal data is handled and protected."
        />
<meta property="og:url" content="https://www.Digillium.in/privacy" />
<meta property="og:type" content="website" />
 
        {/* Twitter */}
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Privacy Policy | Digillium" />
<meta
          name="twitter:description"
          content="How Digillium manages your data securely."
        />
 
        {/* Structured Data */}
<script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.Digillium.in/privacy",
          })}
</script>
</Helmet>
 
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />
 
      <section className="section-padding bg-card">
<div className="container-wide max-w-4xl">
<div className="space-y-10 text-muted-foreground">
 
            {/* Intro */}
<div className="animate-fade-in-up">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Overview
</h2>
<p>
                We respect your privacy and are committed to handling personal data responsibly
                and in accordance with applicable laws. This policy explains what data we collect,
                how we use it, and your rights regarding your data. :contentReference[oaicite:1]{index=1}
</p>
</div>
 
            {/* Data Collection */}
<div className="animate-fade-in-up delay-100">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Personal Data We Collect
</h2>
<ul className="list-disc pl-6 space-y-2">
<li>Name, email, phone number, and contact details</li>
<li>Demographic information like date of birth and gender</li>
<li>Professional and employment-related information</li>
<li>Financial and payment-related data</li>
<li>Device, usage, and system interaction data</li>
</ul>
<p className="mt-2">
                We may also collect data from third-party sources where necessary. :contentReference[oaicite:2]{index=2}
</p>
</div>
 
            {/* Usage */}
<div className="animate-fade-in-up delay-200">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                How We Use Your Data
</h2>
<ul className="list-disc pl-6 space-y-2">
<li>To provide and manage our services</li>
<li>To fulfill legal and regulatory requirements</li>
<li>For business operations and internal administration</li>
<li>To improve our services and user experience</li>
</ul>
</div>
 
            {/* Sharing */}
<div className="animate-fade-in-up delay-300">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Sharing
</h2>
<p>
                We only share personal data with authorized parties who have a legitimate need,
                including partners, service providers, and affiliates, while ensuring compliance
                with privacy laws. :contentReference[oaicite:3]{index=3}
</p>
</div>
 
            {/* Security */}
<div className="animate-fade-in-up delay-400">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Security
</h2>
<p>
                We implement appropriate technical and organizational measures to protect your
                personal data, including secure servers and encryption where required. :contentReference[oaicite:4]{index=4}
</p>
</div>
 
            {/* Retention */}
<div className="animate-fade-in-up delay-500">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Retention
</h2>
<p>
                Your data is retained only as long as necessary to fulfill the purposes for which
                it was collected and to comply with legal obligations. :contentReference[oaicite:5]{index=5}
</p>
</div>
 
            {/* Rights */}
<div className="animate-fade-in-up delay-600">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Your Rights
</h2>
<ul className="list-disc pl-6 space-y-2">
<li>Access and review your personal data</li>
<li>Request correction or deletion</li>
<li>Restrict or object to processing</li>
<li>Withdraw consent at any time</li>
</ul>
<p className="mt-2">
                These rights may vary depending on applicable laws such as GDPR. :contentReference[oaicite:6]{index=6}
</p>
</div>
 
            {/* Transfer */}
<div className="animate-fade-in-up delay-700">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Transfers
</h2>
<p>
                Your data may be transferred and stored across different locations, including
                outside your jurisdiction, with adequate protection measures in place. :contentReference[oaicite:7]{index=7}
</p>
</div>
 
            {/* Contact */}
<div className="animate-fade-in-up delay-800">
<h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Us
</h2>
<p>
                Denouer Digillium <br />
                2nd Floor, 35/5 Langford Road, <br />
                Shanti Nagar, Bengaluru – 560025 <br />
                Email: contact@Digillium.in
</p>
</div>
 
          </div>
</div>
</section>
</Layout>
  );
};
 
export default Privacy;
