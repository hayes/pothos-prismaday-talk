import React from 'react';
import ReactDOM from 'react-dom';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  CodePane,
  Notes,
} from 'spectacle';
import {
  definingAuthor,
  definingAuthorGql,
  definingPrismaFields,
  definingPrismaFieldsGql,
  definingTypes,
  definingTypesGql,
  fieldLevelSelections,
  helloWorld,
  helloWorldGql,
  objectLevelIncludes,
  selectMode,
} from './examples';

const formidableLogo = 'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: '#EAEAEA',
    secondary: '#FF2E63',
    tertiary: '#08D9D6',
    background: '#252A34',
    background2: '#057777',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="0 1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template} backgroundColor="red">
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="space-evenly">
        <Heading color="secondary" fontSize="h3">
          Pothos + Prisma
        </Heading>
        <FlexBox flexDirection="row" justifyContent="space-between" width="80%">
          <Text>
            <i class="devicon-github-original" />
            &nbsp;@hayes
          </Text>
          <Text>htttps://pothos-graphql.dev</Text>
          <Text>
            <i class="devicon-twitter-original" />
            &nbsp;@yavascript
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h2">
          Building a GraphQL Schema
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} width="80%">
          <Box>
            <Box mt={30}>
              <Appear>
                <Heading margin="0px 32px" color="tertiary" fontSize="2.5em">
                  GraphQL
                </Heading>
              </Appear>
              <UnorderedList fontSize={30}>
                <Appear>
                  <ListItem>Types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Fields</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Relations</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Queries and Mutations</ListItem>
                </Appear>
              </UnorderedList>
            </Box>
          </Box>
          <Appear>
            <Box mt={30} borderLeft="2px dashed gray">
              <Heading margin="0px 32px" color="tertiary" fontSize="2.5em">
                Your database
              </Heading>
              <UnorderedList fontSize={30}>
                <Appear>
                  <ListItem>Types</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Fields</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Relations</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Queries and Mutations</ListItem>
                </Appear>
              </UnorderedList>
            </Box>
          </Appear>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          Can we just use our database schema?
        </Heading>

        <Appear>
          <Heading color="tertiary" fontSize="2.5em">
            Tools that solve this problem
          </Heading>
          <UnorderedList fontSize={30}>
            <ListItem>Graphcool</ListItem>
            <ListItem>PostGraphile</ListItem>
            <ListItem>Hasura</ListItem>
            <ListItem>Many more</ListItem>
          </UnorderedList>
        </Appear>
        <Appear>
          <Heading color="tertiary" fontSize="2.5em">
            But...
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          It's not always the right solution
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30}>
          <UnorderedList fontSize={30}>
            <Appear>
              <ListItem>Authorization</ListItem>
            </Appear>
            <Appear>
              <ListItem>Performance</ListItem>
            </Appear>
            <Appear>
              <ListItem>Conventions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Customization</ListItem>
            </Appear>
          </UnorderedList>
          <UnorderedList fontSize={30}>
            <Appear>
              <ListItem>Public APIs are hard to change</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not all data lives in your database</ListItem>
            </Appear>
            <Appear>
              <ListItem>Backends evolve over time</ListItem>
            </Appear>
          </UnorderedList>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          Pothos
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Code-First</ListItem>
          </Appear>
          <Appear>
            <ListItem>Type-Safe</ListItem>
          </Appear>
          <Appear>
            <ListItem>Focused on Developer Experience</ListItem>
          </Appear>
          <Appear>
            <ListItem>Plugins!</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>Schema generated from code rather than DB</li>
          <li>Types work without code-gen, decorators or meta programing</li>
          <li>Everything can be co-located</li>
        </ul>
        Plugins:
        <ul>
          <li>Authorization</li>
          <li>Validation</li>
          <li>Dataloaders</li>
          <li>Prisma</li>
          <li>Many more</li>
        </ul>
      </Notes>
    </Slide>

    <Slide backgroundColor="background2">
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30} width="100%">
        <Box>
          <CodePane
            width="1/2"
            language="typescript"
            theme={dracula}
            highlightRanges={[
              [4, 4],
              [6, 6],
              [7, 7],
              [8, 8],
              [9, 11],
              [12, 12],
              [17, 19],
              [1, 19],
            ]}
          >
            {helloWorld}
          </CodePane>
        </Box>
        <Box>
          <FlexBox flexDirection="column" height="100%">
            <CodePane language="graphql" theme={dracula} showLineNumbers={false}>
              {helloWorldGql}
            </CodePane>
          </FlexBox>
        </Box>
      </Grid>
    </Slide>

    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          Prisma Plugin
        </Heading>
        <Box width="1/3">
          <UnorderedList fontSize={30}>
            <Appear>
              <ListItem>Make it easy to build with intention</ListItem>
            </Appear>
            <Appear>
              <ListItem>Define types, fields, and relations</ListItem>
            </Appear>
            <Appear>
              <ListItem>Optimize queries for great performance</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy control over filtering, sorting, and other query arguments</ListItem>
            </Appear>
            <Appear>
              <ListItem>Escape hatches for advanced use cases</ListItem>
            </Appear>
            <Appear>
              <ListItem>Integrates with Pothos ecosystem for everything else</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%" mt="-10px">
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30} width="100%">
          <FlexBox flexDirection="column" height="80%">
            <Heading color="primary" fontSize="h3">
              Defining Prisma Types
            </Heading>
            <CodePane
              language="typescript"
              theme={dracula}
              highlightRanges={[
                [1, 1],
                [2, 2],
                [3, 4],
                [5, 5],
                [6, 6],
                [7, 9],
                [1, 15],
              ]}
            >
              {definingTypes}
            </CodePane>
          </FlexBox>
          <Box>
            <FlexBox flexDirection="column" height="100%">
              <CodePane language="graphql" theme={dracula} showLineNumbers={false}>
                {definingTypesGql}
              </CodePane>
            </FlexBox>
          </Box>
        </Grid>
      </FlexBox>
      <Notes>
        <ol>
          <li>Define type</li>
          <li>Field builder that understands your data</li>
          <li>exposing scalars</li>
          <li>Aliases</li>
          <li>relations</li>
          <li>connections</li>
        </ol>
      </Notes>
    </Slide>

    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="primary" fontSize="h3">
          Defining Prisma Query
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30} width="100%">
          <FlexBox flexDirection="column" height="100%">
            <CodePane
              language="typescript"
              theme={dracula}
              highlightRanges={[
                [3, 4],
                [5, 7],
                [8, 8],
                [9, 9],
                [11, 12],
                [10, 10],
                [1, 15],
              ]}
            >
              {definingPrismaFields}
            </CodePane>
          </FlexBox>
          <Box>
            <FlexBox flexDirection="column" height="100%">
              <CodePane language="graphql" theme={dracula} showLineNumbers={false}>
                {definingPrismaFieldsGql}
              </CodePane>
            </FlexBox>
          </Box>
        </Grid>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h2">
          Optimized Queries
        </Heading>
        <UnorderedList fontSize={30}>
          <Appear>
            <ListItem>Creates a query based on selections</ListItem>
          </Appear>
          <Appear>
            <ListItem>Recursively walks selected fields</ListItem>
          </Appear>
          <Appear>
            <ListItem>Merges selections into single query</ListItem>
          </Appear>
          <Appear>
            <ListItem>prisma-select and Pal.js</ListItem>
          </Appear>
          <Appear>
            <ListItem>Aliases</ListItem>
          </Appear>
          <Appear>
            <ListItem>Arguments</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%">
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30} width="100%">
          <FlexBox flexDirection="column" height="95%">
            <CodePane
              language="typescript"
              theme={dracula}
              highlightRanges={[
                [5, 11],
                [12, 18],
                [6, 10],
                [14, 17],
                [5, 5],
                [6, 10],
                [12, 12],
                [14, 17],
                [1, 1],
                [16, 16],
                [1, 20],
              ]}
            >
              {definingAuthor}
            </CodePane>
          </FlexBox>
          <Box>
            <FlexBox flexDirection="column" height="90%">
              <Heading color="primary" fontSize="h3">
                Duplicate Relation
              </Heading>
              <CodePane language="graphql" theme={dracula} showLineNumbers={false}>
                {definingAuthorGql}
              </CodePane>
            </FlexBox>
          </Box>
        </Grid>
      </FlexBox>
      <Notes>
        Additional Optimizations:
        <ol>
          <li>not selected fallback</li>
          <li>selections automatically merged</li>
          <li>Multiple relations hoisted into shared findUnique</li>
          <li>prisma combines findUniques into find where in</li>
          <li>selects expanded into includes</li>
        </ol>
      </Notes>
    </Slide>
    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%" justifyContent="start">
        <Heading color="primary" fontSize="h3">
          Includes for Object Types
        </Heading>
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [2, 4],
            [9, 9],
          ]}
        >
          {objectLevelIncludes}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%" justifyContent="start">
        <Heading color="primary" fontSize="h3">
          Selections for Fields
        </Heading>
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [6, 12],
            [13, 13],
            [1, 16],
          ]}
        >
          {fieldLevelSelections}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background2">
      <FlexBox flexDirection="column" height="100%" justifyContent="start">
        <Heading color="primary" fontSize="h3">
          Full Select Mode
        </Heading>
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [2, 2],
            [4, 4],
            [6, 9],
            [10, 10],
            [1, 13],
          ]}
        >
          {selectMode}
        </CodePane>
      </FlexBox>
      <Notes>Fully type-safe</Notes>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          More Features
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Relay nodes</ListItem>
          </Appear>
          <Appear>
            <ListItem>Variants</ListItem>
          </Appear>
          <Appear>
            <ListItem>Counts on relations and connections</ListItem>
          </Appear>
          <Appear>
            <ListItem>Indirect relations</ListItem>
          </Appear>
          <Appear>
            <ListItem>Pothos plugins</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="secondary" fontSize="h3">
          What's Coming Next?
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Composite types</ListItem>
          </Appear>
          <Appear>
            <ListItem>Input types for filtering and sorting</ListItem>
          </Appear>
          <Appear>
            <ListItem>Better docs</ListItem>
          </Appear>
          <Appear>
            <ListItem>Additional helpers for CRUD operations</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="background">
      <FlexBox height="100%" flexDirection="column" justifyContent="space-evenly">
        <Heading color="secondary" fontSize="h3">
          Questions?
        </Heading>
        <Text>Join the Pothos channel in the GraphQL discord!</Text>
        <FlexBox flexDirection="row" justifyContent="space-between" width="80%">
          <Text>
            <i class="devicon-github-original" />
            &nbsp;@hayes
          </Text>
          <Text>htttps://pothos-graphql.dev</Text>
          <Text>
            <i class="devicon-twitter-original" />
            &nbsp;@yavascript
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
