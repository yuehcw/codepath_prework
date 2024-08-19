import { fetchContentCreators } from '@/actions/supabaseActions';
import CreatorCard from '@/components/CreatorCard';
import { useEffect, useState } from 'react';

const ShowCreators = () => {
  const [contentCreators, setContentCreators] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const creators = await fetchContentCreators();
      if (creators) {
        setContentCreators(creators);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-[10%] pt-[10%] pb-[10%]">
        {contentCreators.map((creator) => (
          <CreatorCard
            key={creator.id}
            id={creator.id}
            name={creator.name}
            description={creator.description}
            imageURL={creator.imageURL}
            youtubeURL={creator.youtubeURL}
            twitterURL={creator.twitterURL}
            instagramURL={creator.instagramURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
