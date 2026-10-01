import SectionHeading from './SectionHeading.jsx';
import Fact from './Fact.jsx';

function AboutSection() {
  return (
<section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
       I am a third-year student at Cebu Institute of Technology - University. 
       I was originally a Computer Science student, but I transferred to 
       Information Technology because I had a hard time with Computer 
       Science. I still struggle with programming, but it feels great when 
       it actually runs well.
      </p>
        <Fact label="Course" value="BS Information Technology"/>
        <Fact label="Year level" value="Third Year"/>
        <Fact label="School" value="Cebu Institute of Technology – University"/>
        <Fact label="Based in" value="Cebu City"/>
    </section>
    );
}

export default AboutSection