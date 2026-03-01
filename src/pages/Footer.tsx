import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center"><img src="logo_img.png" className="w-auto h-10"/> </div>
             
        <h3 className="font-serif text-2xl font-semibold mb-2">Caveview Homestay</h3>
        <p className="text-gray-300 mb-4">Experience Heritage. Embrace Hospitality.</p>
        <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
          <span>Made with</span>
          <Heart size={14} className="text-orange-500 fill-orange-500" />
          <span>in Badami</span>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          © 2026 Caveview Homestay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;