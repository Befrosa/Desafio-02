import { Button } from '../components/Button';

export function SideBar({genres, selectedGenreId, handleClickButton}: any) {
  return (
    <div>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map((genre: any) => (
            <Button
              key={String(genre.id)}
              onClick={() => handleClickButton(genre.id)}
              iconName={genre.name}
              title={genre.title}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
    </nav>
  </div>
  )
}