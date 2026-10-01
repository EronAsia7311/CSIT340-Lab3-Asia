import SectionHeading from './SectionHeading.jsx';
import TimelineItem from './TimelineItem.jsx';

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="What I have done." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2022 - Present"
          title=" First to Current Level College"
          place="Cebu Institute of Technology – University"
          description="Currently taking up BS Information Technology. I am currently in my third year of college."
        />
        <TimelineItem
          period="2021 – 2022"
          title="First Year College"
          place="Cebu Institute of Technology – University"
          description="Attempted to take up BS Computer Science, but I couldnt finish."
        />
        <TimelineItem
          period="2019 - 2021"
          title="Senior High School"
          place="University of Cebu – Lapu-Lapu and Mandaue"
          description="Took up a Computer Science strand to try to get used to programming."
        />
      </ol>
    </section>
    );
}

export default ExperienceSection