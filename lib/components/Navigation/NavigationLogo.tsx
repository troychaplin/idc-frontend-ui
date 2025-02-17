import { NavigationLogoProps } from './types'

export const NavigationLogo = ({ siteUrl = '/' }: NavigationLogoProps) => {
  return (
    <a href={siteUrl} className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="idc-logo flex-none w-[118px] md:w-[155px] h-[38px] md:h-[50px] fill-idc-blue-500" fill="none" viewBox="0 0 155 50">
        <path fill="#3678B9" d="M52.294 9.412h2.034v8.864h-2.034V9.412Zm3.774 0h2.02l3.86 5.946h.026V9.412h1.903v8.864h-2.032l-3.85-5.934h-.022v5.934h-1.904l-.001-8.864Zm11.504 1.639h-2.77V9.413h7.576v1.639h-2.773v7.225H67.57l.001-7.225.001-.001ZM73.3 9.413h6.918v1.639h-4.884v1.9h4.483v1.514h-4.483v2.171h4.987v1.64H73.3V9.412v.001Zm8.432 0h4.989c1.658 0 2.706 1.106 2.706 2.445 0 1.044-.44 1.825-1.464 2.222v.025c.998.25 1.284 1.18 1.349 2.073.038.559.024 1.603.387 2.098h-2.034c-.247-.558-.22-1.414-.323-2.121-.143-.932-.519-1.342-1.542-1.342h-2.033v3.463h-2.035V9.412v.001Zm2.035 4.009h2.227c.908 0 1.4-.371 1.4-1.266 0-.856-.493-1.229-1.4-1.229h-2.227v2.495Zm7.258-4.009h2.02l3.86 5.945h.026V9.412h1.903v8.864h-2.032l-3.847-5.934h-.026v5.934h-1.904V9.412v.001Zm12.124 0h2.086l3.459 8.863h-2.112l-.699-1.974h-3.459l-.725 1.974h-2.059l3.51-8.864h-.001v.001Zm-.194 5.437h2.398l-1.166-3.252h-.026l-1.206 3.251v.001Zm7.527-3.8h-2.773V9.414h7.578v1.639h-2.771v7.225h-2.033V11.05h-.001Zm5.726-1.637h2.035v8.864h-2.035V9.413Zm7.906-.21c2.863 0 4.546 2.048 4.546 4.678 0 2.558-1.684 4.606-4.546 4.606-2.863 0-4.547-2.049-4.547-4.606 0-2.631 1.684-4.68 4.547-4.68v.002Zm0 7.645c1.826 0 2.512-1.488 2.512-2.966 0-1.55-.686-3.04-2.511-3.04-1.826 0-2.513 1.489-2.513 3.04 0 1.477.686 2.967 2.513 2.967h-.001Zm5.879-7.435h2.021l3.861 5.946h.025V9.413h1.905v8.864h-2.034l-3.847-5.934h-.026v5.934h-1.905V9.413Zm12.125 0h2.086l3.459 8.864h-2.113l-.699-1.974h-3.459l-.723 1.974h-2.06l3.509-8.864Zm-.194 5.437h2.397l-1.166-3.252h-.026l-1.206 3.252h.002-.001Zm6.536-5.437h2.034v7.224H155v1.638h-6.541V9.413ZM52.294 20.45h3.99c2.396 0 4.198 1.44 4.198 4.38 0 2.57-1.374 4.482-4.198 4.482h-3.99v-8.864.002Zm2.034 7.223h1.813c1.178 0 2.305-.696 2.305-2.655 0-1.789-.646-2.93-2.67-2.93h-1.449v5.584Zm11.633-7.434c2.862 0 4.547 2.049 4.547 4.678 0 2.557-1.685 4.605-4.547 4.605-2.864 0-4.548-2.05-4.548-4.604 0-2.631 1.685-4.68 4.546-4.68h.002v.001Zm-.002 7.645c1.826 0 2.512-1.49 2.512-2.966 0-1.551-.686-3.042-2.512-3.042-1.825 0-2.512 1.49-2.512 3.041 0 1.476.686 2.966 2.511 2.966h.001v.001Zm12.008-4.456c-.13-.88-1.011-1.552-2.02-1.552-1.826 0-2.513 1.49-2.513 3.041 0 1.477.687 2.966 2.513 2.966 1.243 0 1.943-.818 2.099-1.985h1.968c-.208 2.21-1.801 3.624-4.067 3.624-2.863 0-4.546-2.05-4.546-4.604 0-2.632 1.683-4.68 4.546-4.68 2.033 0 3.743 1.142 3.99 3.189h-1.97v.001Zm11.158 2.533c0 2.396-1.476 3.562-3.95 3.562-2.487 0-3.938-1.155-3.938-3.562v-5.512h2.035v5.512c0 .967.258 1.922 1.902 1.922 1.451 0 1.917-.608 1.917-1.922v-5.512h2.035v5.512h-.001Zm1.72-5.512h2.864l2.162 6.094h.027l2.044-6.093h2.864v8.862h-1.905V23.03h-.026l-2.265 6.28h-1.57l-2.266-6.22h-.025v6.22h-1.903l-.001-8.863v.001Zm11.728 0h6.918v1.64h-4.884v1.9h4.482V25.5h-4.48v2.172h4.987v1.636h-7.021l-.002-8.86v.001Zm8.434 0h2.02l3.861 5.945h.026V20.45h1.902v8.862h-2.032l-3.848-5.932h-.025v5.932h-1.905l.001-8.863v.001Zm11.504 1.64h-2.772V20.45h7.578v1.638h-2.773v7.224h-2.032v-7.225l-.001.001Zm7.216 4.282c0 1.18.959 1.638 2.047 1.638.713 0 1.802-.2 1.802-1.106 0-.955-1.387-1.116-2.747-1.465-1.373-.346-2.759-.855-2.759-2.518 0-1.813 1.786-2.682 3.459-2.682 1.929 0 3.703.807 3.703 2.855h-1.969c-.065-1.067-.853-1.34-1.826-1.34-.648 0-1.399.262-1.399 1.005 0 .684.44.77 2.759 1.342.674.16 2.746.57 2.746 2.58 0 1.627-1.335 2.844-3.846 2.844-2.049 0-3.964-.968-3.938-3.154h1.968ZM58.912 34.15c-.258-1.253-1.308-1.887-2.59-1.887-2.202 0-3.135 1.738-3.135 3.588 0 2.022.933 3.71 3.148 3.71 1.619 0 2.551-1.092 2.667-2.558h1.232c-.233 2.212-1.67 3.55-4.002 3.55-2.876 0-4.274-2.035-4.274-4.616 0-2.57 1.53-4.667 4.378-4.667 1.93 0 3.523.993 3.808 2.88h-1.232Zm5.018-2.67h1.359l3.614 8.864h-1.36l-1.012-2.667H62.62l-1.035 2.667h-1.27l3.614-8.863v-.001Zm-.922 5.202h3.136l-1.542-4.134h-.026l-1.568 4.134Zm6.738-5.202h1.31l4.87 7.188h.027V31.48h1.165v8.864h-1.347l-4.83-7.113h-.028v7.113h-1.165l-.002-8.864Zm11.837 0h1.36l3.612 8.864h-1.357l-1.01-2.667h-3.912l-1.037 2.667h-1.27l3.615-8.863v-.001h-.002Zm-.921 5.202h3.134l-1.54-4.134h-.028l-1.567 4.134h.001Zm6.745-5.202h3.174c2.849 0 4.44 1.367 4.44 4.222 0 2.966-1.36 4.642-4.44 4.642h-3.175v-8.863l.001-.001Zm1.231 7.87h2.046c.842 0 3.11-.222 3.11-3.487 0-2.109-.816-3.389-3.084-3.389h-2.072v6.877Zm9.972-7.87h1.36l3.614 8.864h-1.361l-1.011-2.667h-3.91l-1.037 2.667h-1.27l3.615-8.863v-.001Zm-.921 5.202h3.136l-1.542-4.134h-.026l-1.567 4.134h-.001ZM0 0v50h3.24V3.102h32.748v43.776H9.784c.854-13.965 8.086-26.79 19.724-35.151v7.066h3.238V6.207H19.612V9.31h7.863C14.66 18.557 6.885 32.893 6.477 48.389l-.04 1.592h32.787V0H0Z"/>
      </svg>
    </a>
  )
} 