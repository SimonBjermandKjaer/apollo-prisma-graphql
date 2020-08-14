import { schema } from 'nexus';

export const Mutation = schema.objectType({
  name: 'Mutation',
  definition(t) {
    t.field('_deprecated_field', {
      type: 'String',
      deprecation: 'This is the root type',
      resolve: () => {
        return 'Unused';
      },
    });
  },
});
