import React from 'react'

export interface BluePanelContentProps {
  children: React.ReactNode
  bgType?: 'dark' | 'light'
}

export const BluePanelContent = ({ children, bgType = 'light' }: BluePanelContentProps) => {
  const bgColor = bgType === 'light' ? 'bg-idc-blue-50' : 'bg-idc-blue-600 text-white'
  return <div className={`ui-prose-first-last px-7 py-6 md:px-16 md:py-12 ${bgColor}`}>{children}</div>
}

BluePanelContent.displayName = 'BluePanel.Content'
