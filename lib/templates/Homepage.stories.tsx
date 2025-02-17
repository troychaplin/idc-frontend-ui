import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../components/Main/Main'
import { Section } from '../components/Section/Section'
import { BluePanel } from '../components/BluePanel/BluePanel'
import { Button } from '../components/Button/Button'
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup'
import { Card } from '../components/Card/Card'
import { CardGroup } from '../components/CardGroup/CardGroup'
import { Definition } from '../components/Definition/Definition'
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Header } from '../components/Header/Header'
import { LeadIn } from '../components/LeadIn/LeadIn'
import { Navigation } from '../components/Navigation/Navigation'
// import { SiteHeader } from '../components/SiteHeader/SiteHeader'

import { CardData } from '../components/Card/data'
import { DefinitionData } from '../components/Definition/data'
import { NavItems } from '../components/SiteHeader/data'

// Navigation items data
const navItems = [
  { id: 1, label: 'Features', href: '/features' },
  { id: 2, label: 'Reviews', href: '/reviews' },
  { id: 3, label: 'Pricing', href: '/pricing' },
  { id: 4, label: 'FAQs', href: '/faqs' },
]

const meta: Meta = {
  title: 'Templates/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => (
    <>
      <Navigation siteUrl="/">
      <Navigation.Desktop>
        <Navigation.Logo />
        <Navigation.Menu items={navItems} />
        <Navigation.Aside />
      </Navigation.Desktop>
      <Navigation.Mobile items={navItems} />
    </Navigation>

      <Main>
        <Section maxWidth="6xl" bgType="gradient">
          <Hero>
            <Hero.Content title="The document apostille process made simple" headerType="h1" isItalic>
              <p>
                We expertly manage all aspects of the document apostille &ndash; authentication & legalization &ndash;
                attestation &ndash; process for our clients. If you need to present Canadian documents in a foreign
                jurisdiction we can help!
              </p>
              <ButtonGroup>
                <Button
                  label="Get Started Now"
                  color="dark-blue"
                  onClick={() => {
                    window.location.href = 'https://www.idocscanada.ca'
                  }}
                />
              </ButtonGroup>
            </Hero.Content>
            <Hero.Media>
              <p className="flex items-center justify-center w-full h-full italic font-light rounded-lg bg-white/50 text-slate-400">Add Media</p>
            </Hero.Media>
          </Hero>
        </Section>

        <Section bgType="white">
          <LeadIn
            headerTop="Our Process"
            headerBottom="As simple as A-B-C"
            text="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
          />
        </Section>

        <Section bgType="white">
          <CardGroup cols={3}>
            {CardData.slice(0, 3).map(({ id, link, title, excerpt, iconName }) => (
              <Card key={id}>
                <Card.Figure iconName={iconName} />
                <Card.Header title={title} />
                <Card.Content text={excerpt} />
                <Card.Footer>
                  <a href={link} className="idc-button idc-button--light-orange idc-button--sm idc-button--outline">
                    Learn more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </Section>

        <Section maxWidth="6xl" bgType="edge">
          <BluePanel cols={2}>
            <BluePanel.Content>
              <Header
                title="Global Recognition, Local Expertise: Your Documents, Validated
          Everywhere"
                size="md"
                weight="bold"
                isItalic
              />
              <p>
                From apostilles to attestations, our specialized services ensure global recognition for your documents.
                We're your trusted partner in Canadian document apostille, handling everything from authentication to
                legalization, translation, and notarization. Whatever term you've heard &ndash; legalization,
                ratification, and more &ndash; we bring clarity and expertise to each step, so your documents make the
                impact they deserve anywhere in the world.
              </p>
              <p>
                View the <a href="#">document types</a> we handle.
              </p>
            </BluePanel.Content>
            <BluePanel.Content bgType="dark">
              <p>Form goes here</p>
            </BluePanel.Content>
          </BluePanel>
        </Section>

        <Section bgType="blue">
          <Header title="What our Clients are Saying" size="md" weight="bold" isItalic isCenter>
            <p>
              Discover why clients trust us for their document needs. Here's what they have to say about our expertise,
              efficiency, and commitment to seamless service.
            </p>
          </Header>

          <CardGroup cols={3} layout="masonry">
            {CardData.slice(0, 9).map(({ id, quote, author, image }) => (
              <Card key={id}>
                <Card.Quote cite={author}>
                  {quote}
                  <Card.Cite>
                    <img src={image} alt="Person's Name" />
                    {author}
                  </Card.Cite>
                </Card.Quote>
              </Card>
            ))}
          </CardGroup>
        </Section>

        <Section maxWidth="3xl" bgType="white">
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

        <Section bgType="white">
          <Header title="Stay Informed, Stay Empowered" size="md" weight="bold" isItalic isCenter>
            <p>
              Dive into our articles to uncover everything you need to know about the apostille process—also called
              authentication, legalization, or attestation. Get clear insights and expert advice to make your document
              journey smooth and stress-free!
            </p>
          </Header>

          <CardGroup cols={3}>
            {CardData.slice(0, 3).map(({ id, link, title, excerpt, image, alt, date }) => (
              <Card key={id} addFlex>
                <Card.Figure>
                  <img className="rounded-md" src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Content text={excerpt} link={link} isExcerpt hideMobile />
              </Card>
            ))}
          </CardGroup>

          <ButtonGroup isCenter>
            <Button
              label="View More News"
              color="light-orange"
              isOutline
              onClick={() => {
                window.location.href = 'https://www.idocscanada.ca'
              }}
            />
          </ButtonGroup>
        </Section>
      </Main>

      <Footer />
    </>
  ),
}
