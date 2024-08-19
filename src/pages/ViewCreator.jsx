import { deleteContentCreator, fetchCreator } from '@/actions/supabaseActions';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCreator = async () => {
      setLoading(true);
      const data = await fetchCreator(id);
      if (data) {
        setCreator(data);
        setError(null);
      } else {
        setError('Failed to fetch creator data');
      }
      setLoading(false);
    };

    getCreator();
  }, [id]);

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

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!creator)
    return <div className="text-center text-white">No creator found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Toaster /> {/* Make sure this is included */}
      <div className="w-full max-w-6xl bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col md:flex-row p-4 items-center justify-center">
          <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:pr-14 flex items-center justify-center">
            <img
              src={creator.imageURL || '/placeholder-image.jpg'}
              alt={creator.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 text-white flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-blue-400 mb-2 text-center">
              {creator.name}
            </h1>
            <p className="text-2xl text-gray-300 mb-6 text-left pt-[5%]">
              {creator.description}
            </p>
            <div className="space-y-4 text-center">
              {creator.youtubeURL && (
                <a
                  href={creator.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-300 hover:text-white text-xl"
                >
                  <FaYoutube className="mr-3 text-2xl" /> @
                  {creator.name.toLowerCase().replace(/\s+/g, '')}
                </a>
              )}
              {creator.twitterURL && (
                <a
                  href={creator.twitterURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-300 hover:text-white text-xl"
                >
                  <FaTwitter className="mr-3 text-2xl" /> @
                  {creator.name.toLowerCase().replace(/\s+/g, '')}
                </a>
              )}
              {creator.instagramURL && (
                <a
                  href={creator.instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-300 hover:text-white text-xl"
                >
                  <FaInstagram className="mr-3 text-2xl" /> @
                  {creator.name.toLowerCase().replace(/\s+/g, '')}
                </a>
              )}
            </div>
            <div className="mt-6 flex space-x-4">
              <Button
                onClick={() => navigate(`/edit/${id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
