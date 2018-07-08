import { createSelector } from 'reselect'

const selectEmbed = state => state.embed

// Select all embeds
const makeSelectAll = () => createSelector(
  selectEmbed,
  embed => embed.all,
)

export {
  selectEmbed,
  makeSelectAll,
}
