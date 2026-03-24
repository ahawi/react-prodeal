import type { SVGProps } from 'react'

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#FBFBFB" />
    <mask
      id="mask0_13699_662"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="32"
      height="32"
    >
      <circle cx="16" cy="16" r="16" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_13699_662)">
      <ellipse cx="15.9998" cy="28.16" rx="12.16" ry="7.04" fill="#BFC1C7" />
    </g>
    <circle cx="16.0002" cy="13.6" r="5.76" fill="#BFC1C7" />
  </svg>
)
