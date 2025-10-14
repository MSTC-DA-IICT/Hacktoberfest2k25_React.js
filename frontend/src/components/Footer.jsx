/**
 * FOOTER COMPONENT - Site footer
 *
 * HACKTOBERFEST TODO:
 * This component displays the footer with links and information.
 *
 * CONTRIBUTOR TASKS:
 * 1. Add site information
 * 2. Add social media links (GitHub, etc.)
 * 3. Add navigation links
 * 4. Add copyright information
 * 5. Make responsive
 * 6. Style with Tailwind CSS
 *
 * SECTIONS TO INCLUDE:
 * - About the project
 * - Quick links
 * - Social links
 * - Copyright
 */

import { Link } from 'react-router-dom';

/**
 * TODO: IMPLEMENT FOOTER COMPONENT
 *
 * Structure:
 * 1. Multiple columns with different sections
 * 2. Responsive layout (stack on mobile)
 * 3. Links to important pages
 * 4. Social media icons
 * 5. Copyright text
 *
 * EXAMPLE STRUCTURE:
 * <footer className="bg-gray-800 text-white">
 *   <div className="container mx-auto px-4 py-8">
 *     <div className="grid md:grid-cols-3 gap-8">
 *       <AboutSection />
 *       <QuickLinks />
 *       <SocialLinks />
 *     </div>
 *     <Copyright />
 *   </div>
 * </footer>
 */

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">InterviewPrep</h3>
            <p className="text-gray-300 text-sm">
              A community-sourced interview question bank to help students prepare for internships and placements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-gray-300 hover:text-white transition">
                  Browse Questions
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-gray-300 hover:text-white transition">
                  Submit Question
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* TODO: Add actual social media links */}
              <a
                href="https://github.com/yourusername/interviewprep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* TODO: Add more social icons as needed */}
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Built for Hacktoberfest 2024
              <br />
              Contributions welcome!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} InterviewPrep. Open source project for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
