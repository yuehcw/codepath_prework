import { addContentCreator } from '@/actions/supabaseActions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeURL, setYoutubeURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [instagramURL, setInstagramURL] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCreator = { name, imageURL, description, youtubeURL, twitterURL, instagramURL};
    const result = await addContentCreator(newCreator);

    if (result) {
      // Handle success (e.g., show a success message, clear the form, redirect, etc.)
      console.log('Creator added successfully:', result);
      navigate('/'); 
    } else {
      // Handle error (e.g., show an error message)
      console.error('Failed to add creator.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
      <h1 className="text-4xl font-bold mb-8 text-white">Add Creator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <Label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1"
            placeholder="Enter creator's name"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="imageURL" className="block text-sm font-medium text-white">
            Image
          </Label>
          <Input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full mt-1"
            placeholder="Provide a link to the creator's image"
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="description" className="block text-sm font-medium text-white">
            Description
          </Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1"
            rows="4"
            placeholder="Provide a description of the creator"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Social Media Links
          </h2>
          <div className="mb-4">
            <Label htmlFor="youtubeURL" className="block text-sm font-medium text-white">
              YouTube
            </Label>
            <Input
              type="text"
              id="youtubeURL"
              value={youtubeURL}
              onChange={(e) => setYoutubeURL(e.target.value)}
              className="w-full mt-1"
              placeholder="The creator's YouTube handle (without the @)"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="twitterURL" className="block text-sm font-medium text-white">Twitter</Label>
            <Input
              type="text"
              id="twitterURL"
              value={twitterURL}
              onChange={(e) => setTwitterURL(e.target.value)}
              className="w-full mt-1"
              placeholder="The creator's Twitter handle (without the @)"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="instagramURL" className="block text-sm font-medium text-white">Instagram</Label>
            <Input
              type="text"
              id="instagramURL"
              value={instagramURL}
              onChange={(e) => setInstagramURL(e.target.value)}
              className="w-full mt-1"
              placeholder="The creator's Instagram handle (without the @)"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Creator
        </Button>
      </form>
    </div>
  );
};

export default AddCreator;
