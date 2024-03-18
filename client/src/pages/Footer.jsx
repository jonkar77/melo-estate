import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white z-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
          <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-green-700 text-[26px]'>Melon</span>
            <span className='text-red-700 text-[26px]'>Estate</span>
          </h1>
        </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi ullam! Saepe nam minima in, odio iusto dolorum quod praesentium tempora esse cupiditate</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Help Center</h2>
            <ul className="space-y-2">
              <li><Link to="#">Discord Server</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Licensing</Link></li>
              <li><Link to="#">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Download</h2>
            <ul className="space-y-2">
              <li><Link to="#">iOS</Link></li>
              <li><Link to="#">Android</Link></li>
              <li><Link to="#">Windows</Link></li>
              <li><Link to="#">MacOS</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <p>&copy; ojdevs 2024</p>
          <p>All rights reserved</p>
          <div className="flex space-x-4">
            <Link to="#"><BsFacebook className="text-white" /></Link>
            <Link to="#"><BsInstagram className="text-white" /></Link>
            <Link to="#"><BsTwitter className="text-white" /></Link>
            <Link to="#"><BsGithub className="text-white" /></Link>
            <Link to="#"><BsDribbble className="text-white" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
