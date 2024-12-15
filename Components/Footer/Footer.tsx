import Image from "next/image";

import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,
  ImPinterest,
} from "react-icons/im";
import { PiClockClockwise } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-[#0D0D0DF2]">
      {/* Footer Main Section */}
      <div className="w-full min-h-[740px] pt-28 px-4 sm:px-8 lg:px-16">
        {/* Support Section */}
        <div className="flex flex-wrap justify-between items-center max-w-5xl mx-auto py-8 gap-y-4">
          <div className="max-w-md">
            <h3 className="font-bold text-2xl text-white">
              <span className="text-primary">St</span>ill You Need Our
              Support?
            </h3>
            <p className="text-base text-gray-300">
              Don&#44;t wait! Make a smart & logical quote here. It&#44;s pretty easy.
            </p>
          </div>

          {/* Email Subscription */}
          <div className="flex w-full sm:w-auto flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none bg-primary placeholder-white text-sm"
            />
            <button className="px-4 py-3 bg-white text-primary rounded-b-lg sm:rounded-r-lg sm:rounded-b-none text-sm">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary mx-auto max-w-5xl"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-8 max-w-5xl mx-auto">
          {/* About Us Section */}
          <div>
            <h4 className="font-semibold text-xl text-white">About Us</h4>
            <p className="text-sm text-gray-300 mt-4">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-primary w-[78px] h-[72px] text-white pt-4 pl-4">
                <PiClockClockwise className="w-10 h-10 " />
              </div>
              <div>
                <p className="text-sm text-gray-300">Opening Hours</p>
                <p className="text-sm text-white">Mon - Sat: 8:00 - 6:00</p>
                <p className="text-sm text-white">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="font-semibold text-xl text-white">Useful Links</h4>
            <ul className="text-sm text-gray-300 mt-4 space-y-2">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-semibold text-xl text-white">Help?</h4>
            <ul className="text-sm text-gray-300 mt-4 space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h4 className="font-semibold text-xl text-white">Recent Posts</h4>
            <div className="flex gap-4 items-center mt-4">
              <Image
                src={"/FooterImg/Business1.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-white">Keep Your Business</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Image
                src={"/FooterImg/Business2.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-white">Keep Your Business</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Image
                src={"/FooterImg/Business3.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-white">Keep Your Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="bg-primary py-4">
        <div className="flex flex-wrap justify-between items-center max-w-5xl mx-auto px-4">
          <p className="text-sm text-white">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <div className="p-2 bg-white rounded-sm">
              <ImFacebook className="text-primary" />
            </div>
            <div className="p-2 bg-white rounded-sm">
              <ImTwitter className="text-primary" />
            </div>
            <div className="p-2 bg-white rounded-sm">
              <ImInstagram className="text-primary" />
            </div>
            <div className="p-2 bg-white rounded-sm">
              <ImYoutube className="text-primary" />
            </div>
            <div className="p-2 bg-white rounded-sm">
              <ImPinterest className="text-primary" />
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
