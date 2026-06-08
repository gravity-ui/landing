// Header count skeleton — the contributors number is fetched async.
export const SKELETON_HEADER_COUNT_WIDTH = 54;
export const SKELETON_HEADER_COUNT_HEIGHT = 40;

// Section title bars ("Welcome Aboard" / "Community").
export const SKELETON_SECTION_TITLE_WIDTH = 180;
export const SKELETON_SECTION_TITLE_HEIGHT = 24;

// Newcomers avatars — mirror the real `<Avatar size="l">` (42px) left-aligned row.
export const SKELETON_NEWCOMERS_AVATAR_SIZE = 42;
export const NEWCOMERS_AVATAR_COUNT = 6;

// Community grid teaser. Mirrors BaseContributorList's `auto-fill, minmax(44px, 1fr)`
// grid, clipped to EXPANDABLE_MIN_HEIGHT (4 rows = 4 * 44 + 3 * 12 = 212px) so the
// skeleton matches the collapsed list instead of rendering a tall avatar wall.
export const SKELETON_GRID_HEIGHT = 212;
export const SKELETON_COMMUNITY_AVATAR_COUNT = 80;
