import { screen, render } from '@testing-library/react';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />);

  // check for header image
  expect(screen.getByAltText('header')).toBeInTheDocument();
  // check for username heading
  expect(await screen.findByRole('heading', { name: user.name }));
  // check for interests heading
  expect(await screen.findByRole('heading', { name: /interests/i }));
  // check for avatar image
  expect(screen.getByAltText('avatar')).toBeInTheDocument();
  // check for user motto
  expect(await screen.findByLabelText("motto")).toBeInTheDocument();
  expect(screen.getByText(user.motto)).toBeInTheDocument();
  // check for user likes
  const likes = user.likes.length;
  expect(screen.getByRole('list').children.length).toEqual(likes);
})

export default { user };
