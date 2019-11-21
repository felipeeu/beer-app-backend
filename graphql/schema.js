const graphql = require('graphql')
const Group = require('../models/group.model');
const Style = require('../models/style.model')

const {
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
}=graphql

const stringNonNull= {type: new GraphQLNonNull(GraphQLString)}

const GroupType = new GraphQLObjectType({
    name: "Group",
    description: "Represent the major group of beer",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: stringNonNull,
        description: stringNonNull,
    })
});

const StyleType = new GraphQLObjectType({
    name: "Style",
    description: "Represent the styles of beers by group ",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: stringNonNull,
        abv:stringNonNull,
        ibu:stringNonNull,
        pair:stringNonNull, 
        group:stringNonNull,
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: "Schema Root",
    fields: () => ({

        groups: {
            type: new GraphQLList(GroupType),
            description: "The two major groups",
            resolve(){
                return Group.find({})
            }
        },

        styles: {
            type: new GraphQLList(StyleType),
            description: "List of all styles",
            args: {group: stringNonNull},
            resolve( root , args) {
                return Style.find({group: args.group})
            }
        }
    })
})

    const BeerSchema = new GraphQLSchema({
        query: RootQueryType,
       
    });
    
    module.exports = BeerSchema;