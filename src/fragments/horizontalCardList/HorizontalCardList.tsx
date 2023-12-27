import React from 'react';
import ViewAllBtn from './fragments/ViewAllBtn';

function PopularCategories (props: {
  itemsWrapperClassName?: string;
  data: any[]; // Adjust the type of your data array
  title?: string;
  href?: object;
  itemProps?: object;
  renderItem?: Function;
}) {
  const { data, title, renderItem, itemProps={}, href, itemsWrapperClassName='grid-cols-7' } = props
  return (
    <div>
      <div className="flex items-center justify-between gap-1 my-3">
        <h2 className="text-[24px] font-bold">
          {title || 'Section Title'}
        </h2>

        <ViewAllBtn
          href={ {...href} }
        />
      </div>

      <div 
        className={['grid gap-[0.8rem]', itemsWrapperClassName].filter(Boolean).join(' ')}
      >
        {data.map((item, index) => (
          renderItem ? (
            <div key={index}>
              {
                renderItem({key: String(index), data: item, ...itemProps })
              }
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;