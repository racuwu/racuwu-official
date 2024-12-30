import React from 'react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Avenues', href: '/avenues' },
      { name: 'Join Us', href: '/joinus' },
      { name: 'Projects', href: '/projects' },
      { name: 'About', href: '/about' },
      { name: 'BOD', href: '/bod' },
      { name: 'Club History', href: '/clubhistory' }
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: 'fab fa-facebook-f'
      },
      {
        name: 'Instagram',
        href: '#',
        icon: 'fab fa-instagram'
      },
      {
        name: 'Twitter',
        href: '#',
        icon: 'fab fa-twitter'
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: 'fab fa-linkedin-in'
      }
    ]
  };

  return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand Section */}
            <div className="space-y-8 xl:col-span-1">
              <img
                  className="h-12 w-auto filter brightness-0 invert transition-transform hover:scale-105 duration-300"
                  src="/assets/images/logo/racuwu.png"
                  alt="Company Logo"
              />
              <p className="text-gray-400 text-base">
                Creating impactful change through community service, leadership development, and global citizenship.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Quick Links
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.main.slice(0, 3).map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-400 hover:text-pink-400 transition duration-300">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
                {/* Resources */}
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Infomation
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.main.slice(3).map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-400 hover:text-pink-400 transition duration-300">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} RACUWUB. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex space-x-6 mt-4 md:mt-0">
                {navigation.social.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      <i className={`${item.icon} text-xl`} />
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}