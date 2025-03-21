export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="border-b border-gray-700 pb-6">
            <p className="text-center text-sm">
              Top companies choose <span className="text-purple-400 font-semibold">Udemy Business</span> to build in-demand career skills.
            </p>
          </div>
  
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-3">Certifications by Issuer</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Certifications</li>
                <li>Tableau Certifications</li>
                <li>Cisco Certifications</li>
                <li className="text-purple-400">See all Certifications</li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-3">Web Development</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Angular</li>
                <li>Java</li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-3">IT Certifications</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AZ-900: Microsoft Azure</li>
                <li>Kubernetes</li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-3">Data Science</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Python</li>
                <li>Machine Learning</li>
                <li>ChatGPT</li>
                <li>Deep Learning</li>
              </ul>
            </div>
  
            {/* Column 5 */}
            <div>
              <h3 className="font-semibold mb-3">Business & Intelligence</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Microsoft Excel</li>
                <li>SQL</li>
                <li>Power BI</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6 text-sm text-gray-300">
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Discovery Udemy</h3>
              <ul className="space-y-2">
                <li>Get the App</li>
                <li>Teach on Udemy</li>
                <li>Affiliate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Udemy for Business</h3>
              <ul className="space-y-2">
                <li>Udemy Business</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal & Accessibility</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Udemy, Inc.</p>
            <div className="flex space-x-4">
              <span>Cookie Settings</span>
              <span className="flex items-center space-x-1">
                <span>🌍</span> <span>English</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  