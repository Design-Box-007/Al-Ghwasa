import images from '@/data/assets'
import React from 'react'

const Mx33 = () => {
  return (
    <section className="mx-auto space-y-6 px-4 text-base leading-relaxed text-gray-800">
      <div className="space-y-6 text-base leading-7 text-gray-800">
        <p>
          Reliable technology is essential to every business—and that includes technology that safeguards employee health. The <strong className="font-semibold text-black">MX3 Hydration Testing System</strong> makes it easy to monitor and manage hydration levels, helping you protect your team from heat-related risks while supporting long-term wellbeing and productivity.
        </p>
        <p className="text-xl font-semibold text-black">Lab-Quality Testing, Anytime, Anywhere</p>
        <p>
          The <strong className="font-semibold text-black">MX3 LAB Pro</strong> is a portable, handheld device that delivers lab-accurate hydration readings on the spot. It allows organizations to routinely check employee hydration status and implement targeted rehydration plans—reducing the risk of heat stress and supporting safe, efficient operations.
        </p>
        <p className="text-xl font-semibold text-black">Track Individual Progress and Team Trends</p>
        <p>
          MX3 offers a cost-effective, noninvasive solution for managing heat-related health risks. Through the integrated <strong className="font-semibold text-black">MX3 App and Dashboard</strong>, each hydration test is securely stored in an employee profile. Managers can monitor hydration trends in real time and make informed decisions to improve safety protocols and team performance.
        </p>

        <div className="h-[700px] overflow-hidden rounded-lg">
          <img src={images.WorkSpaceSafety2} alt={"workspace safety"} className="rounded-lg object-top object-cover h-full w-full" />
        </div>

        <p className="text-xl font-semibold text-black">Built for Safety, Trusted by Teams</p>
        <p>
          “The MX3 HTS unit is simple to operate, less intrusive than traditional methods, and delivers fast, reliable results. The App provides clear visual feedback, helping users easily track their current hydration levels along with past data.”
        </p>
        <p className="text-xl font-semibold text-black">MX3: Making Hydration a Core Part of Worker Safety</p>
      </div>
    </section>

  )
}

export default Mx33