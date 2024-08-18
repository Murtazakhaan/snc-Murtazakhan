import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useCurrentTime } from '@/hooks/useCurrentTime';

export const Clock: FunctionComponent = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const currentTime = useCurrentTime();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Return null or an empty placeholder to avoid rendering until the component has mounted
    return null;
  }

  // Formatting the date and time
  const day = currentTime.getDate().toString().padStart(2, '0');
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = currentTime.getFullYear();

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  const formattedTime = `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;

  return (
    <div className="relative w-[40%] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-5 my-4">
      <div className={classNames("flex justify-center items-center", "h-32 bg-cover bg-center", "bg-gray-300")}>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            {formattedTime}
          </h2>
          <p className="text-gray-600">Current Time</p>
        </div>
      </div>
    </div>
  );
};
