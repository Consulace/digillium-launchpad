import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";

const Terms = () => {
return (
<Layout>
    <PageHeader title="Terms & Conditions" subtitle="Please read these terms carefully before using our services" />

    <section className="section-padding bg-card">
        <div className="container-wide max-w-4xl">
            <div className="space-y-10 text-muted-foreground">
                {/* Introduction */}
                <div className="animate-fade-in-up">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Introduction
                    </h2>
                    <p>
                        Welcome to MakeMyCampaign. By accessing or using our website and services,
                        you agree to be bound by these Terms and Conditions. If you do not agree,
                        please do not use our services.
                    </p>
                </div>

                {/* Services */}
                <div className="animate-fade-in-up delay-100">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Services
                    </h2>
                    <p>
                        We provide marketing, campaign management, and related digital services.
                        All services are subject to availability and may be modified or discontinued
                        at any time without notice.
                    </p>
                </div>

                {/* User Responsibilities */}
                <div className="animate-fade-in-up delay-200">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        User Responsibilities
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You agree to provide accurate and complete information.</li>
                        <li>You will not misuse the platform or engage in unlawful activities.</li>
                        <li>You are responsible for maintaining confidentiality of your data.</li>
                    </ul>
                </div>

                {/* Payments */}
                <div className="animate-fade-in-up delay-300">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Payments & Billing
                    </h2>
                    <p>
                        All payments must be made as per agreed terms. Failure to pay may result
                        in suspension or termination of services.
                    </p>
                </div>

                {/* Intellectual Property */}
                <div className="animate-fade-in-up delay-400">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Intellectual Property
                    </h2>
                    <p>
                        All content, branding, and materials provided are the intellectual property
                        of MakeMyCampaign and may not be reused without permission.
                    </p>
                </div>

                {/* Limitation */}
                <div className="animate-fade-in-up delay-500">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Limitation of Liability
                    </h2>
                    <p>
                        We are not liable for any indirect, incidental, or consequential damages
                        arising from use of our services.
                    </p>
                </div>

                {/* Termination */}
                <div className="animate-fade-in-up delay-600">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Termination
                    </h2>
                    <p>
                        We reserve the right to terminate or suspend access to our services
                        at our sole discretion, without prior notice.
                    </p>
                </div>

                {/* Changes */}
                <div className="animate-fade-in-up delay-700">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Changes to Terms
                    </h2>
                    <p>
                        We may update these Terms from time to time. Continued use of the
                        service constitutes acceptance of the updated terms.
                    </p>
                </div>

                {/* Contact */}
                <div className="animate-fade-in-up delay-800">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Contact Us
                    </h2>
                    <p>
                        If you have any questions about these Terms, please contact us
                        through our official website.
                    </p>
                </div>

            </div>
        </div>
    </section>
</Layout>
);
};

export default Terms;
