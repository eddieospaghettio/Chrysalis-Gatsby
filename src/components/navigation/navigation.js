import React from "react";
import { Link } from "gatsby";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
//import NavItems from './navItems';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default ({navItems}) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {navItem.label}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1"></div>
                    {navItem.children.map((navItemChild, j) => (
                      <Menu.Item>
                      {({ active }) => (
                        <a
                          href={navItemChild.path}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {navItemChild.label}
                        </a>
                      )}
                    </Menu.Item>
                    ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      );
    }
    return (
      <Link
          key={"topNavItem" + i}
          to={navItem.path}>
          {navItem.label}
      </Link>
    );
  });
  return (
    <nav>
        {navList}
      {/* <li>
          <Link to={`/services`}>Services</Link>
        </li>
        <li>
          <Link to={`/blog`}>Blog</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li> */}
    </nav>
  );
};
