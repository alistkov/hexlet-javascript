export function makeUser({ id = null, friends = [] } = {}) {
  return {
    friends,
    id,
    getFriends() {
      return this.friends.slice()
    },
  }
}

export function getMutualFriends(user1, user2) {
  if (user1.getFriends().length === 0 || user2.getFriends().length === 0) {
    return []
  }

  const user2FriendIds = user2.getFriends().map(friend => friend.id)

  return user1.getFriends().filter(friend => user2FriendIds.includes(friend.id))
}
