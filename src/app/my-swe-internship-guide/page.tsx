import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SWE Internship Guide — ali vayani",
  description: "Ali Vayani's guide to landing SWE internships: resume tips, interview prep, and applying fast.",
};

export default function SWEInternshipGuide() {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-60 mt-20 pb-20">
        <div className="max-w-3xl w-full mx-auto">

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Guide to Landing SWE Internships
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 mb-10">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              <span className="text-white font-semibold">TL;DR:</span> build things with real users, make your resume defensible and impact-focused, start LeetCode early, communicate, learn company-specific interview formats, and apply as soon as roles open.
            </p>
          </div>

          <Section title="Intro">
            <p>
              Here&apos;s my guide to landing SWE internships.
            </p>
            <p>
              Just to build some ethos on why I think I&apos;m credible on giving advice for this: this past cycle I was in the trenches. I applied to like 200+ companies, got 5+ interviews, and ended with 4 offers including one at Stripe, the company that processes ~2% of the world&apos;s GDP and the one I&apos;ll be working at this summer.
            </p>
            <p>
              I was also lucky enough to land a freshman year internship at Aramco.
            </p>
            <p>
              I don&apos;t think what I accomplished was due to me being &ldquo;smarter&rdquo; or anything. It was just &ldquo;optimizing&rdquo; for the game that recruiting is. The reason I&apos;m writing this is because I think I&apos;ve learned a lot, and I don&apos;t see the point in gatekeeping this info, especially since I wouldn&apos;t be where I am without the help of so many people.
            </p>
          </Section>

          <Section title="What's the Goal?">
            <p>
              First, before you do anything, what is your goal?
            </p>
            <p>
              The reason this question is important is because it&apos;ll allow you to realize:
            </p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>How much work you need to put in</li>
              <li>How far you are</li>
            </ol>
            <p>
              For example, my goal was to always land the best internship possible. This meant that even when I had 3 offers in my hand, I still applied and still interviewed when I thought the company or opportunity was better.
            </p>
            <p>
              If you&apos;re not as crazy/obsessed as I am, then maybe you can get content faster and not stress as much as I did.
            </p>
          </Section>

          <Section title="Reality">
            <p>
              Now that you have a goal in mind, let me be real.
            </p>
            <p>
              Getting a SWE internship in this market is not easy, but it&apos;s not as hard as people make it out to be. If you&apos;re spending your time doing something — ie: focusing on school, being active in orgs, or just tinkering on the side — you will 100% be fine.
            </p>
            <p>
              I have a lot of friends that didn&apos;t grind the way I did and now they&apos;re interning at Amazon, Patreon, IBM, and other strong companies.
            </p>
            <p>
              I think going to a T10 CS program helps a lot, so even if you&apos;re entering your junior year and you don&apos;t have any formal experience, you&apos;ll be fine as long as you put in the work.
            </p>
          </Section>

          <Section title="What You Need to Do">
            <p>
              Speaking of work, this is the work that I think needs to be done.
            </p>
            <p>I&apos;ll split this into 3 sections:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Resume</li>
              <li>Interview prep</li>
              <li>Applying</li>
            </ol>
          </Section>

          <Section title="Resume">
            <p>
              Your resume is single-handedly the most important thing when applying to internships.
            </p>
            <p>
              It doesn&apos;t matter if you&apos;re a LeetCode god if you can&apos;t land a single interview.
            </p>
            <p>When it comes to building a resume, there are two things that matter:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>The content</li>
              <li>The framing</li>
            </ol>

            <SubSection title="Content">
              <p>
                You ofc need projects and experiences to put on the resume. This can be open source contributions, projects you&apos;ve made, or previous internships/work experience you have.
              </p>
              <p>
                I think the single highest EV thing you can have on your resume is working on something with <strong className="text-white">real users</strong>.
              </p>
              <p>
                This doesn&apos;t mean you need to build something from the ground up. This means you can contribute to open source projects or join orgs.
              </p>
              <Callout>
                UT Registration Plus is a hack istg. Just push one PR to that jawn and you can say you pushed code to a platform with 60k+ users.
              </Callout>
              <p>
                With AI, it&apos;s become so much easier to larp your experiences that one of the only ways to stand out is by shipping to real users.
              </p>
            </SubSection>

            <SubSection title="Framing">
              <p>
                You want to always put your accomplishments in the best light possible.
              </p>
              <p>
                Don&apos;t lie, but also don&apos;t be afraid to put your work in the best light possible. If you had impact, quantify it. If you had users, number them.
              </p>
              <p>
                Numbers and metrics are so important because they <strong className="text-white">SHOW</strong> impact.
              </p>
              <p>My rule is:</p>
              <Callout>
                Every bullet point should be defendable in an interview.
              </Callout>
              <p>
                If you&apos;re asked about a number, be able to explain how you came to that conclusion.
              </p>
              <p>
                Don&apos;t say one of your coworkers/teammates measured it — a friend did this once and the interviewer just stared at him.
              </p>
              <p>
                Also, make sure to use the XYZ format. Google literally tells you to. Search it up if you&apos;re not familiar with it.
              </p>
            </SubSection>

            <SubSection title="Quick Note on Grad Date">
              <p>
                If you&apos;re an underclassman, I&apos;d rec pushing your grad date up a year on your resume. This will give you a competitive edge.
              </p>
              <p>
                Even if you don&apos;t currently plan on graduating early, you definitely can and plans change. I initially never thought I would, but now I&apos;m very heavily considering it if I get the return offer.
              </p>
              <p>
                Also, if you think you can&apos;t, you probably can, but you may have to take a summer semester — your last semester — or switch from the BS → BSA.
              </p>
            </SubSection>
          </Section>

          <Section title="Interview Prep">
            <p>
              Some general advice is do 1-2 LeetCode questions a day.
            </p>
            <p>
              I will say this is sound advice and def do that. LeetCode sadly isn&apos;t something you can cram like that, so start early and be consistent.
            </p>
            <p>
              I&apos;d highly recommend going through the NeetCode roadmap or solving the Blind 75 at the minimum. These are questions that have patterns that consistently repeat.
            </p>
            <p>
              At the end of the day, LeetCode is just pattern recognition with a twist, so the more questions the better.
            </p>

            <SubSection title="LeetCode Is Not the Only Format">
              <p>Now onto some truth.</p>
              <p>
                LeetCode interviews are not the only type of interviews. Out of all the interviews I&apos;ve done, only 2 of them were LeetCode-style.
              </p>
              <p>
                This doesn&apos;t mean LeetCode is obsolete and you don&apos;t need to do it. This just means it&apos;s not the only other format.
              </p>
              <p>
                Some companies ask pure conceptual questions and others mimic real programming. These questions are harder to prep for, so your best bet is crowdsourcing info.
              </p>
              <p>
                Most larger tech companies do LeetCode because it&apos;s easy for them, so practice.
              </p>
              <Callout>
                Bloomberg has like 5 rounds of LeetCode iirc.
              </Callout>
              <p>
                With that being said, if you want to be OD and a degenerate like me, then I&apos;d recommend joining the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">cscareerdev</code> Discord server and looking for people who&apos;re interviewing at the same company as you and asking for their experiences.
              </p>
              <p>
                You&apos;d be surprised at how much you can learn and how much of an edge this can provide.
              </p>
              <p>
                I&apos;ve also heard interview formats are subject to change this year with the addition of AI tools. I know I&apos;ve heard Meta is switching things up, and I know Amazon asked some people some weird AI prompting questions.
              </p>
            </SubSection>

            <SubSection title="Communicating">
              <p>One thing that will always be consistent though is communicating.</p>
              <p>
                No matter the technical interview, always explain your thought process. There should never be more than 5 seconds of silence. You should always be saying what&apos;s going through your mind.
              </p>
              <p>
                This is partially why I landed Stripe despite not full solving a technical round.
              </p>
            </SubSection>

            <SubSection title="Quick Note on Behavioral">
              <p>STAR method is supreme.</p>
              <p>
                This is the only thing you need to know for behavioral, plus stories/experiences. Use ChatGPT or a friend to prep beforehand.
              </p>
              <p>
                ChatGPT is also really good at cooking up practice questions. I&apos;d just walk around my apt reciting answers out loud.
              </p>
            </SubSection>
          </Section>

          <Section title="Applying">
            <p>Okay, now onto actually applying to the job.</p>
            <p>Applying is easy, but applying fast isn&apos;t.</p>
            <p>
              Nowadays, each job is getting thousands of applications. This means there are thousands of people applying for a position that will only be given to a couple hundred people at most, and that&apos;s for a larger company.
            </p>
            <p>
              One of the only ways to get your resume looked at is applying as soon as possible.
            </p>
            <p>
              I think for each interview I got, I had applied to the role within 2-3 hours of it dropping, if not faster. I remember literally applying to jobs in a movie theater.
            </p>
            <p>
              The way I went about it was just spam checking zero2sudo&apos;s IG stories and applying ASAP.
            </p>
            <p>
              Another method you can do is search for SWE internships on LinkedIn, filter by &ldquo;past 24hrs,&rdquo; and change the number <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">84000</code> in the URL to <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">3600</code>. This changes the filter to past 1hr instead of 24hrs.
            </p>
          </Section>

          <Section title="Bonus: Referrals/Networking">
            <p>Some very generic advice people give out is to network or get referrals.</p>
            <p>Out of all the interviews I got, only one of them came from a referral.</p>
            <p>
              Referrals are really common nowadays because of how large the pools are, but I think they&apos;re useful in some specific edge cases.
            </p>
            <p>
              I got my freshman year internship at Aramco through a referral. The pool of people that could refer was small. Because of this, I think my referral mattered so much more because not many people had the opportunity of getting one.
            </p>
            <p>This was due to it being Aramco Americas, a small American branch for a Saudi company.</p>
            <p>
              I&apos;ve also heard companies like Stripe &amp; Databricks fast track your application if you get referred. There just aren&apos;t many people to give referrals, so they get valued more.
            </p>
            <p>
              A way to determine if a referral is helpful is just by looking at company size. Stripe and Databricks have ~10k employees compared to Google&apos;s 200k or Amazon&apos;s 350k.
            </p>
            <p>If the connection is harder to make, then it&apos;s worth more.</p>
          </Section>

          <Section title="The End">
            <p>I know this might sound like a lot and I&apos;m not gonna lie to you, it is a lot to do.</p>
            <p>
              What I do want you to know tho is it&apos;s so worth the hard work and effort.
            </p>
            <p>
              You get so many cool opportunities, you get to meet so many cool people, and on top of it you get paid to learn.
            </p>
            <p>
              If you cared enough to read about all of that, then I&apos;m confident you will 100% be fine.
            </p>
            <p>
              Good luck with everything, keep your head up, and just have faith everything will work out because it always does, even if it doesn&apos;t seem like it at first.
            </p>
            <p>
              If you ever need help, feel free to reach out. Always down to look at resumes, help with projects, or run mock interviews.
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">{title}</h2>
      <div className="w-full h-px bg-white/20 mb-5" />
      <div className="flex flex-col gap-4 text-white/75 text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-2">
      <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">{title}</h3>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-white/30 pl-4 py-1 text-white/60 italic">
      {children}
    </blockquote>
  );
}
