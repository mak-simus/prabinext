import React from 'react';

const Breadcrumb = ({ path }: { path: string }) => {
  return (
    <div className="breadcrumb">
      {path}
    </div>
  );
};

export default Breadcrumb;
