import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Avatar from './ProfileAvatar';
const solutions = [
  {
    name: "Eden Tuan",
    description: "Mentioned you in a comment",
    time: "3 minutes ago",
    href: "##",
  },
  {
    name: "Leo Messi",
    description: "Create your own targeted content",
    time: "1 minute ago",
    href: "##",
  },
  {
    name: "Leo Kante",
    description: "Keep track of your growth",
    time: "3 minutes ago",
    href: "##",
  },
];

export default function NotificationPopup({ className }) {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`flex items-center focus:outline-none ${className}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.962 17.986H18.772C19.0372 18.0009 19.3018 17.9476 19.5405 17.8311C19.7793 17.7147 19.9842 17.5391 20.1358 17.321C20.2874 17.1029 20.3806 16.8497 20.4066 16.5853C20.4325 16.321 20.3903 16.0544 20.284 15.811C19.924 14.723 18.489 13.418 18.489 12.134C18.489 9.284 18.489 8.534 17.085 6.858C16.6301 6.31908 16.0669 5.88194 15.432 5.575L14.649 5.195C14.5172 5.11624 14.4035 5.01047 14.3154 4.88466C14.2274 4.75885 14.1669 4.61584 14.138 4.465C14.0597 3.95741 13.7913 3.49859 13.3873 3.18159C12.9832 2.8646 12.4736 2.71316 11.962 2.758C11.4596 2.72784 10.964 2.88602 10.572 3.20167C10.18 3.51731 9.91972 3.96775 9.84201 4.465C9.80682 4.62082 9.73779 4.76699 9.6398 4.89315C9.54182 5.0193 9.41727 5.12236 9.27501 5.195L8.49201 5.575C7.85744 5.88206 7.29458 6.31919 6.84001 6.858C5.43701 8.534 5.43701 9.284 5.43701 12.134C5.43701 13.418 4.06701 14.592 3.70701 15.745C3.49001 16.442 3.37001 17.986 5.18701 17.986H11.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.225 17.986C15.2339 18.4169 15.1555 18.8452 14.9947 19.2451C14.8338 19.645 14.5938 20.0082 14.289 20.313C13.9842 20.6178 13.621 20.8578 13.2211 21.0186C12.8212 21.1795 12.393 21.2578 11.962 21.249C11.5311 21.2581 11.1027 21.18 10.7027 21.0192C10.3028 20.8585 9.93949 20.6184 9.63473 20.3136C9.32997 20.0087 9.09005 19.6454 8.92941 19.2453C8.76878 18.8453 8.69075 18.417 8.70002 17.986" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="notification-popup__wrapper absolute z-10 w-screen max-w-xs sm:max-w-sm px-4 mt-3 -right-10 top-[2rem] sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid bg-white dark:bg-neutral-800">
                    <div className="notification-header p-4 border-b border-b-1 border-gray-300 dark:border-neutral-600">
                      <h6 className="text-xl m-0 text-black dark:text-white">Notification</h6>
                    </div>
                    <div className="notification-body p-4">
                      <div className="flex flex-col gap-y-2 notification-wrapper">
                        {
                          solutions && Array.isArray(solutions) && solutions?.map((item, idx) => (
                            <div key={idx} className="notification-item flex gap-4 p-2 border border-1 border-gray-300 dark:border-neutral-600 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600 cursor-pointer">
                              <Avatar sizeClass="w-8 h-8 sm:w-12 sm:h-12 text-base" radius="rounded-full" containerClassName="border border-2 border-purple-900" />
                              <div className="notification-content space-y-1 flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                  Eden Tuan
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                  Mentioned you in a comment
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-400">
                                  3 minutes ago
                                </p>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
