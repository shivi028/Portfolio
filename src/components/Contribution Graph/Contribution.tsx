import React from 'react'
import Image from 'next/image'

const Contribution = () => {
  return (
    <>
      <div className='min-h-[70vh]'>
        <div>
        <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=shivi028"
            alt="GitHub Contribution Graph"
            width={312}
            height={257}
          />
        </div>

      </div>
    </>
  )
}

export default Contribution
