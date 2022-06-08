import React from 'react';
import ReactDOM from 'react-dom';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  Notes,
} from 'spectacle';
import { helloWorld } from './examples';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    // primary: 'red',
    // secondary: 'green'
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Pothos + Prisma
        </Heading>
        <FlexBox flexDirection="row" justifyContent="space-between" width="50%">
          <Text>
            <i class="devicon-github-original" />
            &nbsp;@hayes
          </Text>
          <Text>
            <i class="devicon-twitter-original" />
            &nbsp;@yavascript
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="start" al>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          What are we talking about?
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>What is Pothos?</ListItem>
          </Appear>
          <Appear>
            <ListItem>What problem are we solving?</ListItem>
          </Appear>
          <Appear>
            <ListItem>How does it work with prisma?</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          What is Pothos?
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Code First GraphQL schema builder</ListItem>
          </Appear>
          <Appear>
            <ListItem>Focus on type-safety and developer experience</ListItem>
          </Appear>
          <Appear>
            <ListItem>Extensive plugin ecosystem</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="typescript" theme={dracula}>
          {helloWorld}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Building GraphQL Schema
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box>
            <Box mt={30}>
              <Heading margin="0px 32px" color="secondary" fontSize="h3">
                GraphQL API
              </Heading>
              <UnorderedList fontSize={30}>
                <Appear>
                  <ListItem>A set of types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>With a set of fields</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Some fields are relations to other types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    A set of Queries and Mutations to load or update those types
                  </ListItem>
                </Appear>
              </UnorderedList>
            </Box>
          </Box>
          <Appear>
            <Box mt={30} borderLeft="2px dashed gray">
              <Heading margin="0px 32px" color="secondary" fontSize="h3">
                Your database
              </Heading>
              <UnorderedList fontSize={30}>
                <Appear>
                  <ListItem>A set of types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>With a set of fields</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Some fields are relations to other types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    A set of Queries and Mutations to load or update those types
                  </ListItem>
                </Appear>
              </UnorderedList>
            </Box>
          </Appear>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Initial reaction to just generate/expose your api from your DB -
          graphqcool? - wundergraph - postgraphile
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          - Why this breaks down - ...
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          - Prisma Plugin
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [1, 1],
            [2, 2],
            [4, 10],
            [5, 6],
            [7, 7],
            [8, 8],
            [9, 9],
          ]}
        >{
          /* ts */ `
builder.prismaObject('Post', {
  findUnique: (post) => ({ id: post.id }),

  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    body: t.exposeString('content'),
    author: t.relation('author'),
    comments: t.relatedConnection('comments'),
  }),
});
`
        }</CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [3, 5],
            [6, 8],
            [9, 9],
            [11, 11],
            [1, 15],
          ]}
        >{
          /* ts */ `
builder.queryType${'({'}
  fields: (t) => ({
    post: t.prismaField({
      type: 'Post',
      nullable: true,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (query, root, args, context, info) =>
        db.post.findUnique({
          ...query,
          where: { id: args.id },
        }),
    }),
  });
`
        }</CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        - Optimization
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        - prisma-select, pal.js
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        - More features
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        - What's coming next?
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
