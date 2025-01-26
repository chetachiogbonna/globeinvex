import { cn } from '@/lib/utils'
import Image from 'next/image'

function ClientsSlider({ repeat }: { repeat: boolean }) {
  return (
    <div className={cn("", { "mt-[60px] mb-[90px]": repeat })}>
      <div className="flex gap-2 justify-center items-center">
        <Image 
          src="/images/1.png"
          alt="company"
          width={200}
          height={200}
        />
        <Image 
          src="/images/2.png"
          alt="company"
          width={200}
          height={200}
        />
        <Image 
          src="/images/3.png"
          alt="company"
          width={200}
          height={200}
        />
        <Image 
          src="/images/4.png"
          alt="company"
          width={200}
          height={200}
        />
        <Image 
          src="/images/5.png"
          alt="company"
          width={200}
          height={200}
        />

        {repeat && (
          <>
            <Image 
              src="/images/1.png"
              alt="company"
              width={200}
              height={200}
            />
            <Image 
              src="/images/2.png"
              alt="company"
              width={200}
              height={200}
            />
            <Image 
              src="/images/3.png"
              alt="company"
              width={200}
              height={200}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ClientsSlider