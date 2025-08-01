import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Melvin Jones Repol
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Building modern software experiences with passion and precision.
              Striving for excellence, one project at a time.
            </p>
            <small className="block mt-4 text-xs text-green-400">
              This site is Open Source.{" "}
              <Link
                href="https://github.com/mrepol742/melvinjonesrepol.com"
                target="_blank"
                className="underline hover:text-green-300"
              >
                View on GitHub
              </Link>
            </small>
            <small className="block mt-2 text-xs text-gray-500">
              mrepol742@gmail.com
            </small>
          </div>
          {/* Links */}
          <div>
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gaming"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-team"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    My Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-friends"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    My Friends
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-me"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/projects/webvium-browser"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Webvium Browser
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/orion-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Orion Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/axleshift-core-1"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Axleshift Core 1
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/point-of-sale"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Point of Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/ulisha-store"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Ulisha Store
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/canis-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Canis Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-3">
              <Link
                href="https://facebook.com/melvinjonesrepol"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon
                  size={20}
                  className="hover:text-blue-500 transition"
                />
              </Link>
              <Link
                href="https://instagram.com/melvinjonesrepol"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon
                  size={20}
                  className="hover:text-pink-400 transition"
                />
              </Link>
              <Link
                href="https://x.com/@mrepol742"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon
                  size={20}
                  className="hover:text-blue-400 transition"
                />
              </Link>
              <Link
                href="https://github.com/mrepol742"
                target="_blank"
                aria-label="GitHub"
              >
                <GithubIcon
                  size={20}
                  className="hover:text-gray-300 transition"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/mrepol742"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon
                  size={20}
                  className="hover:text-blue-700 transition"
                />
              </Link>
              <Link
                href="https://youtube.com/@mrepol742"
                target="_blank"
                aria-label="YouTube"
              >
                <YoutubeIcon
                  size={20}
                  className="hover:text-red-500 transition"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Melvin Jones Repol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
