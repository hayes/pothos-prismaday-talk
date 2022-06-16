export const helloWorld = /* ts */ `
import { createServer } from '@graphql-yoga/node';
import SchemaBuilder from '@pothos/core';

const builder = new SchemaBuilder({});

builder.queryType${'({'}
  fields: (t) => ${'({'}
    hello: t.string${'({'}
      args: {
        name: t.arg.string(),
      },
      resolve: (_, args) => \`hello, \${args.name || 'World'}\`,
    }),
  }),
});

const server = createServer({
  schema: builder.toSchema({}),
});
`;

export const helloWorldGql = /* graphql */ `
type Query {
  hello(name: String): String!
}
`;

export const definingTypes = /* ts */ `
builder.prismaObject('Post', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    body: t.exposeString('content'),
    author: t.relation('author'),
    comments: t.relatedConnection('comments', {
      cursor: 'id',
    }),
  }),
});
`;

export const definingTypesGql = /* graphql */ `
type Post {
  id: ID!
  title: String!
  body: String!
  author: User!
  comments(
    after: ID,
    before: ID,
    first: Int,
    last: Int
  ): PostCommentsConnection!
}

type PostCommentsConnection {
  edges: [PostCommentsConnectionEdge]!
  pageInfo: PageInfo!
}

type PostCommentsConnectionEdge {
  cursor: String!
  node: Comment!
}
`;

export const definingPrismaFields = /* ts */ `
builder.queryType${'({'}
  fields: (t) => ({
    post: t.prismaField({
      type: 'Post',
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (query, root, args, context, info) =>
        prisma.post.findUnique({
          ...query,
          where: { id: args.id },
        }),
    }),
  });
`;

export const definingPrismaFieldsGql = /* graphql */ `
type Query {
  post(id: ID!): Post!
}
`;

export const definingAuthor = /* ts */ `
builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    drafts: t.relation('posts', {
      query: {
        where: {
          status: PostStatus.Draft,
        },
      },
    }),
    posts: t.relatedConnection('posts', {
      cursor: 'id',
      args: { status: t.arg({ type: PostStatus })}
      query: (args) => ({
        where: { status: args.status ?? PostStatus.Published }
      })
    }),
  }),
});
`;

export const definingAuthorGql = /* graphql */ `
type User {
  id: ID!
  name: String!
  drafts: [Post!]!
  posts(
    after: ID,
    before: ID,
    first: Int,
    last: Int,
    status: PostStatus
  ): UserPostsConnection!
}

type UserPostsConnection {...}
type UserPostsConnectionEdge {...}
`;

export const fieldLevelSelections = /* typescript */ `
builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    bio: t.string({
      select: {
        profile: {
          select: {
            bio: true,
          },
        },
      },
      resolve: (user) => user.profile.bio,
    }),
  }),
});
`;

export const objectLevelIncludes = /* typescript */ `
builder.prismaObject('User', {
  include: {
    profile: true,
  },
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    bio: t.string({
      resolve: (user) => user.profile.bio,
    }),
  }),
});
`;

export const selectMode = /* typescript */ `
builder.prismaObject('User', {
  select: {},
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.string({
      select: {
        firstName: true,
        lastName: true,
      },
      resolve: (user) => \`\${user.firstName} \${user.lastName}\`,
    }),
  }),
});
`;
