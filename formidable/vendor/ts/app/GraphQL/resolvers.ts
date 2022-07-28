export default {
    Query: {
        add: async (_, { x, y }) => {
            return x + y;
        }
    }
};
