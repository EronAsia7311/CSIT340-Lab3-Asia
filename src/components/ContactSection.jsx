import SectionHeading from './SectionHeading.jsx';
import ContactLink from './ContactLink.jsx';

function ContactSection() {
    return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="School Email"
          href="eron.asia@cit.edu"
          text="eron.asia@cit.edu"
        />
        <ContactLink
          label="Personal Email"
          href="eronasia@gmail.com"
          text="eronasia@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/EronAsia7311"
          text="github.com/EronAsia7311"
        />
      </ul>
    </section>
    );
}

export default ContactSection