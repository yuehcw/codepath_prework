import { Card } from '@/components/ui/card';
import {
  FaEdit,
  FaInfoCircle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreatorCard = ({
  id,
  name,
  description,
  imageURL,
  youtubeURL,
  twitterURL,
  instagramURL,
  detailURL,
  editURL,
}) => {
  return (
    <Card className="relative overflow-hidden rounded-xl h-80 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <img
        src={imageURL || '/api/placeholder/400/150'}
        alt={name}
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-white">{name}</h2>
          <div className="flex space-x-4">
            <Link to={`/view/${id}`} aria-label="View creator details">
              <FaInfoCircle className="w-6 h-6 text-white hover:text-blue-500 hover:cursor-pointer" />
            </Link>
            <Link to={`/edit/${id}`} aria-label="Edit creator">
              <FaEdit className="w-6 h-6 text-white hover:text-green-500 hover:cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex space-x-10 mt-2">
            {youtubeURL && (
              <a href={youtubeURL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="w-6 h-6 text-red-500 hover:text-red-600" />
              </a>
            )}
            {twitterURL && (
              <a href={twitterURL} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
              </a>
            )}
            {instagramURL && (
              <a href={instagramURL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
              </a>
            )}
          </div>
          <p className="pt-[5%] text-2xl font-semibold text-white line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default CreatorCard;