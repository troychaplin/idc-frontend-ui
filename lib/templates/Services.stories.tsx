import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BluePanel } from '../components/BluePanel/BluePanel';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Columns } from '../components/Columns/Columns';
import { Card } from '../components/Card/Card';
import { CardData } from '../components/Card/data';
import { CardGroup } from '../components/CardGroup/CardGroup';
import { DefinitionData } from '../components/Definition/data';
import { Definition } from '../components/Definition/Definition';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Main } from '../components/Main/Main';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Navigation } from '../components/Navigation/Navigation';
import { Section } from '../components/Section/Section';
import { Modal } from '../components/Modal/Modal';
import { navItems } from '../data/navigation';

const meta = {
  title: 'Templates/Services',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ServicesWithModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleSearchClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Navigation>
        <Navigation.Desktop>
          <Navigation.Logo siteUrl="/" />
          <Navigation.Menu items={navItems} />
          <Navigation.Aside onSearchClick={handleSearchClick} />
        </Navigation.Desktop>
        <Navigation.Mobile items={navItems} />
      </Navigation>

      <Main maxWidth="5xl">
        <Section maxWidth="5xl" bgType="blue">
          <Hero>
            <Hero.Content
              preTitle="Our Services"
              title="Document Authentication and Legalization"
              headerType="h1"
              width={100}
              isItalic
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mauris ut urna
                vestibulum tincidunt ut mollis velit. Cras at vestibulum sapien. Etiam bibendum
                varius nisi non molestie. In at turpis cursus, laoreet lectus vitae, consectetur
                risus. Morbi imperdiet condimentum fringilla. Sed tristique quam urna, eget
                vulputate condimentum vitae.
              </p>
            </Hero.Content>
          </Hero>
        </Section>

        <Header as="h2" isItalic size="md" title="About the Service" weight="semibold" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at
          consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus
          dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim non
          elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut quam.
        </p>

        <Section bgType="white">
          <Columns cols={2} maxWidth="5xl">
            <Columns.Content>
              <Header as="h2" isItalic size="md" title="More Information" weight="semibold" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit,
                at consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris
                faucibus dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet,
                enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut
                quam.
              </p>
            </Columns.Content>
            <Columns.Content>
              <Header as="h2" isItalic size="md" title="More Information" weight="semibold" />
              <p>
                Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros
                ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan
                pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat.
                Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
              </p>
            </Columns.Content>
          </Columns>
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
                From apostilles to attestations, our specialized services ensure global recognition
                for your documents. We're your trusted partner in Canadian document apostille,
                handling everything from authentication to legalization, translation, and
                notarization. Whatever term you've heard &ndash; legalization, ratification, and
                more &ndash; we bring clarity and expertise to each step, so your documents make the
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

        <Section bgType="white">
          <Header
            as="h2"
            isItalic
            size="md"
            title="Column Content with Icons"
            weight="semibold"
            isCenter
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at
              consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris
              faucibus dui ultricies luctus.
            </p>
          </Header>
          <CardGroup cols={3}>
            {CardData.slice(0, 3).map(({ id, link, title, excerpt, iconName }) => (
              <Card key={id}>
                <Card.Icon iconName={iconName} />
                <Card.Header title={title} />
                <Card.Content text={excerpt} link={link} />
              </Card>
            ))}
          </CardGroup>
        </Section>

        <Section maxWidth="3xl" bgType="blue">
          <Header title="Got questions? Let us help you!" size="md" weight="bold" isItalic isCenter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat urna sed euismod
              lobortis. Aenean iaculis, elit non ornare maximus, ligula mauris ultricies felis, sed
              vestibulum arcu ipsum vitae elit. Nullam sit amet interdum massa reprehenderit
              ducimus.
            </p>
          </Header>

          <Definition>
            {DefinitionData.slice(0, 5).map(({ id, title, content }) => (
              <Definition.Accordion key={id} title={title} divider="dark">
                <p>{content}</p>
              </Definition.Accordion>
            ))}
          </Definition>
        </Section>

        <Section bgType="white">
          <Columns cols={2} maxWidth="5xl">
            <Columns.Content>
              <Header as="h2" isItalic size="md" title="More Information" weight="semibold" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit,
                at consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris
                faucibus dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet,
                enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut
                quam.
              </p>
            </Columns.Content>
            <Columns.Content>
              <Header as="h2" isItalic size="md" title="More Information" weight="semibold" />
              <p>
                Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros
                ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan
                pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat.
                Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
              </p>
            </Columns.Content>
          </Columns>
        </Section>

        <Section bgType="blue">
          <Header title="What our Clients are Saying" size="md" weight="bold" isItalic isCenter>
            <p>
              Discover why clients trust us for their document needs. Here's what they have to say
              about our expertise, efficiency, and commitment to seamless service.
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

        <Section bgType="white">
          <Header
            as="h2"
            isItalic
            size="md"
            title="Column Content with Icons"
            weight="semibold"
            isCenter
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at
              consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris
              faucibus dui ultricies luctus.
            </p>
          </Header>
          <CardGroup cols={3}>
            {CardData.slice(0, 3).map(({ id, link, title, excerpt, iconName }) => (
              <Card key={id}>
                <Card.Icon iconName={iconName} />
                <Card.Header title={title} />
                <Card.Content text={excerpt} link={link} />
              </Card>
            ))}
          </CardGroup>
        </Section>
      </Main>

      <Footer>
        <Footer.Contact />
        <Footer.Disclaimer />
      </Footer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <SearchForm />
      </Modal>
    </>
  );
};

export const Services: Story = {
  render: () => <ServicesWithModal />,
};
