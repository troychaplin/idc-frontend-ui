export interface LeadInProps {
  headerTop?: string
  headerBottom?: string
  text?: string
}

export const LeadIn = ({ headerTop, headerBottom, text }: LeadInProps) => {
  return (
    <div className="grid items-center gap-4 not-prose idc-leadin idc-component md:grid-cols-3 md:gap-10">
      <div>
        {headerTop && <h2 className="block text-base italic not-prose md:text-lg text-idc-black-500">{headerTop}</h2>}
        {headerBottom && (
          <h3 className="block text-2xl italic font-medium not-prose md:text-3xl text-idc-orange-600">
            {headerBottom}
          </h3>
        )}
      </div>
      <div className="md:col-span-2 md:border-l md:border-solid md:border-idc-black-100 md:pl-8">{text && <p className="text-base md:text-lg">{text}</p>}</div>
    </div>
  )
}

LeadIn.displayName = 'LeadIn'
