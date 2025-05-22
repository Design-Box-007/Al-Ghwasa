import images from '@/data/assets';
import React from 'react';

const Mx31 = () => {
  return (
    <section className="mx-auto space-y-6 px-4 text-base leading-relaxed text-gray-800">
      <p>
        <strong className="font-semibold text-gray-900">
          Hydration is not just important—it’s essential.
        </strong>{' '}
        Even a small fluid loss of just 1–2% of body mass can impair physical and cognitive
        performance. Effects include reduced muscular strength and endurance, quicker onset
        of fatigue, and impaired decision-making—all of which can hinder athletic output and
        increase the risk of injury.
      </p>

      <p>
        During intense exercise, sweat loss often exceeds the body’s ability to absorb fluids,
        meaning athletes who begin a session even mildly dehydrated are at greater risk for
        rapid performance decline. That’s why{' '}
        <strong className="font-semibold text-gray-900">
          routine hydration assessment
        </strong>{' '}
        is crucial—not only for identifying athletes at risk, but also for crafting personalized
        hydration strategies that support health, safety, and peak performance.
      </p>

      <p className="text-xl font-bold text-gray-900">
        Introducing the MX3 Hydration Testing System (HTS)
      </p>

      <p>
        The <strong className="font-semibold text-gray-900">MX3 LAB Pro</strong> is a handheld,
        lab-quality hydration testing device that makes routine hydration assessment simple,
        fast, and non-invasive. Designed for coaches, trainers, and sports scientists, MX3
        allows you to accurately assess hydration status anytime and anywhere—before, during,
        and after training or competition.
      </p>

      <p>
        Using <strong className="font-semibold text-gray-900">saliva osmolarity measurements</strong>, MX3
        delivers immediate, actionable results that eliminate guesswork and enable
        individualized rehydration plans on the spot. The system pairs seamlessly with the{' '}
        <strong className="font-semibold text-gray-900">MX3 App and Dashboard</strong>, making it easy
        to record, track, and analyze hydration data for individuals and teams of any size.
      </p>

      <p className="text-xl font-bold text-gray-900">Smarter Testing. Better Results.</p>

      <p>
        MX3 revolutionizes hydration monitoring by offering both{' '}
        <strong className="font-semibold text-gray-900">hydration status testing</strong> and{' '}
        <strong className="font-semibold text-gray-900">sweat sodium testing</strong>, which
        estimates electrolyte loss. Together, these tools provide a complete picture of an
        athlete’s hydration needs. The hydration test tells athletes how much to drink, while
        the sweat sodium test reveals what type of fluids (e.g., electrolyte composition) are
        most effective for replenishment.
      </p>

      <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
        <img src={images.Athletic2} alt={"Atheletic"} className="rounded-lg object-top object-cover h-full w-full" />
      </div>

      <p className="text-xl font-bold text-gray-900">
        Personalized Hydration Strategies for Elite Athletes
      </p>

      <p>
        With immediate feedback and historical data tracking, athletes and teams can fine-tune
        their hydration strategies to enhance training, recovery, and competition performance.
        By using MX3, coaches can tailor fluid intake to individual needs, helping athletes
        train smarter and stay healthier.
      </p>

      <p className="font-semibold text-gray-900">
        Top-performing teams and organizations—including the NCAA, MLB, NBA, NFL, IRONMAN Team
        Tri-Alliance, and Melbourne Midday Milers—trust MX3 to power their hydration strategies.
      </p>

      <p className="text-xl font-bold text-gray-900">Why Choose MX3?</p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className="font-semibold text-gray-900">Portable, lab-quality testing</strong>—
          anytime, anywhere
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Non-invasive and fast</strong>—ideal for
          routine use
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Immediate results</strong>—no waiting, no
          lab needed
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Team-ready dashboard and app</strong>—track
          individuals or entire rosters
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Dual testing capabilities</strong>—
          hydration status and electrolyte loss
        </li>
      </ul>

      <p className="text-xl font-bold text-gray-900">Put the Power of a Lab in Your Hands</p>

      <p>
        Hydration monitoring has never been easier or more effective. With the MX3 LAB Pro, you
        have everything you need to keep athletes safe, healthy, and performing at their best—on
        the field, in the gym, or anywhere performance matters.
      </p>

      <p>
        <strong className="font-semibold text-gray-900">
          Ready to improve hydration and performance for your athletes?
        </strong>
        <br />
        <a
          href="https://chatgpt.com/"
          className="text-teal-600 underline hover:text-teal-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us today
        </a>{' '}
        to learn more about MX3’s hydration testing solutions.
      </p>
    </section>
  );
};

export default Mx31;
