import { Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar';
import * as React from 'react';

const CardExampleSize = () => (
  <Flex gap="gap.small">
    <Card size="small" aria-roledescription="card with avatar, image and text">
      <Card.Header>
        <Flex gap="gap.small">
          <Avatar
            image="public/images/avatar/small/matt.jpg"
            label="Copy bandwidth"
            name="Evie yundt"
            status="unknown"
          />
          <Flex column>
            <Text content="Small card" weight="bold" />
            <Text content="Secondary line" size="small" />
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Flex column gap="gap.small">
          <Image src="public/images/wireframe/square-image.png" fluid />
          <Text content="Content text" />
        </Flex>
      </Card.Body>
    </Card>

    <Card aria-roledescription="card with avatar, image and text">
      <Card.Header>
        <Flex gap="gap.small">
          <Avatar
            image="public/images/avatar/small/matt.jpg"
            label="Copy bandwidth"
            name="Evie yundt"
            status="unknown"
          />
          <Flex column>
            <Text content="Medium (default) card" weight="bold" />
            <Text content="Secondary line" size="small" />
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Flex column gap="gap.small">
          <Image src="public/images/wireframe/square-image.png" fluid />
          <Text content="Content text" />
        </Flex>
      </Card.Body>
    </Card>

    <Card size="large" aria-roledescription="card with avatar, image and text">
      <Card.Header>
        <Flex gap="gap.small">
          <Avatar
            image="public/images/avatar/small/matt.jpg"
            label="Copy bandwidth"
            name="Evie yundt"
            status="unknown"
          />
          <Flex column>
            <Text content="Large card" weight="bold" />
            <Text content="Secondary line" size="small" />
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Flex column gap="gap.small">
          <Image src="public/images/wireframe/square-image.png" fluid />
          <Text content="Content text" />
        </Flex>
      </Card.Body>
    </Card>
  </Flex>
);

export default CardExampleSize;
