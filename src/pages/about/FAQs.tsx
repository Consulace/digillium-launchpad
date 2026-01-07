import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you guarantee measurable results?",
    answer:
      "Yes. Every initiative is aligned to defined KPIs. We establish clear metrics at the outset and report on them throughout the engagement. Our focus is always on delivering outcomes you can measure and report to stakeholders.",
  },
  {
    question: "Do you manage end-to-end execution?",
    answer:
      "Yes. From strategy development to execution and reporting, we handle the entire process. You get a single point of contact and complete visibility into all activities, eliminating the need to coordinate multiple vendors.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We serve a diverse range of industries including Technology, SaaS, BFSI (Banking, Financial Services & Insurance), Manufacturing, Real Estate, and Enterprise organizations. Our strategies are customized to each industry's unique challenges and opportunities.",
  },
  {
    question: "How do you ensure accountability?",
    answer:
      "We operate with clear ownership structures and regular reporting cadences. Every project has defined success metrics, milestone reviews, and transparent communication channels. We take responsibility for outcomes, not just deliverables.",
  },
  {
    question: "Can you scale campaigns across regions?",
    answer:
      "Absolutely. We have experience executing campaigns across multiple geographies with local market expertise. Our scalable execution model allows us to grow with your business needs while maintaining consistent quality.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "We combine strategy-first thinking with emerging technologies like AI and ML, backed by strong data analytics. Unlike traditional agencies focused on activities, we're committed to measurable business outcomes and take accountability for results.",
  },
];

const FAQs = () => {
  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about working with Digillium"
      />

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
