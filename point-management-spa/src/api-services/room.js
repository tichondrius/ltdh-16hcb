export const getRoom = (roomId) => ({
  url: `api/posts/${roomId}`,
  method: 'GET',
});


export const getFullRooms = () => ({
  url: 'api/posts',
  method: 'GET',
})