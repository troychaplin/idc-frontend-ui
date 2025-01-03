import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../components/Main/Main'
import { Section } from '../components/Section/Section'
import { Footer } from '../components/Footer/Footer'
import { Columns } from '../components/Columns/Columns'
import { Hero } from '../components/Hero/Hero'
import { Header } from '../components/Header/Header'
import { Definition } from '../components/Definition/Definition'
import { DefinitionData } from '../components/Definition/data'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'

const navItems = [
  { label: 'Services', href: '#' },
  { label: 'Process', href: '#' },
  { label: 'Documents', href: '#' },
  { label: 'Embassies', href: '#' },
  { label: 'Resources', href: '#' },
]

const meta: Meta = {
  title: 'Templates/Article',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Article: Story = {
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
        <Section maxWidth="3xl">
          <Section maxWidth="3xl" bgType="gradient">
            <Hero>
              <Hero.Content
                title="The document apostille process made simple"
                date="2024-08-31 07:10:12"
                datePrefix="Published on"
                headerType="h1"
                isCenter
              >
                <p>
                  We expertly manage all aspects of the document apostille &ndash; authentication & legalization &ndash;
                  attestation &ndash; process for our clients. If you need to present Canadian documents in a foreign
                  jurisdiction we can help!
                </p>
              </Hero.Content>
            </Hero>
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est,{' '}
            <a href="#">semper fringilla lacus</a> auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
            tristique sit amet a leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <h2>Header Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h3>Header Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h4>Header Four</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h5>Header Five</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h6>Header Six</h6>
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
          <Columns cols={2} maxWidth="5xl">
            <Columns.Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur
                lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices
                luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum
                eros, ut eleifend sem dui ut quam.
              </p>
            </Columns.Content>
            <Columns.Content>
              <p>
                Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit
                ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante
                urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna
                faucibus.
              </p>
            </Columns.Content>
          </Columns>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <Section as="div" maxWidth="3xl" bgType="white">
            <Header title="Got questions? Let us help you!" size="md" weight="bold" isItalic isCenter>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
                iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
                Nullam sit amet interdum massa reprehenderit ducimus.
              </p>
            </Header>

            <Definition>
              {DefinitionData.slice(0, 5).map(({ id, title, content }) => (
                <Definition.Accordion key={id} title={title}>
                  <p>{content}</p>
                </Definition.Accordion>
              ))}
            </Definition>
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h2>Header Two</h2>
          <h3>Header Three</h3>
          <h4>Header Four</h4>
          <h5>Header Five</h5>
          <h6>Header Six</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.</li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>
              Quisque et magna nec eros commodo tristique sit amet a leo.
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                  </ul>
                </li>
                <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                </li>
                <li>Aenean iaculis, elit non ornare maximus.</li>
                <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
              </ul>
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.</li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>
              Quisque et magna nec eros commodo tristique sit amet a leo.
              <ol>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                  </ol>
                </li>
                <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis.
                </li>
                <li>Aenean iaculis, elit non ornare maximus.</li>
                <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
              </ol>
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
          </ol>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod lobortis. Aenean
            iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
            Nullam sit amet interdum massa. In hac habitasse platea dictumst. Phasellus pretium augue est, semper
            fringilla lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros commodo tristique sit amet a
            leo. Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          {/* <figure className="ui-figure alignleft size-medium">
            <img
              className=""
              src="https://picsum.photos/id/20/300/225"
              alt="Images require alt text"
              width={300}
              height={225}
              decoding="async"
            />
          </figure> */}

          <p>
            Quisque erat diam, porta quis libero eget, ultrices ornare nisi. Vestibulum accumsan mauris sed elit maximus
            dignissim. Suspendisse ac facilisis felis. Mauris rhoncus mauris mauris, a porttitor diam pellentesque ut.
            Sed commodo posuere interdum. Cras aliquet mauris sit amet lacus eleifend, ac maximus sem porta. Curabitur
            consectetur tortor sapien, in maximus orci elementum ut. Duis et massa mattis enim sagittis pellentesque.
            Sed turpis ex, sollicitudin sed est et, pulvinar malesuada nunc. Morbi pulvinar nibh nec lectus ullamcorper,
            vel semper augue cursus. Duis dapibus nisl eget purus dignissim, vel sollicitudin diam fermentum.
          </p>

          <p>
            Nullam ut maximus lorem. Maecenas pulvinar odio eu sem molestie interdum. Cras consequat pulvinar magna.
            Donec pulvinar quis ligula in euismod. Sed et ultricies augue, commodo pellentesque ligula. Curabitur in sem
            est. Suspendisse potenti. Curabitur iaculis ex quis nibh fringilla lacinia. Quisque tellus diam, imperdiet
            ut auctor sit amet, maximus ac ligula. Pellentesque posuere orci at risus pellentesque, et ultrices urna
            iaculis.
          </p>

          {/* <figure className="ui-figure size-full">
            <img
              className=""
              src="https://picsum.photos/id/20/904/678"
              alt="Images require alt text"
              width={904}
              height={678}
              decoding="async"
            />
          </figure> */}

          <p>
            Quisque sagittis interdum felis, ut sollicitudin sem dapibus gravida. Proin in aliquam libero. Cras
            ullamcorper efficitur arcu, porttitor bibendum turpis lacinia id. Sed laoreet augue eget libero fringilla,
            et bibendum sem accumsan. Cras nibh magna, dictum eget dui vel, dapibus vulputate neque. Phasellus vel
            ultrices est, id molestie ligula. Fusce convallis nibh sit amet neque convallis interdum. Proin vitae mattis
            enim. In et nisi metus. Nam quis elementum nibh.
          </p>

          <p>
            Donec in orci tortor. Vestibulum in nulla et eros vulputate maximus. Nulla nec nibh a felis elementum
            vehicula. Integer condimentum eleifend augue in molestie. Vivamus dapibus tristique ante et porttitor.
            Pellentesque congue a nunc eget cursus. Nulla a euismod lacus. Donec malesuada, risus molestie sodales
            accumsan, diam tellus dapibus lectus, a cursus dui tellus sagittis turpis. Maecenas nec metus luctus,
            tincidunt mauris in, tristique urna. Fusce commodo malesuada interdum.
          </p>
        </Section>
      </Main>

      <Footer />
    </>
  ),
}
