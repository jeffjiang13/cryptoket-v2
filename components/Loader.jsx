import Image from 'next/image';

import loader from '../assets/loader.gif';

const Loader = () => (
  <div className="flexCenter w-full my-4">
    <Image src={loader} alt="loader" width={100} objectFit="contain" />
  </div>
);

export default Loader;
