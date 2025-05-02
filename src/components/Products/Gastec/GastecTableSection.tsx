import CustomTable from '@/components/Comman/CustomTable'
import FAQAccordion from '@/components/Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import { gastecTableData } from '@/data/tableData'
import React from 'react'

const GastecTableSection = () => {
  return (
    <section className='space-y-10 font-dm-sans'>
      <div className='space-y-6'>
        <h4 className='text-[60px] font-medium'>
          Find the Right Tube for Your Needs
        </h4>
        <p className='text-[40px] font-light'>
          Quickly identify the correct gas detection tube.
        </p>
      </div>
      <CustomTable data={gastecTableData} />
    </section>
  )
}

export default GastecTableSection