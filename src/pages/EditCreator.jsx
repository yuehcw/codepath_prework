import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCreator, editContentCreator, deleteContentCreator } from '@/actions/supabaseActions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import toast, { Toaster } from 'react-hot-toast';

const EditCreator = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeURL, setYoutubeURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [instagramURL, setInstagramURL] = useState('');

  useEffect(() => {
    const getCreator = async () => {
      const data = await fetchCreator(id); 
      if (data) {
        setName(data.name);
        setImageURL(data.imageURL);
        setDescription(data.description);
        setYoutubeURL(data.youtubeURL);
        setTwitterURL(data.twitterURL);
        setInstagramURL(data.instagramURL);
      } else {
        console.error('Failed to fetch creator data.');
      }
    };

    getCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCreator = { name, imageURL, description, youtubeURL, twitterURL, instagramURL };
    const result = await editContentCreator(id, updatedCreator);

    if (result) {
      console.log('Creator updated successfully:', result);
      navigate('/');
    } else {
      console.error('Failed to update creator.');
    }
  };

  const handleDelete = async () => {
    const confirmDelete = () => (
      <span>
        Are you sure you want to delete this creator?
        <div className="mt-4 flex space-x-2">
          <button
            onClick={async () => {
              toast.dismiss();
              await deleteContentCreator(id);
              // toast.success('Creator deleted successfully');
              navigate('/');
            }}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-300 text-black rounded"
          >
            No
          </button>
        </div>
      </span>
    );

    toast(confirmDelete, {
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
      <Toaster />
      <h1 className="text-4xl font-bold mb-8 text-white">Edit Creator</h1>
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
        <div className="flex space-x-4">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={handleDelete}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete Creator
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
