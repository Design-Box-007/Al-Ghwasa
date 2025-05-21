import images from '@/data/assets'
import React from 'react'

const Mx32 = () => {
  return (
    <section className="mx-auto space-y-6 px-4 text-base leading-relaxed text-gray-800">
      <div className="space-y-6 text-base leading-7 text-gray-800">
        <p>
          In the military, reliable technology is non-negotiable—and that applies just as much to health monitoring as it does to operations. The <strong className="font-semibold text-black">MX3 Hydration Testing System (HTS)</strong> delivers accurate, actionable diagnostics that meet the high standards demanded by military personnel and leadership.
        </p>
        <p className="text-xl font-semibold text-black">Real-Time Hydration Testing, Anywhere</p>
        <p>
          The <strong className="font-semibold text-black">MX3 LAB Pro</strong> equips warfighters and military staff with a compact, handheld tool that delivers lab-grade hydration data instantly. With routine testing, personnel can prevent heat-related illnesses and develop targeted rehydration strategies that protect health and enhance operational performance—whether in training or active duty.
        </p>
        <p className="text-xl font-semibold text-black">Built for the Demands of Military Service</p>
        <p>
          {"Operating in extreme conditions requires peak physical readiness and safety. MX3 provides the only comprehensive system designed to measure critical hydration metrics in real time. It's a vital resource for any branch committed to protecting its people while maximizing capability in the field."}
        </p>

        <div className="h-[700px] overflow-hidden rounded-lg">
          <img src={images.Military2} alt={"Military"} className="rounded-lg object-top object-cover h-full w-full" />
        </div>
        <p className="text-xl font-semibold text-black">MX3: Lab-Quality Data, Deployed Anywhere</p>
        <p>
          With MX3, hydration levels can be assessed on demand and tracked over time. Leaders gain visibility into the dehydration risk and electrolyte loss of individual soldiers and units, enabling informed, timely interventions. Over time, data insights can help refine mission prep and improve performance outcomes.
        </p>
        <p className="text-xl font-semibold text-black">Protecting Health in Every Environment</p>
        <p>
          Heat-related injuries are an increasing concern across military environments. Whether in training exercises or deployed operations, dehydration should never compromise a service member’s ability to complete the mission. MX3 proudly supports the armed forces by providing the tools needed to maintain optimal hydration, safety, and readiness—anytime, anywhere.
        </p>
      </div>
    </section>
  )
}

export default Mx32