import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
<a
  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
  href="https://www.google.com/search?q=qp+cleaners&rlz=1C1RXQR_enCA1031CA1031&oq=qp+cleaners&aqs=chrome.0.69i59l2j69i64j0i512l2j69i60l2j69i61.999j0j7&sourceid=chrome&ie=UTF-8#lrd=0x537170d560a92717:0x4c41a39d71ae74d2,3,,,,"
  target="_blank" // Opens the link in a new tab/window
>
  Leave a review
</a>

            
        </>
    )
}

export default NavLinks;