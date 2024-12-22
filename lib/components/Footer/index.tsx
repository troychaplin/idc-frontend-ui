import { Columns } from '../Columns'

export const Footer = () => {
  return (
    <footer className="idc-footer bg-idc-blue-700">
      <div className="px-6 py-6 idc-footer-details md:px-8 md:py-10">
        <Columns cols="1/3">
          <Columns.Content>
            <svg
              className="idc-logo flex-none w-[111px] md:w-[155px] h-[36px] md:h-[50px] fill-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 155 50"
            >
              <path d="M52.151 9.412h2.029v8.864H52.15V9.412Zm3.764 0h2.015l3.85 5.946h.025V9.412h1.898v8.864h-2.026l-3.84-5.934h-.022v5.934h-1.899V9.412Zm11.473 1.639h-2.763V9.413h7.556v1.639h-2.765v7.225h-2.03l.001-7.225.001-.001ZM73.1 9.413h6.898v1.639h-4.87v1.9h4.471v1.514h-4.472v2.171h4.974v1.64H73.1V9.412v.001Zm8.409 0h4.975c1.653 0 2.698 1.106 2.698 2.445 0 1.044-.438 1.825-1.46 2.222v.025c.996.25 1.281 1.18 1.346 2.073.038.559.024 1.603.386 2.098h-2.029c-.246-.558-.219-1.414-.322-2.121-.143-.932-.517-1.342-1.538-1.342h-2.027v3.463h-2.03V9.412v.001Zm2.03 4.009h2.22c.905 0 1.395-.371 1.395-1.266 0-.856-.49-1.229-1.395-1.229h-2.22v2.495Zm7.237-4.009h2.014l3.85 5.945h.026V9.412h1.898v8.864h-2.027L92.7 12.342h-.025v5.934h-1.9V9.412v.001Zm12.091 0h2.08l3.45 8.863h-2.106l-.697-1.974h-3.45l-.723 1.974h-2.053l3.5-8.864h-.001v.001Zm-.193 5.437h2.391l-1.163-3.252h-.026l-1.202 3.251v.001Zm7.506-3.8h-2.766V9.414h7.558v1.639h-2.764v7.225h-2.027V11.05h-.001Zm5.71-1.637h2.03v8.864h-2.03V9.413Zm7.885-.21c2.855 0 4.534 2.048 4.534 4.678 0 2.558-1.68 4.606-4.534 4.606-2.856 0-4.534-2.049-4.534-4.606 0-2.631 1.679-4.68 4.534-4.68v.002Zm0 7.645c1.821 0 2.505-1.488 2.505-2.966 0-1.55-.684-3.04-2.504-3.04-1.821 0-2.506 1.489-2.506 3.04 0 1.477.684 2.967 2.506 2.967h-.001Zm5.863-7.435h2.015l3.851 5.946h.025V9.413h1.899v8.864H135.4l-3.836-5.934h-.026v5.934h-1.9V9.413Zm12.092 0h2.08l3.449 8.864h-2.106l-.697-1.974h-3.45l-.721 1.974h-2.055l3.5-8.864Zm-.193 5.437h2.39l-1.163-3.252h-.026l-1.202 3.252h.002-.001Zm6.518-5.437h2.028v7.224h4.495v1.638h-6.523V9.413ZM52.151 20.45h3.98c2.39 0 4.186 1.44 4.186 4.38 0 2.57-1.37 4.482-4.186 4.482h-3.98v-8.864.002Zm2.029 7.223h1.808c1.175 0 2.299-.696 2.299-2.655 0-1.789-.645-2.93-2.662-2.93H54.18v5.584Zm11.601-7.434c2.854 0 4.535 2.049 4.535 4.678 0 2.557-1.68 4.605-4.535 4.605-2.856 0-4.536-2.05-4.536-4.604 0-2.631 1.681-4.68 4.535-4.68h.001v.001Zm-.001 7.645c1.82 0 2.505-1.49 2.505-2.966 0-1.551-.685-3.042-2.505-3.042-1.82 0-2.506 1.49-2.506 3.041 0 1.476.684 2.966 2.505 2.966v.001Zm11.974-4.456c-.128-.88-1.008-1.552-2.014-1.552-1.82 0-2.506 1.49-2.506 3.041 0 1.477.685 2.966 2.506 2.966 1.24 0 1.938-.818 2.093-1.985h1.963c-.207 2.21-1.796 3.624-4.055 3.624-2.856 0-4.535-2.05-4.535-4.604 0-2.632 1.68-4.68 4.535-4.68 2.026 0 3.732 1.142 3.977 3.189h-1.964v.001Zm11.128 2.533c0 2.396-1.472 3.562-3.94 3.562-2.479 0-3.926-1.155-3.926-3.562v-5.512h2.03v5.512c0 .967.257 1.922 1.896 1.922 1.447 0 1.912-.608 1.912-1.922v-5.512h2.03v5.512h-.002Zm1.715-5.512h2.857l2.156 6.094h.026l2.04-6.093h2.855v8.862h-1.9V23.03h-.025l-2.26 6.28h-1.564l-2.26-6.22h-.026v6.22h-1.898v-8.863.001Zm11.697 0h6.899v1.64h-4.871v1.9h4.47V25.5h-4.468v2.172h4.974v1.636h-7.003l-.001-8.86v.001Zm8.41 0h2.015l3.851 5.945h.026V20.45h1.897v8.862h-2.027l-3.838-5.932h-.025v5.932h-1.899v-8.863.001Zm11.473 1.64h-2.764V20.45h7.557v1.638h-2.765v7.224h-2.027v-7.225l-.001.001Zm7.197 4.282c0 1.18.956 1.638 2.041 1.638.711 0 1.797-.2 1.797-1.106 0-.955-1.383-1.116-2.74-1.465-1.369-.346-2.751-.855-2.751-2.518 0-1.813 1.782-2.682 3.45-2.682 1.923 0 3.693.807 3.693 2.855H132.9c-.064-1.067-.851-1.34-1.821-1.34-.646 0-1.395.262-1.395 1.005 0 .684.439.77 2.751 1.342.673.16 2.739.57 2.739 2.58 0 1.627-1.331 2.844-3.836 2.844-2.043 0-3.953-.968-3.927-3.154H129.374ZM58.752 34.15c-.258-1.253-1.305-1.887-2.584-1.887-2.195 0-3.126 1.738-3.126 3.588 0 2.022.93 3.71 3.14 3.71 1.614 0 2.544-1.092 2.66-2.558h1.228c-.232 2.212-1.666 3.55-3.99 3.55-2.87 0-4.264-2.035-4.264-4.616 0-2.57 1.525-4.667 4.366-4.667 1.925 0 3.514.993 3.798 2.88h-1.228Zm5.004-2.67h1.355l3.604 8.864h-1.357l-1.008-2.667h-3.9l-1.033 2.667H60.15l3.605-8.863v-.001Zm-.92 5.202h3.128l-1.538-4.134h-.025l-1.564 4.134Zm6.72-5.202h1.306l4.858 7.188h.026V31.48h1.163v8.864h-1.345l-4.817-7.113h-.027v7.113h-1.162l-.002-8.864Zm11.804 0h1.356l3.604 8.864h-1.354l-1.007-2.667h-3.901l-1.034 2.667h-1.267l3.605-8.863v-.001h-.002Zm-.918 5.202h3.126l-1.536-4.134h-.028l-1.563 4.134h.001Zm6.727-5.202h3.166c2.84 0 4.428 1.367 4.428 4.222 0 2.966-1.357 4.642-4.43 4.642h-3.165v-8.863l.001-.001Zm1.228 7.87h2.04c.84 0 3.1-.222 3.1-3.487 0-2.109-.813-3.389-3.074-3.389h-2.067v6.877h.001Zm9.945-7.87h1.356l3.604 8.864h-1.357l-1.009-2.667h-3.9l-1.033 2.667h-1.266l3.605-8.863v-.001Zm-.92 5.202h3.128l-1.538-4.134h-.025l-1.563 4.134h-.001ZM0 0v50h3.23V3.102h32.66v43.776H9.756c.852-13.965 8.064-26.79 19.67-35.151v7.066h3.23V6.207H19.558V9.31H27.4C14.62 18.557 6.867 32.893 6.46 48.389l-.04 1.592h32.697V0H0Z" />
            </svg>
            <p className="mt-5 font-light leading-6 text-white/90">
              310 Beechgrove Avenue, Suite B, Ottawa, ON, Canada, K1Z 6R3
            </p>
            <ul className="mt-5 space-y-1 font-light text-white/90">
              <li>
                <a href="mailto:info@idocscanada.ca" className="font-semibold text-white hover:underline">
                  info@idocscanada.ca
                </a>
              </li>
              <li>
                <a href="tel:613-701-0533" className="font-semibold text-white hover:underline">
                  613-701-0533
                </a>
              </li>
              <li>
                Toll-free at{' '}
                <a href="tel:" className="font-bold text-white hover:underline">
                  1-888-433-1011
                </a>
              </li>
            </ul>
          </Columns.Content>
          <Columns.Content>
            <h3 className="font-bold text-white md:text-lg">Trusted Apostille Experts</h3>
            <p className="mt-2 font-light text-white">
              We process thousands of documents yearly. Click below or contact us for personalized help.
            </p>
            <ul className="hidden mt-5 space-y-2 font-light text-white md:block columns-1 sm:columns-2 md:columns-3">
              <li>Birth Certificate</li>
              <li>Certificate of Origin</li>
              <li>Certificate of Pharmaceutical Product</li>
              <li>Certificate of Residency</li>
              <li>Commercial Invoice</li>
              <li>Criminal Record Check</li>
              <li>Death Certificate</li>
              <li>Divorce Certificate</li>
              <li>Educational Documents</li>
              <li>Good Manufacturing Practices (GMP) Certificate</li>
              <li>Manufacturer&apos;s Declaration</li>
              <li>Marriage Certificate</li>
              <li>Pilot&apos;s License</li>
              <li>Power of Attorney</li>
              <li>Single Status Document</li>
              <li>Statement in Lieu of Certificate of Non-Impediment to Marriage Abroad</li>
              <li>Vital Statistics Certificate</li>
            </ul>
          </Columns.Content>
        </Columns>
      </div>

      <div className="text-white idc-footer-disclaimer bg-idc-blue-800">
        <div className="px-6 py-4 md:px-8 md:py-8">
          <div className="flex flex-col max-w-5xl gap-4 mx-auto text-sm md:space-x-4 md:flex-row">
            <div className="flex w-full gap-4">
              <a
                href="https://www.bbb.org/ca/on/ottawa/profile/legal-information-services/international-documents-canada-0117-50321#sealclick"
                title="Click for the Business Review of International Documents Canada, a Legal Information Services in Ottawa ON"
                className="w-[120px] h-[42px] grow-0 shrink-0"
                target="_blank"
              >
                <img
                  width="120"
                  height="42"
                  alt="Click for the BBB Business Review of this Legal Information Services in Ottawa ON"
                  style={{ border: 0 }}
                  src="/assets/logos/bbb-logo.png"
                />
              </a>
              <p className="md:max-w-64">Proudly recognized by with a Torch Award for Market Place Trust</p>
            </div>

            <div className="w-full md:ml-auto">
              <p className="text-center md:text-right">
                Copyright © 2020 International Documents Canada. All rights reserved.
                <span className="block mt-2">
                  <a href="#" className="font-bold hover:underline">
                    About Us
                  </a>{' '}
                  |{' '}
                  <a href="#" className="font-bold hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
