import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../components/Main/Main'
import { Section } from '../components/Section/Section'
import { Footer } from '../components/Footer/Footer'
import { Columns } from '../components/Columns/Columns'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'

const navItems = [
  { label: 'Services', href: '#' },
  { label: 'Process', href: '#' },
  { label: 'Documents', href: '#' },
  { label: 'Embassies', href: '#' },
  { label: 'Resources', href: '#' },
]

const meta: Meta = {
  title: 'Templates/Testing',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Testing: Story = {
  render: () => (
    <>
      <SiteHeader>
        <a href="/" aria-label="Go to homepage">
          <SiteHeader.SiteLogo />
        </a>
        <SiteHeader.Navigation>
          {navItems.map((item, index) => (
            <li key={index} className="idc-navitem">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </SiteHeader.Navigation>
        <SiteHeader.Aside />
      </SiteHeader>

      <Main>
        <Section maxWidth="5xl">
          <h2>White section testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
        </Section>
      </Main>

      <Main>
        <Section maxWidth="5xl">
          <h2>Blue section testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
        </Section>
      </Main>

      <Main>
        <Section maxWidth="5xl">
          <h2>Gradient section testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
        </Section>
      </Main>

      <Main>
        <Section maxWidth="5xl">
          <h2>Edge section testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="white">
            <p>
              White section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="blue">
            <p>
              Blue section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="gradient">
            <p>
              Gradient section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <Section bgType="edge">
            <p>
              Edge section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium
              augue est, semper fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
              tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
            </p>
          </Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
        </Section>
      </Main>

      <Footer />
    </>
  ),
}
