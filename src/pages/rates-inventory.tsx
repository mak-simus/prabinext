import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import TabNavigation from '../components/TabNavigation';
import RatesTable from '../components/RatesTable';
import Pagination from '../components/Pagination';

const RatesInventoryPage = () => {
  return (
    <div className="rates-inventory-page">
      <Breadcrumb path="Rates & Inventory > Update Rates" />
      <TabNavigation />
      <RatesTable />
      <Pagination />
    </div>
  );
};

export default RatesInventoryPage;
